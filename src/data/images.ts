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
import cafePanoramicoAsset from "@/assets/bentaro/curated/caption_4.jpg.asset.json";
import amanhecerNeblinaAsset from "@/assets/bentaro/curated/caption_3.jpg.asset.json";
import horizonteAoAmanhecerAsset from "@/assets/bentaro/curated/caption_2.jpg.asset.json";
import cafeDaManhaAsset from "@/assets/bentaro/curated/caption_1.jpg.asset.json";
import interiorPanoramicoAsset from "@/assets/bentaro/curated/caption.jpg.asset.json";
import chaleIgluAsset from "@/assets/bentaro/curated/chale-iglu-inspirado.jpg.asset.json";
import chaleImperialNoiteAsset from "@/assets/bentaro/curated/chale-imperial-a-noite.jpg.asset.json";
import vistaAraucariasAsset from "@/assets/bentaro/curated/em-meio-as-araucarias.jpg.asset.json";
import nascerDoSolAsset from "@/assets/bentaro/curated/nascer-do-sol-espetacular.jpg.asset.json";
import piscinaImperialAsset from "@/assets/bentaro/curated/piscina-aquecida-e-climinha.jpg.asset.json";

export type SiteImage = { src: string | null; alt: string; label: string };
const img = (label: string, src: string | null, alt: string): SiteImage => ({ label, src, alt });

export const hero = img("hero", vistaAraucariasAsset.url, "Chalé Benta Rosa entre araucárias com vista para as montanhas de Urubici");
export const chaleAFrame = img("chaleAFrame", nascerDoSolAsset.url, "Nascer do sol visto do interior do Chalé A-Frame em Urubici");
export const chaleIglu = img("chaleIglu", chaleIgluAsset.url, "Chalé Iglu envidraçado em meio à floresta de araucárias");
export const chaleImperial = img("chaleImperial", chaleImperialNoiteAsset.url, "Chalé Imperial iluminado à noite com piscina privativa");
export const chaleBelaVista = img("chaleBelaVista", belaVista, "Casa Bela Vista com vista para as montanhas de Urubici");
export const faixaInverno = img("faixaInverno", horizonteAoAmanhecerAsset.url, "Amanhecer frio e nublado visto do chalé na Serra Catarinense");
export const urubiciPrincipal = img("urubiciPrincipal", interiorPanoramicoAsset.url, "Suíte panorâmica aberta para as montanhas de Urubici");
export const urubiciSecundaria = img("urubiciSecundaria", amanhecerNeblinaAsset.url, "Neblina entre as araucárias vista da cama do chalé");
export const galeria: SiteImage[] = [
  img("galeria 1", cafeDaManhaAsset.url, "Café da manhã servido para duas pessoas no chalé"),
  img("galeria 2", cafePanoramicoAsset.url, "Café da manhã diante das janelas panorâmicas do chalé"),
  img("galeria 3", piscinaImperialAsset.url, "Piscina aquecida do Chalé Imperial em manhã de neblina"),
  img("galeria 4", amanhecerNeblinaAsset.url, "Amanhecer com neblina visto da cama do chalé"),
  img("galeria 5", nascerDoSolAsset.url, "Nascer do sol atravessando a fachada envidraçada do A-Frame"),
];

// Fotos extras de cada chalé, exibidas no modal "Ver detalhes".
const extra = (chale: string, n: number) => img(`${chale} · foto ${n}`, null, "");
export const galeriaChales: Record<string, SiteImage[]> = {
  chaleAFrame: [chaleAFrame, img("chaleAFrame · manhã", amanhecerNeblinaAsset.url, "Vista com neblina a partir da cama do A-Frame"), img("chaleAFrame · horizonte", horizonteAoAmanhecerAsset.url, "Primeira luz no horizonte vista do A-Frame"), img("chaleAFrame · exterior", vistaAraucariasAsset.url, "A-Frame cercado por araucárias e montanhas")],
  chaleIglu: [chaleIglu, img("chaleIglu · interior", interiorPanoramicoAsset.url, "Interior envidraçado com vista panorâmica para a serra"), img("chaleIglu · café", cafePanoramicoAsset.url, "Café da manhã servido diante da paisagem"), extra("chaleIglu", 4)],
  chaleImperial: [chaleImperial, img("chaleImperial · piscina", piscinaImperialAsset.url, "Fachada do Chalé Imperial com piscina aquecida"), extra("chaleImperial", 3), extra("chaleImperial", 4)],
  chaleBelaVista: [chaleBelaVista, extra("chaleBelaVista", 2), extra("chaleBelaVista", 3), extra("chaleBelaVista", 4)],
};
