import { notFound } from "next/navigation";

// Qualquer endereço dentro de /pt, /es ou /en que não existe cai no 404 traduzido.
export default function CatchAll() {
  notFound();
}
