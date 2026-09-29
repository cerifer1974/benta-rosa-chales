import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Facebook, Instagram, Mail, MapPin, Menu, MessageCircle, Phone, Star, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BookingPanel } from "@/components/BookingPanel";
import { ADDRESS, BOOKING_URL, EMAIL, FACEBOOK_URL, INSTAGRAM_URL, MAPS_QUERY, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/site";
import logo from "@/assets/bentaro/logo.png";
import { ImageSlot } from "@/components/ImageSlot";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { chaleAFrame, chaleBelaVista, chaleIglu, chaleImperial, faixaInverno, galeria, galeriaChales, hero, urubiciPrincipal, urubiciSecundaria, type SiteImage } from "@/data/images";

const TITLE = "Chalés de Luxo em Urubici, SC | Benta Rosa – Morro da Igreja";
const DESCRIPTION = "Chalés de luxo no Morro da Igreja, a 1.450 m de altitude em Urubici. Neve, araucárias e vista para a serra. Reserve direto.";
const GOOGLE_REVIEWS_URL = "https://www.google.com/travel/hotels/s/zha9cqo5e7rHYrSQ9";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Benta Rosa Chalés de Luxo",
  telephone: "+55-49-99984-4794",
  email: EMAIL,
  image: "https://www.bentarosaurubici.com.br/",
  url: "https://www.bentarosaurubici.com.br/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Estrada Geral de Santa Terezinha, Parque das Araucárias, Lote 41 – Morro da Igreja",
    addressLocality: "Urubici",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Home,
});

type Stay = { key: string; name: string; image: SiteImage; line: string; description: string; tags: string[]; price: string | null; feature: boolean };

// price: null => exibe "Consulte valores"
const stays: Stay[] = [
  { key: "chaleAFrame", name: "Chalé A-Frame", image: chaleAFrame, line: "Arquitetura em A suspensa sobre o vale.", description: "[PREENCHER — descrição completa do Chalé A-Frame]", tags: ["Hidromassagem", "Lareira", "Passarela de vidro"], price: null, feature: true },
  { key: "chaleIglu", name: "Chalé Iglu", image: chaleIglu, line: "Dormir sob um domo aberto para o céu.", description: "[PREENCHER — descrição completa do Chalé Iglu]", tags: ["Domo de vidro", "Vista panorâmica", "Integração com a mata"], price: null, feature: true },
  { key: "chaleImperial", name: "Chalé Imperial", image: chaleImperial, line: "Luxo clássico, reservado para dois.", description: "[PREENCHER — descrição completa do Chalé Imperial]", tags: ["Luxo clássico", "Privacidade", "Ideal para casais"], price: null, feature: false },
  { key: "chaleBelaVista", name: "Casa Bela Vista", image: chaleBelaVista, line: "Nossa opção mais acessível, com o mesmo cenário.", description: "[PREENCHER — descrição completa da Casa Bela Vista]", tags: ["Aconchego", "Vista para as montanhas"], price: null, feature: false },
];

const reviews = [
  {
    text: "Nossa experiência foi simplesmente perfeita! Desde a chegada fomos recebidos com muito carinho e encontramos uma deliciosa cestinha de café nos esperando. O chalé é impecável: extremamente limpo, aconchegante, bem equipado e com uma vista maravilhosa.",
    name: "Elita Fabiana",
    context: "Férias · Casal",
  },
  {
    text: "Nossa experiência no chalé foi simplesmente inesquecível! Desde a recepção até os pequenos detalhes da estadia, tudo é pensado com muito carinho. Lugar maravilhoso para descansar, se conectar com a natureza e viver momentos especiais.",
    name: "Muriel da Cunha Silveira",
    context: "Férias · Casal",
  },
  {
    text: "A experiência na Benta Rosa é de tirar o fôlego — assim como a vista que tivemos do nosso chalé. Ficamos no Imperial e dá vontade de morar, de tão perfeito. Tudo delicioso e caseiro. A energia desse lugar é surreal.",
    name: "Ana Carolina Linhares",
    context: "Férias · Casal",
  },
];

const attractions = [
  { name: "Morro da Igreja", line: "Um dos pontos mais altos e frios do Sul, com vista para a Pedra Furada." },
  { name: "Pedra Furada", line: "Formação rochosa com um arco natural esculpido pelo vento." },
  { name: "Serra do Corvo Branco", line: "Estrada cênica cortada entre paredões de rocha." },
  { name: "Cascata Véu de Noiva", line: "Queda d'água cercada de mata, uma das mais visitadas da cidade." },
  { name: "Inscrições rupestres", line: "Sítios arqueológicos com gravuras pré-históricas." },
  { name: "Culinária serrana", line: "Pinhão, truta, queijo serrano e a tradição campeira." },
];

const navItems = [
  ["#acomodacoes", "Acomodações"],
  ["#experiencia", "Experiência"],
  ["#urubici", "Urubici"],
  ["#avaliacoes", "Avaliações"],
  ["#contato", "Contato"],
] as const;

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openStay, setOpenStay] = useState<Stay | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-araucaria text-paper">
      <header className={`site-header ${scrolled || menuOpen ? "is-solid" : ""}`}>
        <a href="#top" aria-label="Benta Rosa, início" className="flex min-w-0 items-center gap-3">
          <img src={logo} alt="" className="size-10 shrink-0 object-contain brightness-0 invert" />
          <span className="truncate font-serif text-sm uppercase tracking-[0.12em]">Benta Rosa</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navItems.map(([href, label]) => <a key={href} href={href} className="nav-link">{label}</a>)}
          <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="button-primary">Reservar</a>
        </nav>
        <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} className="icon-button lg:hidden">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>
      {menuOpen && (
        <nav className="mobile-menu" aria-label="Navegação para celular">
          {navItems.map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="button-primary">Reservar</a>
        </nav>
      )}

      <section id="top" className="hero-section">
        <ImageSlot image={hero} eager className="absolute inset-0 size-full object-cover" />
        <div className="hero-overlay" />
        <div className="relative mx-auto flex hero-inner max-w-[1440px] flex-col justify-end gap-12 px-5 pb-12 pt-28 md:px-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="hero-copy">
            <h1>Hospedagem de luxo entre araucárias</h1>
            <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-paper md:text-lg">Chalés autorais no alto do Morro da Igreja. Arquitetura, silêncio e a Serra Catarinense, onde o inverno pode ter neve.</p>
            <a href="#experiencia" className="mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-[0.12em] text-paper">
              Descubra <ArrowDown size={15} aria-hidden />
            </a>
          </div>
          <BookingPanel />
        </div>
      </section>

      <section id="experiencia" className="section-shell section-pad">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-5 text-sand">A experiência · 1.450 m</p>
            <h2 className="section-title">O privilégio de acordar acima das nuvens.</h2>
          </div>
          <div className="space-y-4 lg:col-span-5 lg:col-start-8 lg:pt-12">
            <p className="body-copy">A 1.450 m de altitude, o inverno traz temperaturas negativas e, em alguns dias, neve.</p>
            <p className="body-copy">Entre araucárias e uma lagoa em formato de coração, os chalés ficam à beira do penhasco, de frente para a serra.</p>
            <p className="body-copy">Um caseiro acompanha cada estadia, para que vocês só precisem desacelerar.</p>
          </div>
        </div>
      </section>

      <section id="acomodacoes" className="section-shell pb-20 md:pb-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div><p className="eyebrow mb-4 text-sand">Acomodações</p><h2 className="section-title">Quatro formas de ver a serra.</h2></div>
        </div>
        <div className="stays-grid">
          {stays.map((stay) => (
            <article key={stay.name} className={`stay-card ${stay.feature ? "stay-feature" : ""}`}>
              <div className="stay-media"><ImageSlot image={stay.image} className="stay-image" /></div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-2xl">{stay.name}</h3>
                <p className="mt-2 text-base text-paper/90">{stay.line}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Diferenciais">
                  {stay.tags.map((tag) => <li key={tag} className="tag">{tag}</li>)}
                </ul>
                <div className="mt-auto flex items-end justify-between gap-4 pt-6">
                  {stay.price ? (
                    <p className="text-sm text-paper/85">a partir de <strong className="font-serif text-lg font-normal text-paper">R$ {stay.price}</strong> / noite</p>
                  ) : (
                    <p className="text-sm text-paper/80">Consulte valores</p>
                  )}
                  <button type="button" onClick={() => setOpenStay(stay)} className="link-rosa" aria-label={`Ver detalhes do ${stay.name}`}>Ver detalhes <ArrowRight size={16} aria-hidden /></button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="avaliacoes" className="section-light section-pad">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4 text-terra">Avaliações</p>
              <h2 className="section-title">Quem já esteve aqui.</h2>
              <div className="review-score mt-8">
                <div className="flex items-end gap-3">
                  <strong className="font-serif text-5xl font-normal leading-none">4,9</strong>
                  <span className="mb-1 text-base text-araucaria/70">de 5</span>
                </div>
                <div className="mt-3 flex gap-1" aria-label="4,9 de 5 estrelas">
                  {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={18} className="fill-rosa-antigo text-rosa-antigo" aria-hidden />)}
                </div>
                <p className="mt-3 text-sm text-araucaria/75">257 avaliações no Google</p>
              </div>
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="button-dark mt-8 gap-2">Ver avaliações no Google <ArrowRight size={16} aria-hidden /></a>
            </div>
            <div className="grid items-start gap-4 md:grid-cols-3 lg:col-span-8">
              {reviews.map((r, i) => (
                <figure key={i} className="review-card h-auto self-start">
                  <div className="mb-5 flex gap-1" aria-label="5 de 5 estrelas">
                    {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={14} className="fill-rosa-antigo text-rosa-antigo" aria-hidden />)}
                  </div>
                  <blockquote className="font-serif text-lg leading-8">“{r.text}”</blockquote>
                  <figcaption className="mt-6 border-t border-rosa-antigo/35 pt-4 text-sm">
                    <strong className="font-medium">{r.name}</strong>
                    <span className="mt-1 block text-araucaria/65">{r.context} · Google</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="snow-band" aria-label="O frio da serra">
        <ImageSlot image={faixaInverno} className="absolute inset-0 size-full object-cover" />
        <div className="snow-overlay" />
        <p className="relative section-shell font-serif max-w-[22ch] text-[clamp(1.9rem,4.4vw,4rem)] leading-tight">Onde o inverno chega com névoa,<br />geada e, às vezes, neve.</p>
      </section>

      <section id="urubici" className="section-shell section-pad">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p className="eyebrow mb-4 text-sand">Descoberta · Urubici</p><h2 className="section-title max-w-[15ch]">A serra começa aqui.</h2></div>
          <p className="body-copy max-w-md">No topo do Morro da Igreja, o frio desenha a paisagem entre campos, cachoeiras e florestas de araucárias.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <figure className="md:col-span-2"><ImageSlot image={urubiciPrincipal} className="aspect-[16/9] size-full object-cover" /></figure>
          <figure><ImageSlot image={urubiciSecundaria} className="aspect-[16/9] size-full object-cover md:aspect-auto md:h-full" /></figure>
        </div>
        <ol className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {attractions.map((a, i) => (
            <li key={a.name} className="border-t border-rosa-antigo/50 pt-5">
              <span className="eyebrow text-rosa">0{i + 1}</span>
              <h3 className="mt-2 font-serif text-xl">{a.name}</h3>
              <p className="mt-2 text-base text-paper/85">{a.line}</p>
              <p className="mt-2 text-sm text-sand">[PREENCHER] km do chalé</p>
            </li>
          ))}
        </ol>
        <a href="https://www.google.com/search?q=o+que+fazer+em+Urubici" target="_blank" rel="noreferrer" className="button-outline mt-12">Conhecer Urubici</a>
      </section>

      <section className="section-light section-pad" aria-labelledby="momentos-title">
        <div className="section-shell">
          <h2 id="momentos-title" className="section-title mb-8">Momentos na Benta Rosa</h2>
          <div className="moments-strip">
            {galeria.map((image) => <ImageSlot key={image.label} image={image} className="moment-image" />)}
          </div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="button-dark mt-6 gap-2"><Instagram size={16} aria-hidden /> @bentarosaurubici</a>
        </div>
      </section>

      <section id="contato" className="section-pad">
        <div className="section-shell text-center">
          <p className="eyebrow mb-5 text-sand">Sua próxima pausa</p>
          <h2 className="section-title">A serra espera por vocês.</h2>
          <p className="body-copy mx-auto mt-5 max-w-lg">Fale com a equipe pelo WhatsApp ou consulte agora as datas disponíveis.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="button-primary button-lg gap-2"><MessageCircle size={18} aria-hidden /> WhatsApp</a>
            <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="button-outline button-lg">Reservar</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-fog/15 pb-24 pt-14">
        <div className="section-shell grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="Benta Rosa Chalés de Luxo" className="size-16 object-contain brightness-0 invert" loading="lazy" />
            <p className="mt-4 font-serif text-lg">Benta Rosa Chalés de Luxo</p>
          </div>
          <address className="not-italic text-base leading-7 text-paper/90"><MapPin size={16} className="mb-2 text-rosa" aria-hidden />{ADDRESS}</address>
          <ul className="space-y-3 text-base text-paper/90">
            <li><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="footer-link"><Phone size={16} aria-hidden /> {PHONE_DISPLAY}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="footer-link"><Mail size={16} aria-hidden /> {EMAIL}</a></li>
            <li><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="footer-link"><Instagram size={16} aria-hidden /> Instagram</a></li>
            <li><a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="footer-link"><Facebook size={16} aria-hidden /> Facebook</a></li>
          </ul>
          <iframe title="Mapa da Benta Rosa em Urubici" src={`https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`} className="aspect-[4/3] w-full border-0" loading="lazy" />
        </div>
        <p className="section-shell mt-10 text-sm text-paper/70">© 2026 Benta Rosa · Urubici, SC</p>
      </footer>

      <Dialog open={!!openStay} onOpenChange={(o) => !o && setOpenStay(null)}>
        <DialogContent className="stay-dialog max-h-[90svh] overflow-y-auto">
          {openStay && (
            <>
              <DialogTitle className="font-serif text-3xl font-normal">{openStay.name}</DialogTitle>
              <div className="stay-dialog-gallery">
                {(galeriaChales[openStay.key] ?? []).map((image) => <ImageSlot key={image.label} image={image} className="aspect-[4/3] size-full object-cover" />)}
              </div>
              <DialogDescription className="text-base leading-7 text-araucaria">{openStay.line} {openStay.description}</DialogDescription>
              <ul className="flex flex-wrap gap-2" aria-label="Diferenciais">
                {openStay.tags.map((tag) => <li key={tag} className="tag tag-light">{tag}</li>)}
              </ul>
              <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="button-primary w-full sm:w-auto">Reservar este chalé</a>
            </>
          )}
        </DialogContent>
      </Dialog>

      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="whatsapp-float" aria-label="Falar pelo WhatsApp"><MessageCircle size={22} aria-hidden /></a>
    </main>
  );
}
