import React, { useState, useEffect } from "react";
const WA_CARLA = "5511996747678";
const WA_FLAVIO = "5511940097798";

const waLink = (
  number: string,
  msg = "Olá! Gostaria de solicitar um orçamento de concreto usinado.",
) => `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;

const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#parceiros", label: "Parceiros" },
  { href: "#clientes", label: "Clientes" },
  { href: "#contato", label: "Contato" },
];

const TRUST = [
  {
    title: "Alta qualidade",
    desc: "Concreto produzido com controle rigoroso de qualidade em centrais especializadas.",
    icon: "quality",
  },
  {
    title: "Equipe especializada",
    desc: "Profissionais experientes em bombeamento, lajes, pisos e fundações.",
    icon: "team",
  },
  {
    title: "Pontualidade",
    desc: "Comprometidos com prazos para que sua obra nunca pare por falta de material.",
    icon: "clock",
  },
  {
    title: "Segurança",
    desc: "Operações dentro de todas as normas técnicas da construção civil.",
    icon: "shield",
  },
];
const SERVICES = [
  {
    title: "Construções",
    desc: "Concreto usinado com resistência, durabilidade e agilidade para todos os tipos de construção.",
    img: "https://images.unsplash.com/photo-1647735282077-c12699af40be?w=600&h=450&fit=crop&auto=format",
  },
  {
    title: "Reformas",
    desc: "Soluções em concreto usinado para reformas com praticidade, qualidade e durabilidade.",
    img: "https://images.unsplash.com/photo-1640101086894-7d70c3e70179?w=600&h=450&fit=crop&auto=format",
  },
  {
    title: "Inspeções",
    desc: "Concreto de qualidade e homogeneidade para garantir segurança e confiabilidade nas estruturas.",
    img: "https://images.unsplash.com/photo-1685464197644-41d9b07e1e73?w=600&h=450&fit=crop&auto=format",
  },
];
const APPLICATIONS = [
  "Lajes",
  "Vigas",
  "Pilares",
  "Pisos",
  "Baldrames",
  "Bombeamento",
];

const PORTFOLIO = [
  {
    img: "https://images.unsplash.com/photo-1784644579477-3fa2b0af8ac2?w=700&h=500&fit=crop&auto=format",
    type: "Laje residencial",
    desc: "Concretagem de laje com bombeamento em condomínio residencial.",
  },
  {
    img: "https://images.unsplash.com/photo-1610079732288-72a77bd816c9?w=700&h=500&fit=crop&auto=format",
    type: "Estrutura comercial",
    desc: "Pilares e vigas em edifício comercial de múltiplos andares.",
  },
  {
    img: "https://images.unsplash.com/photo-1640101086894-7d70c3e70179?w=700&h=500&fit=crop&auto=format",
    type: "Piso industrial",
    desc: "Piso de concreto usinado em galpão logístico de alta carga.",
  },
  {
    img: "https://images.unsplash.com/photo-1610079732357-0d20c1a98ceb?w=700&h=500&fit=crop&auto=format",
    type: "Infraestrutura",
    desc: "Baldrame e fundações com concreto de alta resistência.",
  },
];

const BENEFITS = [
  "Qualidade",
  "Pontualidade",
  "Equipe especializada",
  "Segurança",
];

const SERVICE_OPTIONS = [
  "Laje",
  "Viga",
  "Pilar",
  "Piso polido",
  "Piso industrial",
  "Piso de concreto",
  "Baldrame",
  "Bombeamento de concreto",
  "Outro",
];

function IcoQuality() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IcoTeam() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IcoClock() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IcoShield() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IcoCheck({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IcoArrow({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function IcoWA({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IcoPlay() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function IcoPhone() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.57 4.42 2 2 0 0 1 3.55 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.78-1.78a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
    </svg>
  );
}

function IcoMail() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IcoMenu({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  );
}

const ICON_MAP: Record<string, React.ReactNode> = {
  quality: <IcoQuality />,
  team: <IcoTeam />,
  clock: <IcoClock />,
  shield: <IcoShield />,
};

function SectionTag({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-5 border px-3 py-1.5 ${
        light ? "text-orange border-orange/50" : "text-orange border-orange/40"
      }`}
    >
      <span className="w-1.5 h-1.5 bg-orange rounded-full inline-block" />
      {children}
    </div>
  );
}

function BtnPrimary({
  href,
  children,
  className = "",
  target,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  onClick?: () => void;
}) {
  const cls = `inline-flex items-center justify-center gap-2 bg-orange hover:bg-[#C96D00] text-white font-bold text-sm px-7 py-3.5 transition-colors ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target ? "noopener noreferrer" : undefined}
        className={cls}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

function BtnGhost({
  href,
  children,
  className = "",
  target,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 border border-white/30 text-white font-bold text-sm px-7 py-3.5 hover:bg-white/10 transition-colors ${className}`}
    >
      {children}
    </a>
  );
}

function CFMIXLogo() {
  return (
    <div className="flex items-center gap-3 shrink-0">
      <img
        src="/assets/logo.png"
        alt="CFMIX"
        className="h-10 w-auto object-contain"
      />

      <div className="leading-tight">
        <div className="text-white font-heading font-bold text-xl tracking-wide leading-none">
          CFMIX
        </div>

        <div className="text-orange text-[9px] font-semibold tracking-widest uppercase leading-none mt-0.5">
          Locação de Bombas de concreto.
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);

    window.addEventListener("scroll", fn);

    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
Olá! Gostaria de solicitar um orçamento.

*Nome:* ${form.name}
*Telefone:* ${form.phone}
*E-mail:* ${form.email}
*Serviço:* ${form.service || "Não informado"}
*Mensagem:* ${form.message || "Não informada"}
  `.trim();

    const whatsappUrl = waLink(WA_CARLA, message);

    window.open(whatsappUrl, "_blank");

    setForm({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-graphite ${
          scrolled ? "shadow-2xl" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20 gap-3">
            <a
              href="#inicio"
              className="shrink-0"
              onClick={() => setMenuOpen(false)}
            >
              <CFMIXLogo />
            </a>

            <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-gray-400 hover:text-white text-[11px] font-semibold tracking-widest uppercase transition-colors whitespace-nowrap"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                className="lg:hidden flex items-center justify-center text-white w-10 h-10 p-0 border border-white/10 hover:bg-white/5 transition-colors"
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={menuOpen}
              >
                <IcoMenu open={menuOpen} />
              </button>
            </div>
          </div>

          {/* MENU MOBILE */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              menuOpen ? "max-h-[600px] opacity-100 pb-5" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="border-t border-white/10 pt-2">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center py-3.5 text-gray-300 hover:text-orange text-sm font-medium tracking-wide border-b border-white/5 transition-colors"
                >
                  {l.label}
                </a>
              ))}

              <BtnPrimary
                href="#contato"
                className="w-full mt-4"
                onClick={() => setMenuOpen(false)}
              >
                Solicitar orçamento <IcoArrow />
              </BtnPrimary>
            </nav>
          </div>
        </div>
      </header>

      {/* INÍCIO */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center bg-graphite pt-16"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1784644579514-4d62cf323571?w=1920&h=1080&fit=crop&auto=format"
            alt="Caminhão betoneira em canteiro de obras"
            className="w-full h-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-graphite/95 via-graphite/75 to-graphite/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <SectionTag light>Locação de Bombas de Concreto</SectionTag>

            <h1 className="font-heading text-5xl sm:text-7xl lg:text-[88px] font-bold text-white uppercase leading-none mb-6">
              Locação de bombas e equipamentos para sua obra.
            </h1>

            <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-xl leading-relaxed">
              Locação de bombas de concreto com segurança, precisão e alto
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <BtnPrimary href="#contato">
                Solicitar orçamento <IcoArrow />
              </BtnPrimary>

              <BtnGhost href={waLink(WA_CARLA)} target="_blank">
                <IcoWA size={18} /> Falar pelo WhatsApp
              </BtnGhost>
            </div>

            <div className="flex flex-wrap gap-x-7 gap-y-2.5">
              {[
                "Qualidade",
                "Pontualidade",
                "Equipe especializada",
                "Atendimento profissional",
              ].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-2 text-gray-400 text-sm"
                >
                  <span className="text-orange">
                    <IcoCheck size={14} />
                  </span>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-14 bg-gradient-to-b from-transparent to-orange/50" />
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 lg:py-28 bg-concrete">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionTag>Nossos diferenciais</SectionTag>

            <h2 className="font-heading text-4xl lg:text-6xl font-bold text-graphite uppercase leading-none mb-5">
              Qualidade e responsabilidade
            </h2>

            <p className="text-graphite-muted max-w-2xl mx-auto text-base leading-relaxed">
              Primamos pela qualidade e pontualidade de nossos serviços.
              Contamos com uma equipe especializada em bomba de concreto,
              dedicada a projetos de lajes, pisos, baldrames e diferentes
              necessidades da construção civil.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TRUST.map((c) => (
              <div
                key={c.title}
                className="bg-white p-7 border border-gray-200 hover:border-orange group transition-colors cursor-default"
              >
                <div className="text-orange mb-5 group-hover:scale-110 transition-transform inline-block">
                  {ICON_MAP[c.icon]}
                </div>

                <h3 className="font-heading text-xl font-bold text-graphite uppercase mb-2 tracking-wide">
                  {c.title}
                </h3>

                <p className="text-graphite-muted text-sm leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 lg:py-28 bg-graphite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <SectionTag light>O que fazemos</SectionTag>

            <h2 className="font-heading text-4xl lg:text-6xl font-bold text-white uppercase leading-none">
              Nossos serviços
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="group overflow-hidden">
                <div className="relative h-52 overflow-hidden bg-graphite-mid">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover opacity-65 group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 to-transparent" />

                  <div className="absolute bottom-4 left-5">
                    <span className="text-orange text-[10px] font-bold tracking-widest uppercase">
                      Serviço
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-graphite-mid border border-white/8">
                  <h3 className="font-heading text-2xl font-bold text-white uppercase mb-3 tracking-wide">
                    {s.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-white/10 p-6">
            <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-4">
              Principais aplicações
            </p>

            <div className="flex flex-wrap gap-3">
              {APPLICATIONS.map((a) => (
                <span
                  key={a}
                  className="border border-orange/50 text-orange font-heading font-bold text-sm uppercase px-4 py-1.5 tracking-wide hover:bg-orange/10 transition-colors cursor-default"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONHEÇA A CFMIX */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden bg-concrete aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1651195297119-afc97f14a40d?w=800&h=600&fit=crop&auto=format"
                  alt="Equipe CFMIX em canteiro de obras"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-orange hidden lg:block" />
              <div className="absolute -top-5 -left-5 w-12 h-12 border-2 border-concrete hidden lg:block" />
            </div>

            <div className="order-1 lg:order-2">
              <SectionTag>Conheça a CFMIX</SectionTag>

              <p className="font-heading text-4xl lg:text-5xl font-bold text-graphite uppercase leading-tight mb-6">
                Concreto de alta qualidade para projetos que exigem confiança.
              </p>

              <p className="text-graphite-muted leading-relaxed mb-4">
                Concreto usinado e bombeamento com qualidade, eficiência e
                responsabilidade para sua obra.
              </p>

              <p className="text-graphite-muted leading-relaxed mb-8">
                Produção controlada, frota preparada e equipe especializada para
                entregas no prazo em projetos de todos os portes.
              </p>

              <div className="grid grid-cols-3 gap-5 mb-8">
                {[
                  { label: "Equipe técnica", val: "Especializada" },
                  { label: "Atendimento", val: "Profissional" },
                  { label: "Entrega", val: "Pontual" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border-l-2 border-orange pl-4"
                  >
                    <div className="font-heading text-lg font-bold text-graphite uppercase leading-tight">
                      {item.val}
                    </div>

                    <div className="text-[10px] text-graphite-muted uppercase tracking-wider mt-0.5">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <BtnPrimary href="#contato">
                Solicitar orçamento <IcoArrow />
              </BtnPrimary>
            </div>
          </div>
        </div>
      </section>

      {/* TRABALHOS */}
      <section id="trabalhos" className="py-20 lg:py-28 bg-concrete">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <SectionTag>Portfólio</SectionTag>

              <h2 className="font-heading text-4xl lg:text-6xl font-bold text-graphite uppercase leading-none">
                Conheça nosso trabalho
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            {PORTFOLIO.map((p) => (
              <div
                key={p.type}
                className="group relative overflow-hidden bg-graphite-mid cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-graphite-mid">
                  <img
                    src={p.img}
                    alt={p.type}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <div className="text-orange text-[10px] font-bold tracking-widest uppercase mb-1">
                      {p.type}
                    </div>

                    <p className="text-white text-sm">{p.desc}</p>
                  </div>
                </div>

                <div className="bg-white border-t-0 border border-gray-200 px-5 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="font-heading font-bold text-graphite uppercase text-sm tracking-wide">
                    {p.type}
                  </span>

                  <span className="text-graphite-muted text-xs">{p.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="relative overflow-hidden bg-graphite aspect-video">
            <video
              src="/assets/cfmixvideo.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-contain"
            >
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          </div>
        </div>
      </section>

      {/* VANTAGENS */}
      <section className="py-20 lg:py-28 bg-graphite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionTag light>Vantagens</SectionTag>

              <h2 className="font-heading text-4xl lg:text-6xl font-bold text-white uppercase leading-none mb-6">
                Por que contratar a CFMIX?
              </h2>

              <p className="text-gray-400 leading-relaxed mb-8">
                Primamos pela qualidade e pontualidade de nosso serviço.
                Contamos com uma equipe altamente especializada em bomba de
                concreto, dedicada a projetos de lajes, pisos, baldrames, entre
                outros.
              </p>

              <div className="space-y-4 mb-10">
                {BENEFITS.map((b) => (
                  <div key={b} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-orange flex items-center justify-center shrink-0">
                      <span className="text-white">
                        <IcoCheck size={16} />
                      </span>
                    </div>

                    <span className="font-heading text-xl font-bold text-white uppercase tracking-wide">
                      {b}
                    </span>
                  </div>
                ))}
              </div>

              <BtnPrimary href="#contato">
                Solicitar orçamento <IcoArrow />
              </BtnPrimary>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden bg-graphite-mid">
                <img
                  src="/assets/cfmix.jpeg"
                  alt="Caminhão bomba de concreto em operação"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>

              <div className="absolute -top-4 -left-4 w-14 h-14 border-2 border-orange/40 hidden lg:block" />
              <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-orange/15 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold text-white uppercase leading-none mb-5">
            Vamos começar sua obra?
          </h2>

          <p className="text-white/80 text-base lg:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Entre em contato com a CFMIX e agende uma visita ou solicite seu
            orçamento.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-white text-orange font-bold text-sm px-8 py-4 hover:bg-gray-50 transition-colors"
            >
              Solicitar orçamento <IcoArrow />
            </a>

            <a
              href={waLink(WA_CARLA)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold text-sm px-8 py-4 hover:bg-white/10 transition-colors"
            >
              <IcoWA size={18} /> WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-white/90 text-sm">
            <a
              href={waLink(WA_CARLA)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <IcoPhone /> (11) 99674-7678 — Carla
            </a>

            <a
              href={waLink(WA_FLAVIO)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <IcoPhone /> (11) 94009-7798 — Flávio
            </a>

            <a
              href="mailto:orcamento@cfmix.com.br"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <IcoMail /> orcamento@cfmix.com.br
            </a>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* FORMULÁRIO */}
            <div>
              <SectionTag>Fale conosco</SectionTag>

              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-graphite uppercase leading-tight mb-8">
                Entre em contato
              </h2>

              {sent ? (
                <div className="bg-green-50 border border-green-200 p-8 text-center">
                  <div className="text-green-700 font-heading text-2xl font-bold uppercase mb-2">
                    Mensagem enviada!
                  </div>

                  <p className="text-green-600 text-sm">
                    Sua solicitação foi enviada com sucesso. Em breve entraremos
                    em contato.
                  </p>
                </div>
              ) : (
                <form
                  name="orcamento"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="orcamento" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-graphite uppercase tracking-widest mb-1.5">
                        Nome *
                      </label>

                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        className="w-full border border-gray-300 focus:border-orange px-4 py-3 text-sm transition-colors bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-graphite uppercase tracking-widest mb-1.5">
                        Telefone *
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className="w-full border border-gray-300 focus:border-orange px-4 py-3 text-sm transition-colors bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-graphite uppercase tracking-widest mb-1.5">
                      E-mail *
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full border border-gray-300 focus:border-orange px-4 py-3 text-sm transition-colors bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-graphite uppercase tracking-widest mb-1.5">
                      Tipo de serviço
                    </label>

                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-gray-300 focus:border-orange px-4 py-3 text-sm transition-colors bg-white appearance-none"
                    >
                      <option value="">Selecione o serviço</option>

                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-graphite uppercase tracking-widest mb-1.5">
                      Mensagem
                    </label>

                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Descreva seu projeto ou dúvida..."
                      className="w-full border border-gray-300 focus:border-orange px-4 py-3 text-sm transition-colors bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-orange hover:bg-[#C96D00] disabled:opacity-60 text-white font-bold text-sm py-4 transition-colors flex items-center justify-center gap-2"
                  >
                    {sending ? "Enviando..." : "Solicitar orçamento"}

                    {!sending && <IcoArrow />}
                  </button>
                </form>
              )}
            </div>

            {/* INFORMAÇÕES */}
            <div className="flex flex-col gap-5">
              <div className="bg-concrete p-8">
                <h3 className="font-heading text-2xl font-bold text-graphite uppercase tracking-wide mb-6">
                  Informações de contato
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="text-orange mt-0.5 shrink-0">
                      <IcoMail />
                    </div>

                    <div>
                      <div className="text-[10px] text-graphite-muted uppercase tracking-widest font-bold mb-0.5">
                        E-mail
                      </div>

                      <a
                        href="mailto:orcamento@cfmix.com.br"
                        className="text-graphite hover:text-orange text-sm transition-colors"
                      >
                        orcamento@cfmix.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-orange mt-0.5 shrink-0">
                      <IcoWA size={18} />
                    </div>

                    <div>
                      <div className="text-[10px] text-graphite-muted uppercase tracking-widest font-bold mb-1">
                        WhatsApp
                      </div>

                      <a
                        href={waLink(WA_CARLA)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-graphite hover:text-orange text-sm transition-colors mb-1"
                      >
                        (11) 99674-7678 — Carla
                      </a>

                      <a
                        href={waLink(WA_FLAVIO)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-graphite hover:text-orange text-sm transition-colors"
                      >
                        (11) 94009-7798 — Flávio
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-300 mt-6 pt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={waLink(WA_CARLA)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5C] text-white font-bold text-sm py-3 transition-colors"
                  >
                    <IcoWA size={18} /> Carla
                  </a>

                  <a
                    href={waLink(WA_FLAVIO)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5C] text-white font-bold text-sm py-3 transition-colors"
                  >
                    <IcoWA size={18} /> Flávio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-graphite pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <a href="#inicio">
                <CFMIXLogo />
              </a>

              <p className="text-gray-500 text-sm leading-relaxed mt-4">
                Concreto usinado de qualidade para sua obra, com
                responsabilidade e pontualidade garantidas.
              </p>
            </div>

            <div>
              <h4 className="text-white font-heading font-bold uppercase text-xs tracking-widest mb-5">
                Links rápidos
              </h4>

              <ul className="space-y-2.5">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-gray-500 hover:text-orange text-sm transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-heading font-bold uppercase text-xs tracking-widest mb-5">
                Serviços
              </h4>

              <ul className="space-y-2.5">
                {APPLICATIONS.map((a) => (
                  <li key={a}>
                    <a
                      href="#servicos"
                      className="text-gray-500 hover:text-orange text-sm transition-colors"
                    >
                      {a}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-heading font-bold uppercase text-xs tracking-widest mb-5">
                Contato
              </h4>

              <div className="space-y-3">
                <a
                  href="mailto:orcamento@cfmix.com.br"
                  className="flex items-center gap-2 text-gray-500 hover:text-orange text-sm transition-colors"
                >
                  <IcoMail /> orcamento@cfmix.com.br
                </a>

                <a
                  href={waLink(WA_CARLA)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-500 hover:text-orange text-sm transition-colors"
                >
                  <IcoWA size={18} /> (11) 99674-7678 — Carla
                </a>

                <a
                  href={waLink(WA_FLAVIO)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-500 hover:text-orange text-sm transition-colors"
                >
                  <IcoWA size={18} /> (11) 94009-7798 — Flávio
                </a>

                <a
                  href="https://www.instagram.com/cfmix_ofc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-500 hover:text-orange text-sm transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-600 text-xs">
              © 2026 CFMIX Concreto Usinado. Todos os direitos reservados.
            </p>

            <a
              href="#"
              className="text-gray-600 hover:text-orange text-xs transition-colors"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={waLink(WA_CARLA)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5C] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all"
        aria-label="Falar pelo WhatsApp"
      >
        <IcoWA size={28} />
      </a>
    </div>
  );
}
