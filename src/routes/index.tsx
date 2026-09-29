import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Instagram, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { BookingPanel } from "@/components/BookingPanel";
import logo from "@/assets/bentaro/logo.png";
import hero from "@/assets/bentaro/hero.jpg";
import aFrame from "@/assets/bentaro/a-frame.png";
import iglu from "@/assets/bentaro/iglu.png";
import belaVista from "@/assets/bentaro/bela-vista.jpg";
import imperial from "@/assets/bentaro/imperial.jpg";
import gallery02 from "@/assets/bentaro/gallery-02.jpg";
import gallery03 from "@/assets/bentaro/gallery-03.jpg";
import gallery04 from "@/assets/bentaro/gallery-04.jpg";
import gallery05 from "@/assets/bentaro/gallery-05.jpg";
import gallery06 from "@/assets/bentaro/gallery-06.jpg";
import gallery07 from "@/assets/bentaro/gallery-07.jpg";
import gallery08 from "@/assets/bentaro/gallery-08.jpg";

const BOOKING_URL = "https://hbook.hsystem.com.br/Booking?companyId=625b48acbf08c43c9390205e";
const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5549999844794";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Benta Rosa — Chalés de Luxo em Urubici" },
      { name: "description", content: "Chalés autorais a 1.450 metros de altitude, no Morro da Igreja, em Urubici. Natureza, privacidade e vistas cinematográficas da Serra Catarinense." },
      { property: "og:title", content: "Benta Rosa — Chalés de Luxo em Urubici" },
      { property: "og:description", content: "Uma experiência exclusiva entre araucárias, no alto da Serra Catarinense." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const stays = [
  { name: "A-Frame", image: aFrame, caption: "Hidromassagem, lareira e uma passarela de vidro à beira do penhasco." },
  { name: "Iglu", image: iglu, caption: "Domo de vidro, integração com a mata e o céu inteiro sobre a cama." },
  { name: "Bela Vista", image: belaVista, caption: "Um refúgio aconchegante e pet friendly com vista para as montanhas." },
  { name: "Imperial", image: imperial, caption: "Luxo clássico, privacidade e uma paisagem que parece cenário de filme." },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <main className="min-h-screen bg-araucaria text-paper">
      <header className="site-header">
        <a href="#top" aria-label="Benta Rosa, início" className="flex items-center gap-3">
          <img src={logo} alt="" className="size-10 object-contain brightness-0 invert" />
          <span className="font-serif text-sm uppercase tracking-[0.22em]">Benta Rosa</span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          <a href="#acomodacoes" className="nav-link">Acomodações</a>
          <a href="#experiencia" className="nav-link">Experiência</a>
          <a href="#urubici" className="nav-link">Urubici</a>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="nav-link">Reservas</a>
        </nav>
        <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-sand md:flex">
          <span className="size-1.5 rounded-full bg-sand animate-pulse" /> 1.450 m · Morro da Igreja
        </div>
        <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" className="icon-button lg:hidden">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>
      {menuOpen && (
        <nav className="mobile-menu" aria-label="Navegação para celular">
          <a href="#acomodacoes" onClick={() => setMenuOpen(false)}>Acomodações</a>
          <a href="#experiencia" onClick={() => setMenuOpen(false)}>Experiência</a>
          <a href="#urubici" onClick={() => setMenuOpen(false)}>Urubici</a>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer">Reservas</a>
        </nav>
      )}

      <section id="top" className="hero-section">
        <img src={hero} alt="Chalé A-Frame Benta Rosa entre araucárias em Urubici" className="absolute inset-0 size-full object-cover" />
        <div className="hero-overlay" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-[1600px] flex-col justify-end gap-12 px-5 pb-8 pt-28 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:pb-14">
          <div className="hero-copy">
            <p className="eyebrow mb-6 text-sand">Edição · Serra Catarinense</p>
            <h1>Hospedagem de luxo entre araucárias</h1>
            <p className="mt-6 max-w-[43ch] text-sm font-light leading-relaxed text-paper/85 md:text-base">Chalés autorais no alto do Morro da Igreja. Arquitetura, silêncio e uma vista que muda com a névoa.</p>
            <a href="#experiencia" aria-label="Conhecer a experiência" className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-paper/80">
              Descubra <ArrowDown size={15} />
            </a>
          </div>
          <BookingPanel />
        </div>
      </section>

      <section id="experiencia" className="section-shell border-t border-fog/10 py-24 md:py-36">
        <div className="max-w-[850px]">
          <p className="eyebrow mb-5 text-sand">A experiência · 1.450 m</p>
          <h2 className="section-title">O privilégio de acordar acima das nuvens.</h2>
          <p className="mt-7 max-w-[62ch] text-base font-light leading-8 text-paper/70">Entre araucárias, jardins de inverno e uma lagoa em formato de coração, cada chalé foi pensado como um ponto de vista particular sobre a Serra Catarinense. O atendimento atento de um caseiro completa uma estadia feita para desacelerar.</p>
        </div>
      </section>

      <section id="acomodacoes" className="section-shell pb-28 md:pb-40">
        <div className="stays-grid">
          {stays.map((stay, index) => (
            <article className={`stay-card stay-card-${index + 1}`} key={stay.name}>
              <div className="overflow-hidden"><img src={stay.image} alt={`${stay.name} da Benta Rosa`} className="stay-image" loading="lazy" /></div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-2xl">{stay.name}</h3>
                <span className="eyebrow text-sand">0{index + 1}</span>
              </div>
              <p className="mt-2 text-sm font-light leading-6 text-paper/65">{stay.caption}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-fog/10 py-24 md:py-32">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-serif text-7xl leading-none text-terra md:text-8xl">200<span className="text-4xl">mil+</span></div>
            <p className="eyebrow mt-4 text-sand">seguidores no Instagram</p>
            <p className="mt-5 max-w-md text-sm font-light leading-7 text-paper/65">Uma comunidade que acompanha os dias de névoa, os amanheceres e a arquitetura singular da Benta Rosa.</p>
            <a href="https://www.instagram.com/bentarosaurubici" target="_blank" rel="noreferrer" className="button-outline mt-7 inline-flex items-center gap-2"><Instagram size={15} /> @bentarosaurubici</a>
          </div>
          <div className="grid grid-cols-3 gap-3 lg:col-span-7">
            {[gallery03, gallery07, gallery06].map((image, index) => <img key={image} src={image} alt={["Interior do A-Frame ao pôr do sol", "Hidromassagem com vista para a serra", "Cama sob o céu da Serra Catarinense"][index]} className="aspect-[3/4] size-full object-cover" loading="lazy" />)}
          </div>
        </div>
      </section>

      <section id="urubici" className="section-shell py-24 md:py-36">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p className="eyebrow mb-4 text-sand">Descoberta · Urubici</p><h2 className="section-title max-w-[15ch]">A serra começa aqui.</h2></div>
          <p className="max-w-md text-sm font-light leading-7 text-paper/65">No topo do Morro da Igreja, o frio desenha a paisagem entre campos, cachoeiras e florestas de araucárias.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <figure className="md:col-span-2"><img src={gallery08} alt="Chalé Benta Rosa cercado pela floresta" className="aspect-[16/9] size-full object-cover" loading="lazy" /><figcaption className="mt-4 font-serif text-base italic text-paper/80">Um refúgio cercado pela natureza exuberante da Serra Catarinense.</figcaption></figure>
          <figure><img src={gallery02} alt="Vista de dentro do chalé para as araucárias" className="aspect-square size-full object-cover" loading="lazy" /><figcaption className="mt-4 font-serif text-base italic text-paper/80">A paisagem presente até nos momentos mais íntimos.</figcaption></figure>
        </div>
      </section>

      <section className="border-t border-fog/10 py-24">
        <div className="section-shell flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-xl"><p className="eyebrow mb-5 text-sand">Sua próxima pausa</p><h2 className="section-title">A serra espera por vocês.</h2><p className="mt-5 text-sm font-light leading-7 text-paper/65">Fale com a equipe a qualquer hora ou consulte agora as datas disponíveis.</p></div>
          <div className="flex flex-wrap gap-3"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="button-primary">WhatsApp</a><a href={BOOKING_URL} target="_blank" rel="noreferrer" className="button-outline">Reservar</a></div>
        </div>
      </section>

      <footer className="section-shell flex flex-col gap-5 border-t border-fog/10 py-8 text-[10px] uppercase tracking-[0.18em] text-paper/45 md:flex-row md:items-center md:justify-between">
        <span>Benta Rosa Chalés de Luxo</span><span>Estrada Geral de Santa Terezinha · Urubici, SC</span><span>© 2026</span>
      </footer>

      {chatOpen && (
        <aside className="chat-card" aria-label="Atendimento 24 horas">
          <button type="button" onClick={() => setChatOpen(false)} aria-label="Fechar chat" className="absolute right-3 top-3 text-paper/50 hover:text-paper"><X size={16} /></button>
          <p className="eyebrow text-sand">Atendimento 24h</p>
          <h2 className="mt-3 font-serif text-xl">Como podemos ajudar?</h2>
          <p className="mt-2 text-sm font-light leading-6 text-paper/65">Nossa equipe está disponível pelo WhatsApp para dúvidas e reservas.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="button-primary mt-5 block text-center">Iniciar conversa</a>
        </aside>
      )}
      <button type="button" onClick={() => setChatOpen(!chatOpen)} className="chat-button" aria-label="Abrir atendimento 24 horas"><MessageCircle size={22} /><span className="hidden sm:inline">Chat 24h</span></button>
    </main>
  );
}
