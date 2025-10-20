"use client";
import React, { useMemo, useState, useEffect } from "react";

/** -------- Mini UI (Button/Card/Dialog) -------- */
function Button({
  className = "",
  children,
  style,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      style={style}
      className={
        "inline-flex items-center justify-center px-4 py-2 rounded-2xl transition " +
        "hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-emerald-600 " +
        className
      }
    >
      {children}
    </button>
  );
}
function Card({
  className = "",
  style,
  children,
}: { className?: string; style?: React.CSSProperties; children: React.ReactNode }) {
  return (
    <div
      className={"border rounded-2xl " + className}
      style={{ borderColor: "rgba(15,23,42,0.08)", background: "#FFFFFF", ...style }}
    >
      {children}
    </div>
  );
}
function CardHeader({ className = "", children }: any) {
  return <div className={"p-4 " + className}>{children}</div>;
}
function CardTitle({ className = "", children }: any) {
  return <h3 className={"font-semibold " + className}>{children}</h3>;
}
function CardContent({ className = "", children }: any) {
  return <div className={"p-4 " + className}>{children}</div>;
}
function Dialog({
  open,
  children,
  onOpenChange,
}: {
  open: boolean;
  children: React.ReactNode;
  onOpenChange?: (v: boolean) => void;
}) {
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onOpenChange?.(false);
    if (open) document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [open, onOpenChange]);
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={() => onOpenChange?.(false)} />
      <div className="relative bg-white rounded-2xl p-4 shadow-xl w-full max-w-2xl mx-4">{children}</div>
    </div>
  );
}
function DialogHeader({ children }: any) {
  return <div className="mb-2">{children}</div>;
}
function DialogTitle({ children }: any) {
  return <div className="font-semibold text-lg">{children}</div>;
}

/** -------- Inline Icons -------- */
const Icon = {
  Check: (p: any) => (
    <svg viewBox="0 0 24 24" className={p.className}><path fill="currentColor" d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z"/></svg>
  ),
  MapPin: (p: any) => (
    <svg viewBox="0 0 24 24" className={p.className}><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>
  ),
  Phone: (p: any) => (
    <svg viewBox="0 0 24 24" className={p.className}><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.4.55 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 8a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .55 3.4 1 1 0 0 1-.25 1z"/></svg>
  ),
  Mail: (p: any) => (
    <svg viewBox="0 0 24 24" className={p.className}><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v1l10 6 10-6V6a2 2 0 0 0-2-2Zm0 6.5-8 4.8-8-4.8V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2Z"/></svg>
  ),
  ArrowRight: (p: any) => (
    <svg viewBox="0 0 24 24" className={p.className}><path fill="currentColor" d="M10 17l5-5-5-5v10zM4 19h2V5H4v14z"/></svg>
  ),
  Shield: (p: any) => (
    <svg viewBox="0 0 24 24" className={p.className}><path fill="currentColor" d="M12 2l7 3v6c0 5-3.4 9.7-7 11-3.6-1.3-7-6-7-11V5l7-3z"/></svg>
  ),
  Zap: (p: any) => (
    <svg viewBox="0 0 24 24" className={p.className}><path fill="currentColor" d="M13 2L3 14h7l-1 8 11-14h-7l1-6z"/></svg>
  ),
  Building2: (p: any) => (
    <svg viewBox="0 0 24 24" className={p.className}><path fill="currentColor" d="M3 21h18v-2H3v2zM5 19h2V5H5v14zm4 0h2V3H9v16zm4 0h2V8h-2v11zm4 0h2V6h-2v13z"/></svg>
  ),
  Sliders: (p: any) => (
    <svg viewBox="0 0 24 24" className={p.className}><path fill="currentColor" d="M10 6V4H4v2h6zm10 0V4h-6v2h6zM14 10V8H4v2h10zm6 0V8h-4v2h4zM8 14v-2H4v2h4zm12 0v-2h-8v2h8zM12 18v-2H4v2h8zm8 0v-2h-6v2h6z"/></svg>
  ),
};

/** -------- Παλέτα & περιεχόμενο -------- */
const NEON = { bg: "#FFFFFF", bg2: "#F7FAFC", text: "#0B1220", green: "#00C389", cyan: "#00B8E6", orange: "#FF7A1A" };

const GR = {
  nav: { services: "Υπηρεσίες", projects: "Έργα", about: "Για εμάς", blog: "Blog", contact: "Επικοινωνία" },
  hero: {
    eyebrow: "Κύπρος",
    title: "Ηλεκτρολογικές εγκαταστάσεις και Smart Home στην Κύπρο",
    subtitle: "Σχεδιάζουμε και υλοποιούμε λύσεις που μειώνουν την κατανάλωση και αυξάνουν την ασφάλεια.",
    cta1: "Αίτημα Προσφοράς (Δωρεάν)",
    cta2: "Δες Έργα",
    badges: ["Αδειούχοι Ηλεκτρολόγοι", "KNX Partner", "SLA υποστήριξη 24/7", "Core Web Vitals A+"],
  },
  services: {
    title: "Υπηρεσίες",
    cards: [
      { icon: Icon.Zap, title: "Ηλεκτρολογικές Εγκαταστάσεις", desc: "Μελέτες, καλωδιώσεις, πίνακες, φωτισμός, αντικεραυνική προστασία και πιστοποιήσεις για νέα έργα & ανακαινίσεις.", bullets: ["Διαφάνεια κόστους", "Τήρηση χρονοδιαγράμματος", "Καθαρή παράδοση"] },
      { icon: Icon.Sliders, title: "Smart Home (KNX)", desc: "Σενάρια φωτισμού, θέρμανσης/ψύξης, σκίασης, ασφάλειας. Έλεγχος από κινητό, επεκτασιμότητα χωρίς κλείδωμα.", bullets: ["Εξοικονόμηση ενέργειας", "Άνεση & ασφάλεια", "Ενιαίος έλεγχος"] },
      { icon: Icon.Building2, title: "BMS & Κτίρια", desc: "Λύσεις για πολυκατοικίες, ξενοδοχεία, γραφεία. Αυτοματισμοί κοινόχρηστων, reporting & analytics.", bullets: ["Ενεργειακή βελτιστοποίηση", "Κλιμάκωση", "Συμβατότητα"] },
      { icon: Icon.Shield, title: "Συντήρηση & SLA", desc: "Προληπτική συντήρηση, τηλε-διάγνωση, ανταπόκριση εντός 24 ωρών για συμβόλαια. Ticketing & ιστορικό.", bullets: ["24/7 γραμμή βλαβών", "Stock ανταλλακτικών", "GDPR συμμόρφωση"] },
    ],
  },
  projects: { title: "Έργα στην Κύπρο", subtitle: "Ενδεικτικά case studies με μετρήσιμα αποτελέσματα. Θα αντικατασταθούν με πραγματικά έργα (φωτογραφίες & KPI)." },
  ctaBand: { title: "Ας σχεδιάσουμε το έργο σου", subtitle: "Στείλε μας κατόψεις/σχέδια ή ζήτησε επίσκεψη. Απαντάμε εντός 24 ωρών σε αιτήματα προσφοράς.", cta: "Αίτημα Προσφοράς" },
  about: { title: "Για εμάς", body: "Η Greenology Engineering δραστηριοποιείται σε ηλεκτρολογικές εγκαταστάσεις και έξυπνα κτίρια. Επενδύουμε σε ποιότητα, ασφάλεια και υποστήριξη που διαρκεί." },
  contact: {
    title: "Επικοινωνία",
    address: "Λευκωσία, Κύπρος (ενδεικτικό)",
    phone: "+357 22 000000",
    email: "info@greenologyengineering.cy",
    form: {
      name: "Ονοματεπώνυμο",
      email: "Email",
      service: "Υπηρεσία ενδιαφέροντος",
      message: "Μήνυμα",
      send: "Αποστολή",
      gdprConsent: "Έχω διαβάσει και αποδέχομαι την Πολιτική Απορρήτου (GDPR)",
      marketingOptIn: "Θέλω να λαμβάνω ενημερώσεις/προσφορές",
      gdprHelp: "Τα στοιχεία σας χρησιμοποιούνται μόνο για την επικοινωνία σχετικά με το αίτημά σας και αποθηκεύονται σύμφωνα με τον GDPR.",
    },
  },
  footer: { rights: "© " + new Date().getFullYear() + " Greenology Engineering Cyprus. All rights reserved.", links: ["Όροι", "Απόρρητο", "Cookies"] },
};
const EN = {
  nav: { services: "Services", projects: "Projects", about: "About", blog: "Blog", contact: "Contact" },
  hero: {
    eyebrow: "Cyprus",
    title: "Electrical Installations and Smart Home in Cyprus",
    subtitle: "We design and deliver solutions that reduce energy use and increase safety.",
    cta1: "Request a Free Quote",
    cta2: "View Projects",
    badges: ["Licensed Electricians", "KNX Partner", "24/7 SLA Support", "Core Web Vitals A+"],
  },
  services: {
    title: "Services",
    cards: [
      { icon: Icon.Zap, title: "Electrical Installations", desc: "Load studies, wiring, panels, lighting, surge protection and certifications for new builds & renovations.", bullets: ["Transparent pricing", "On-time delivery", "Clean handover"] },
      { icon: Icon.Sliders, title: "Smart Home (KNX)", desc: "Lighting, HVAC, shading, security scenarios. Mobile app control and vendor-agnostic expandability.", bullets: ["Energy savings", "Comfort & safety", "Unified control"] },
      { icon: Icon.Building2, title: "BMS & Buildings", desc: "Solutions for apartments, hotels, offices. Common areas automation, reporting & analytics.", bullets: ["Energy optimization", "Scalable", "Interoperable"] },
      { icon: Icon.Shield, title: "Maintenance & SLA", desc: "Preventive maintenance, remote diagnostics, <24h response for contract clients. Ticketing & history.", bullets: ["24/7 hotline", "Spare parts stock", "GDPR compliant"] },
    ],
  },
  projects: { title: "Projects in Cyprus", subtitle: "Sample case studies with measurable outcomes. Replace with real projects (photos & KPIs)." },
  ctaBand: { title: "Let's design your project", subtitle: "Send us drawings/floor plans or request a site visit. We reply within 24 hours to quote requests.", cta: "Get a Quote" },
  about: { title: "About Us", body: "Greenology Engineering delivers electrical and smart-building solutions, investing in quality, safety and lasting support." },
  contact: {
    title: "Contact",
    address: "Nicosia, Cyprus (placeholder)",
    phone: "+357 22 000000",
    email: "info@greenologyengineering.cy",
    form: {
      name: "Full name",
      email: "Email",
      service: "Service of interest",
      message: "Message",
      send: "Send",
      gdprConsent: "I have read and accept the Privacy Policy (GDPR)",
      marketingOptIn: "I'd like to receive updates/offers",
      gdprHelp: "Your data are used only to respond to your request and are stored in line with GDPR.",
    },
  },
  footer: { rights: "© " + new Date().getFullYear() + " Greenology Engineering Cyprus. All rights reserved.", links: ["Terms", "Privacy", "Cookies"] },
};

/** -------- Σελίδα -------- */
export default function Page() {
  const [lang, setLang] = useState<"GR" | "EN">("GR");
  const t = lang === "GR" ? GR : EN;

  const [lead, setLead] = useState({ name: "", contact: "", service: "Electrical" });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const digitsOnly = (s: string) => s.replace(/\D+/g, "");
  const isEmail = (v: string) => /\S+@\S+\.\S+/.test(v);
  const isPhone = (v: string) => digitsOnly(v).length >= 6;
  const leadValid = lead.name.trim().length > 1 && (isEmail(lead.contact) || isPhone(lead.contact));

  const handleQuoteClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const orgJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Greenology Engineering — Cyprus",
      url: "https://www.greenologyengineering.cy",
      telephone: "+35722000000",
      areaServed: ["Nicosia", "Limassol", "Larnaca", "Paphos"],
      address: { "@type": "PostalAddress", addressCountry: "CY" },
      makesOffer: [
        { "@type": "Offer", name: "Electrical Installations" },
        { "@type": "Offer", name: "Smart Home (KNX)" },
      ],
    }),
    []
  );

  const neonGradient = `linear-gradient(90deg, ${NEON.green}, ${NEON.cyan}, ${NEON.orange})`;
  const primaryBtn = { background: "#0D9488", color: "#fff" } as const;
  const baseBg = {
    background: `
      radial-gradient(900px 300px at 15% 10%, rgba(0,184,230,.10), transparent),
      radial-gradient(900px 300px at 85% 5%, rgba(255,122,26,.08), transparent),
      linear-gradient(${NEON.bg2}, ${NEON.bg})
    `,
    color: NEON.text,
  } as const;

  // απαλό fade/slide χωρίς βιβλιοθήκη
  useEffect(() => {
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(12px)";
      el.style.transition = "opacity .5s ease, transform .5s ease";
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 10);
    });
  }, []);

  const USP_ICONS = [Icon.Zap, Icon.Shield, Icon.Building2, Icon.MapPin];
  const [calOpen, setCalOpen] = useState(false);

  return (
    <div>
      <div className="min-h-screen text-slate-900" style={baseBg}>
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl shadow-md" style={{ background: neonGradient, boxShadow: "0 0 18px rgba(0,229,255,.35)" }} />
              <div className="font-semibold tracking-tight">Greenology Engineering — Cyprus</div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#services" className="hover:opacity-90">{t.nav.services}</a>
              <a href="#projects" className="hover:opacity-90">{t.nav.projects}</a>
              <a href="#about" className="hover:opacity-90">{t.nav.about}</a>
              <a href="#contact" className="hover:opacity-90">{t.nav.contact}</a>
              <Button className="rounded-2xl" style={primaryBtn} onClick={handleQuoteClick} aria-label={t.hero.cta1}>{t.hero.cta1}</Button>
            </nav>
            <div className="flex items-center gap-2">
              <Button onClick={() => setLang(lang === "GR" ? "EN" : "GR")} aria-label="Toggle language" className="rounded-xl">
                {lang === "GR" ? "EN" : "GR"}
              </Button>
            </div>
          </div>
        </header>

        {/* USP bar */}
        <section className="border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            {[["Ανταπόκριση εντός 24h", "Response within 24h"], ["Πιστοποιημένοι KNX","Certified KNX"], ["10+ χρόνια εμπειρία","10+ years experience"], ["Λευκωσία · Λεμεσός · Λάρνακα · Πάφος","Nicosia · Limassol · Larnaca · Paphos"]].map((txt, i) => {
              const Ico = USP_ICONS[i];
              return (
                <div key={i} className="flex items-center gap-2">
                  <Ico className="w-4 h-4" />
                  <span>{lang === "GR" ? txt[0] : txt[1]}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background: `
                radial-gradient(700px 240px at 20% 15%, rgba(0,229,255,.12), transparent),
                radial-gradient(700px 240px at 80% 10%, rgba(255,122,26,.10), transparent)
              `,
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
            <div data-reveal>
              <div
                className="mb-2 font-semibold"
                style={{
                  background: `linear-gradient(90deg, ${NEON.cyan}, ${NEON.green})`,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {t.hero.eyebrow}
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{t.hero.title}</h1>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl">{t.hero.subtitle}</p>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
                <Button style={primaryBtn} onClick={handleQuoteClick} aria-label={t.hero.cta1}>{t.hero.cta1}</Button>
                <a href="#projects" className="text-sm underline">{t.hero.cta2}</a>
              </div>
              <div className="mt-2 text-sm opacity-80">⭐ 4.9/5 από 120 έργα στην Κύπρο</div>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm opacity-90">
                {t.hero.badges.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-xl px-3 py-2 border" style={{ background: "#F5F7FA", boxShadow: "0 1px 0 rgba(15,23,42,0.04)" }}>
                    <Icon.Check className="w-4 h-4" /> {b}
                  </div>
                ))}
              </div>

              {/* Micro lead form */}
              <form
                className="mt-8 grid sm:grid-cols-4 gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!leadValid) return;
                  setLeadSubmitted(true);
                }}
              >
                <input
                  className="sm:col-span-1 rounded-xl border bg-transparent px-3 py-2"
                  style={{ borderColor: "rgba(15,23,42,0.12)" }}
                  placeholder={lang === "GR" ? "Ονοματεπώνυμο" : "Full name"}
                  value={lead.name}
                  onChange={(e) => setLead((p) => ({ ...p, name: e.target.value }))}
                  required
                />
                <input
                  className="sm:col-span-1 rounded-xl border bg-transparent px-3 py-2"
                  style={{ borderColor: "rgba(15,23,42,0.12)" }}
                  placeholder={lang === "GR" ? "Τηλέφωνο ή Email" : "Phone or Email"}
                  value={lead.contact}
                  onChange={(e) => setLead((p) => ({ ...p, contact: e.target.value }))}
                  required
                />
                <select
                  className="sm:col-span-1 rounded-xl border bg-transparent px-3 py-2"
                  style={{ borderColor: "rgba(15,23,42,0.12)" }}
                  value={lead.service}
                  onChange={(e) => setLead((p) => ({ ...p, service: e.target.value }))}
                >
                  <option>Electrical</option>
                  <option>Smart Home (KNX)</option>
                  <option>BMS/Buildings</option>
                  <option>Maintenance</option>
                </select>
                <Button className="sm:col-span-1 disabled:opacity-50" style={primaryBtn} disabled={!leadValid}>
                  {lang === "GR" ? "Κάλεσέ με" : "Call me"}
                </Button>
                {!leadValid && !leadSubmitted && (
                  <div className="sm:col-span-4 text-xs text-red-600">
                    {lang === "GR" ? "Συμπλήρωσε όνομα και έγκυρο email ή τηλέφωνο." : "Please enter your name and a valid email or phone."}
                  </div>
                )}
                {leadSubmitted && (
                  <div className="sm:col-span-4 text-sm text-emerald-700">
                    {lang === "GR" ? "✔️ Λάβαμε τα στοιχεία · Θα καλέσουμε εντός 24 ωρών." : "✔️ Received · We will call you within 24 hours."}
                  </div>
                )}
              </form>
            </div>

            <div className="relative" data-reveal>
              <div
                className="aspect-video rounded-2xl shadow-xl border flex items-center justify-center"
                style={{ background: "#F3F6FA", borderColor: "rgba(15,23,42,0.08)", boxShadow: "0 0 40px rgba(0,229,255,.10)" }}
              >
                <span className="text-slate-400">(Placeholder hero image — real project photo)</span>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden sm:block">
                <Card className="shadow-lg" style={{ boxShadow: "0 0 32px rgba(0,229,255,.12)" }}>
                  <CardContent className="p-4 text-sm">
                    <div className="font-semibold mb-1">99.9% uptime</div>
                    <div className="text-slate-600">SLA monitoring · Ticketing</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight">{t.services.title}</h2>
            <p className="mt-2 text-slate-600">
              {lang === "GR" ? "Μίνι περιγραφή υπηρεσιών και τι υπόσχεται η ομάδα." : "Short description of services and our promise."}
            </p>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.services.cards.map((c: any, i: number) => {
                const Ico = c.icon;
                return (
                  <div key={i} data-reveal>
                    <Card className="transition-shadow">
                      <CardHeader>
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: `radial-gradient(circle at 50% 50%, rgba(0,229,255,.18), transparent 60%)` }}
                        >
                          <Ico className="w-5 h-5" />
                        </div>
                        <CardTitle className="mt-3 text-xl">{c.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-600">{c.desc}</p>
                        <ul className="mt-4 space-y-2 text-sm">
                          {c.bullets.map((b: string, idx: number) => (
                            <li key={idx} className="flex items-center gap-2">
                              <Icon.Check className="w-4 h-4" /> {b}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight">
              {lang === "GR" ? "Ενδεικτικά Πακέτα" : "Indicative Packages"}
            </h2>
            <p className="mt-2 text-slate-600">
              {lang === "GR" ? "Διαφάνεια στο κόστος. Τελική προσφορά μετά από σύντομη αυτοψία." : "Transparent pricing. Final quote after a quick site visit."}
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                { nameGR: "Basic Ηλεκτρολογικά", nameEN: "Basic Electrical", price: "from €590", itemsGR: ["Μικρές εργασίες", "1 πίνακας/αναβάθμιση", "Πιστοποίηση"], itemsEN: ["Minor works", "1 panel/upgrade", "Certification"] },
                { nameGR: "Smart Home Start (KNX)", nameEN: "Smart Home Start (KNX)", price: "from €1,990", itemsGR: ["Φωτισμός/Σκίαση 1 ζώνη", "App control", "Επέκταση όταν θέλεις"], itemsEN: ["Lighting/Shading 1 zone", "App control", "Expand anytime"] },
                { nameGR: "BMS για Κοινόχρηστα", nameEN: "BMS for Common Areas", price: "from €3,900", itemsGR: ["Αισθητήρες παρουσίας", "Σενάρια εξοικονόμησης", "Reporting"], itemsEN: ["Presence sensors", "Energy-saving scenes", "Reporting"] },
              ].map((p, i) => (
                <div key={i} data-reveal>
                  <Card className="transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{lang === "GR" ? p.nameGR : p.nameEN}</CardTitle>
                      <div className="text-2xl font-extrabold" style={{ background: neonGradient, WebkitBackgroundClip: "text", color: "transparent" }}>
                        {p.price}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        {(lang === "GR" ? p.itemsGR : p.itemsEN).map((it, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Icon.Check className="w-4 h-4" /> {it}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex justify-end">
                        <Button style={primaryBtn} onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                          {lang === "GR" ? "Ζήτα Προσφορά" : "Request a Quote"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">{t.projects.title}</h2>
                <p className="mt-2 text-slate-600 max-w-2xl">{t.projects.subtitle}</p>
              </div>
              <Button className="rounded-2xl" style={{ background: "#EEF6FF" }}>
                {lang === "GR" ? "Όλα τα έργα" : "All projects"}
              </Button>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} data-reveal>
                  <Card className="overflow-hidden">
                    <div className="aspect-video" style={{ background: "#F3F6FA" }} />
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {lang === "GR" ? `Κατοικία – Λευκωσία #${i}` : `Residence – Nicosia #${i}`}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• {lang === "GR" ? "Smart φωτισμός & σκίαση" : "Smart lighting & shading"}</li>
                        <li>• HVAC KNX integration</li>
                        <li>• {lang === "GR" ? "–22% κατανάλωση" : "–22% energy consumption"}</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 border-y border-slate-200">
          <div className="max-w-7xl mx.auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight">{lang === "GR" ? "Τι λένε οι πελάτες μας" : "What clients say"}</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} data-reveal>
                  <Card style={{ boxShadow: "0 0 24px rgba(0,229,255,.10)" }}>
                    <CardContent className="p-6 text-sm">
                      <p className="italic">
                        “{lang === "GR" ? "Άψογη δουλειά, συνέπεια στο χρονοδιάγραμμα και αισθητή μείωση κατανάλωσης." : "Excellent work, on-time delivery and tangible energy savings."}”
                      </p>
                      <div className="mt-4 font-semibold">{lang === "GR" ? "Ι. Παπαδόπουλος — Λευκωσία" : "I. Papadopoulos — Nicosia"}</div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="py-14 bg-white/90 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold tracking-tight" style={{ background: neonGradient, WebkitBackgroundClip: "text", color: "transparent" }}>
                {t.ctaBand.title}
              </h3>
              <p className="mt-1 opacity-90">{t.ctaBand.subtitle}</p>
            </div>
            <Button style={primaryBtn} onClick={handleQuoteClick} aria-label={t.ctaBand.cta}>
              {t.ctaBand.cta} <Icon.ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight">FAQ</h2>
            <div className="mt-6 divide-y divide-slate-200">
              {[
                { qGR: "Πόσο κοστίζει ένα smart home (KNX);", aGR: "Εξαρτάται από μέγεθος/λειτουργίες. Προσφέρουμε πακέτα και αναλυτική προσφορά μετά από σύντομη επίσκεψη.", qEN: "How much does a KNX smart home cost?", aEN: "Depends on size/features. We offer tiered packages and a detailed quote after a quick site visit." },
                { qGR: "Πόσο χρόνο παίρνει η εγκατάσταση;", aGR: "Συνήθως 1–3 εβδομάδες ανά έργο. Δίνουμε ξεκάθαρο χρονοδιάγραμμα πριν ξεκινήσουμε.", qEN: "How long does installation take?", aEN: "Typically 1–3 weeks per project. We provide a clear timeline before we start." },
                { qGR: "Τι υποστήριξη παρέχετε μετά;", aGR: "Συμβόλαια συντήρησης με SLA, 24/7 γραμμή βλαβών, τηλε-διάγνωση και προληπτικές επισκέψεις.", qEN: "What support do you provide after?", aEN: "Maintenance contracts with SLA, 24/7 hotline, remote diagnostics and preventive visits." },
              ].map((item, idx) => (
                <details key={idx} className="py-4 group">
                  <summary className="cursor-pointer font-medium flex items.center justify-between">
                    <span>{lang === "GR" ? item.qGR : item.qEN}</span>
                    <span className="text-slate-400 group-open:rotate-45 transition">+</span>
                  </summary>
                  <p className="mt-2 text-slate-600">{lang === "GR" ? item.aGR : item.aEN}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-video rounded-2xl" style={{ background: "#F3F6FA", boxShadow: "0 0 28px rgba(0,229,255,.10)" }} />
            <div>
              <h2 className="text-3xl font-bold tracking-tight">{(lang === "GR" ? GR : EN).about.title}</h2>
              <p className="mt-3 text-slate-600">{(lang === "GR" ? GR : EN).about.body}</p>
              <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl p-4" style={{ background: "#F5F7FA", border: "1px solid rgba(15,23,42,0.08)" }}><div className="text-2xl font-bold">10+</div><div className="opacity-80">{lang === "GR" ? "Χρόνια εμπειρίας" : "Years experience"}</div></div>
                <div className="rounded-xl p-4" style={{ background: "#F5F7FA", border: "1px solid rgba(15,23,42,0.08)" }}><div className="text-2xl font-bold">24/7</div><div className="opacity-80">SLA</div></div>
                <div className="rounded-xl p-4" style={{ background: "#F5F7FA", border: "1px solid rgba(15,23,42,0.08)" }}><div className="text-2xl font-bold">A+</div><div className="opacity-80">Core Web Vitals</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold tracking-tight">{t.contact.title}</h2>
              <div className="mt-6 space-y-3 text-slate-600">
                <div className="flex items-center gap-2"><Icon.MapPin className="w-4 h-4" /> {t.contact.address}</div>
                <div className="flex items-center gap-2"><Icon.Phone className="w-4 h-4" /> <a href="tel:+35722000000" className="underline hover:opacity-80">{t.contact.phone}</a></div>
                <div className="flex items-center gap-2"><Icon.Mail className="w-4 h-4" /> <a href="mailto:info@greenologyengineering.cy" className="underline hover:opacity-80">{t.contact.email}</a></div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <a href="https://wa.me/35722000000" className="inline-flex items-center gap-2 underline hover:opacity-80"><Icon.Phone className="w-4 h-4" /> WhatsApp</a>
                <Button style={primaryBtn} onClick={() => setCalOpen(true)}>{lang === "GR" ? "Κλείσε ραντεβού" : "Book a visit"}</Button>
              </div>
            </div>
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <form className="grid sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-1"><label className="block text.sm mb-1">{t.contact.form.name}</label><input className="w-full rounded-xl border bg-transparent px-3 py-2" style={{ borderColor: "rgba(15,23,42,0.12)" }} /></div>
                    <div className="sm:col-span-1"><label className="block text.sm mb-1">{t.contact.form.email}</label><input type="email" className="w-full rounded-xl border bg-transparent px-3 py-2" style={{ borderColor: "rgba(15,23,42,0.12)" }} /></div>
                    <div className="sm:col-span-1"><label className="block text.sm mb-1">{t.contact.form.service}</label>
                      <select className="w-full rounded-xl border bg-transparent px-3 py-2" style={{ borderColor: "rgba(15,23,42,0.12)" }}>
                        <option>{lang === "GR" ? "Ηλεκτρολογικά" : "Electrical"}</option>
                        <option>Smart Home (KNX)</option>
                        <option>{lang === "GR" ? "BMS/Κτίρια" : "BMS/Buildings"}</option>
                        <option>{lang === "GR" ? "Συντήρηση" : "Maintenance"}</option>
                      </select>
                    </div>
                    <div className="sm:col-span-1" />
                    <div className="sm:col-span-2"><label className="block text.sm mb-1">{t.contact.form.message}</label><textarea rows={5} className="w-full rounded-xl border bg-transparent px-3 py-2" style={{ borderColor: "rgba(15,23,42,0.12)" }} /></div>
                    <div className="sm:col-span-2 flex flex-col items-end gap-2">
                      <div className="text-xs opacity-70 self-start">{lang === "GR" ? "Απαντάμε εντός 24 ωρών." : "We respond within 24 hours."}</div>
                      <Button style={primaryBtn}>{t.contact.form.send}</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-90">
            <div>{t.footer.rights}</div>
            <div className="flex items-center gap-4">
              {t.footer.links.map((l, i) => (
                <a key={i} href="#" className="hover:opacity-100 opacity-80">{l}</a>
              ))}
            </div>
          </div>
        </footer>

        {/* Sticky mobile CTA */}
        <div className="fixed bottom-4 inset-x-4 md:hidden z-50">
          <Button className="w-full py-4 text-base shadow-lg" style={primaryBtn} onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            {t.hero.cta1}
          </Button>
        </div>

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </div>

      {/* Calendly Modal */}
      <Dialog open={calOpen} onOpenChange={setCalOpen}>
        <DialogHeader>
          <DialogTitle>{lang === "GR" ? "Κλείσε ραντεβού" : "Book a visit"}</DialogTitle>
        </DialogHeader>
        <div className="aspect-video rounded-xl overflow-hidden" style={{ background: "#F3F6FA" }}>
          <iframe title="Calendly" className="w-full h-full" loading="lazy" src="https://calendly.com/greenology-cy/visit" />
        </div>
      </Dialog>
    </div>
  );
}
