// Troque as fotos do site apenas aqui. Use `null` para exibir um espaço neutro com o nome da função.
import heroImg from "@/assets/bentaro/hero.jpg";
import aFrame from "@/assets/bentaro/a-frame.png";
import iglu from "@/assets/bentaro/iglu.png";
import imperial from "@/assets/bentaro/imperial.jpg";
import belaVista from "@/assets/bentaro/bela-vista.jpg";
import g01 from "@/assets/bentaro/gallery-01.jpg";
import g02 from "@/assets/bentaro/gallery-02.jpg";
import g03 from "@/assets/bentaro/gallery-03.jpg";
import g04 from "@/assets/bentaro/gallery-04.jpg";
import g05 from "@/assets/bentaro/gallery-05.jpg";
import g06 from "@/assets/bentaro/gallery-06.jpg";
import g07 from "@/assets/bentaro/gallery-07.jpg";
import g08 from "@/assets/bentaro/gallery-08.jpg";

export type SiteImage = { src: string | null; alt: string; label: string };
const img = (label: string, src: string | null, alt: string): SiteImage => ({ label, src, alt });

export const hero = img("hero", heroImg, "Chalé A-Frame Benta Rosa entre araucárias no Morro da Igreja, Urubici");
export const chaleAFrame = img("chaleAFrame", aFrame, "Chalé A-Frame com passarela de vidro à beira do penhasco, Urubici");
export const chaleIglu = img("chaleIglu", iglu, "Chalé Iglu com domo de vidro entre araucárias, Urubici");
export const chaleImperial = img("chaleImperial", imperial, "Interior do Chalé Imperial com vista para a serra");
export const chaleBelaVista = img("chaleBelaVista", belaVista, "Casa Bela Vista com vista para as montanhas de Urubici");
// Pronto para receber uma foto de neve real.
export const faixaInverno = img("faixaInverno", g01, "Campos e araucárias da Serra Catarinense vistos do alto");
export const urubiciPrincipal = img("urubiciPrincipal", g08, "Chalé Benta Rosa cercado pela floresta de araucárias");
export const urubiciSecundaria = img("urubiciSecundaria", g02, "Vista de dentro do chalé para as araucárias");
export const galeria: SiteImage[] = [
  img("galeria 1", g03, "Interior do A-Frame ao pôr do sol"),
  img("galeria 2", g04, "Banheira com vista para as araucárias"),
  img("galeria 3", g05, "Sala envidraçada com vista para a serra"),
  img("galeria 4", g06, "Cama com vista para o céu da Serra Catarinense"),
  img("galeria 5", g07, "Hidromassagem com vista para a serra"),
];

// Fotos extras de cada chalé, exibidas no modal "Ver detalhes".
const extra = (chale: string, n: number) => img(`${chale} · foto ${n}`, null, "");
export const galeriaChales: Record<string, SiteImage[]> = {
  chaleAFrame: [chaleAFrame, extra("chaleAFrame", 2), extra("chaleAFrame", 3), extra("chaleAFrame", 4)],
  chaleIglu: [chaleIglu, extra("chaleIglu", 2), extra("chaleIglu", 3), extra("chaleIglu", 4)],
  chaleImperial: [chaleImperial, extra("chaleImperial", 2), extra("chaleImperial", 3), extra("chaleImperial", 4)],
  chaleBelaVista: [chaleBelaVista, extra("chaleBelaVista", 2), extra("chaleBelaVista", 3), extra("chaleBelaVista", 4)],
};
