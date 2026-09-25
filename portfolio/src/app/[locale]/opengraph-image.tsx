import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { DATA } from "@/data/resume";
import { locales, toLocale } from "@/i18n";

// Gerada no build (uma por idioma), então não depende de runtime na hospedagem.
export const alt = DATA.name;
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

const publicFile = (path: string) => readFile(join(process.cwd(), "public", path));

const getFontData = async () => {
    try {
        const [cabinetGrotesk, clashDisplay] = await Promise.all([
            publicFile("fonts/CabinetGrotesk-Medium.ttf"),
            publicFile("fonts/ClashDisplay-Semibold.ttf"),
        ]);
        return { cabinetGrotesk, clashDisplay };
    } catch (error) {
        console.error("Failed to load fonts:", error);
        return null;
    }
};

const getAvatarDataUrl = async () => {
    const avatarUrl: string = DATA.avatarUrl;
    if (!avatarUrl.startsWith("/")) return undefined;
    try {
        const file = await publicFile(avatarUrl.slice(1));
        const type = avatarUrl.endsWith(".png") ? "image/png" : "image/jpeg";
        return `data:${type};base64,${file.toString("base64")}`;
    } catch {
        return undefined;
    }
};

const styles = {
    outerWrapper: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        position: "relative",
    },
    middleWrapper: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        position: "relative",
        padding: "40px",
    },
    wrapper: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fafafa",
        position: "relative",
        padding: "40px",
        border: "1px solid #e5e5e5",
        borderRadius: "12px",
    },
    imageSection: {
        position: "absolute",
        top: "40px",
        left: "40px",
        display: "flex",
        alignItems: "center",
        zIndex: "2",
    },
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        height: "100%",
        width: "100%",
        position: "relative",
        zIndex: "1",
    },
    image: {
        width: "140px",
        height: "140px",
        borderRadius: "24px",
        border: "4px solid #e5e5e5",
        objectFit: "cover",
    },
    title: {
        fontFamily: "Clash Display",
        fontSize: "48px",
        fontWeight: "600",
        lineHeight: "1.1",
        textAlign: "left",
        color: "#000000",
        marginBottom: "16px",
        letterSpacing: "-0.02em",
        maxWidth: "900px",
    },
    description: {
        fontSize: "20px",
        fontWeight: "400",
        lineHeight: "1.5",
        textAlign: "left",
        maxWidth: "800px",
        color: "#404040",
        marginBottom: "32px",
        textWrap: "balance",
    },
} as const;

export default async function Image({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    try {
        const locale = toLocale((await params).locale);
        const description = DATA.description[locale];
        const [fontData, imageUrl] = await Promise.all([
            getFontData(),
            getAvatarDataUrl(),
        ]);

        return new ImageResponse(
            (
                <div style={styles.outerWrapper}>
                    <div style={styles.middleWrapper}>
                        <div style={styles.wrapper}>
                            {imageUrl && (
                                <div style={styles.imageSection}>
                                    <img src={imageUrl} alt={DATA.name} style={styles.image} />
                                </div>
                            )}
                            <div style={styles.mainContainer}>
                                <div style={styles.title}>{DATA.name}</div>
                                <div style={styles.description}>{description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            {
                ...size,
                fonts: fontData
                    ? [
                        {
                            name: "Cabinet Grotesk",
                            data: fontData.cabinetGrotesk,
                            weight: 400,
                            style: "normal",
                        },
                        {
                            name: "Cabinet Grotesk",
                            data: fontData.cabinetGrotesk,
                            weight: 700,
                            style: "normal",
                        },
                        {
                            name: "Clash Display",
                            data: fontData.clashDisplay,
                            weight: 600,
                            style: "normal",
                        },
                    ]
                    : undefined,
            }
        );
    } catch (error) {
        console.error("Error generating OpenGraph image:", error);
        return new Response(
            `Failed to generate image: ${error instanceof Error ? error.message : "Unknown error"}`,
            {
                status: 500,
            }
        );
    }
}


