import { useEffect, useMemo, useState } from "react";
import {
  actionBoard,
  divisions,
  filterOptions,
  operationCards,
  reasons,
  reviewAreas,
  noteTemplates,
  spotlightIdeas,
  standards,
  stats,
  teamMembers,
  weeklyRhythm,
} from "./data";

const emptyMemberForm = {
  name: "",
  role: "",
  status: "unauffaellig",
  description: "",
  strengths: "",
  positiveNotes: "",
  negativeNotes: "",
  lastTalk: "",
  nextStep: "",
};

const STORAGE_KEY = "deepstate-team-members";

function SectionHeading({ eyebrow, title, note }) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      {note ? <p className="max-w-2xl text-sm leading-7 text-neon-steel md:text-base">{note}</p> : null}
    </div>
  );
}

function App() {
  const [members, setMembers] = useState(() => {
    if (typeof window === "undefined") {
      return teamMembers;
    }

    const savedMembers = window.localStorage.getItem(STORAGE_KEY);

    if (!savedMembers) {
      return teamMembers;
    }

    try {
      const parsedMembers = JSON.parse(savedMembers);
      return Array.isArray(parsedMembers) && parsedMembers.length > 0 ? parsedMembers : teamMembers;
    } catch {
      return teamMembers;
    }
  });
  const [activeFilter, setActiveFilter] = useState("alle");
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]?.name ?? "");
  const [memberForm, setMemberForm] = useState(emptyMemberForm);

  const filteredMembers = useMemo(() => {
    if (activeFilter === "alle") return members;
    return members.filter((member) => member.status === activeFilter);
  }, [activeFilter, members]);

  const currentMember =
    members.find((member) => member.name === selectedMember) ?? filteredMembers[0] ?? members[0];

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(members));
  }, [members]);

  useEffect(() => {
    if (!currentMember && members[0]) {
      setSelectedMember(members[0].name);
    }
  }, [currentMember, members]);

  function handleFormChange(event) {
    const { name, value } = event.target;
    setMemberForm((current) => ({ ...current, [name]: value }));
  }

  function splitLines(value) {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function handleAddMember(event) {
    event.preventDefault();

    if (!memberForm.name.trim() || !memberForm.role.trim()) {
      return;
    }

    const newMember = {
      name: memberForm.name.trim(),
      role: memberForm.role.trim(),
      status: memberForm.status,
      description: memberForm.description.trim() || "Noch keine Beschreibung hinterlegt.",
      strengths: splitLines(memberForm.strengths),
      positiveNotes: splitLines(memberForm.positiveNotes),
      negativeNotes: splitLines(memberForm.negativeNotes),
      lastTalk: memberForm.lastTalk.trim() || "Noch kein Gespraech eingetragen",
      nextStep: memberForm.nextStep.trim() || "Noch keine Massnahme hinterlegt",
    };

    setMembers((current) => [...current, newMember]);
    setSelectedMember(newMember.name);
    setActiveFilter("alle");
    setMemberForm(emptyMemberForm);
  }

  function handleResetMembers() {
    setMembers(teamMembers);
    setSelectedMember(teamMembers[0]?.name ?? "");
    setActiveFilter("alle");
    window.localStorage.removeItem(STORAGE_KEY);
  }

  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-6 px-4 py-4 md:px-6 md:py-6">
        <header className="panel relative overflow-hidden px-5 py-6 md:px-8 md:py-8">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-neon-orange/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-44 w-44 rounded-full bg-neon-mint/15 blur-3xl" />

          <nav className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-neon-sand to-neon-orange font-display text-3xl uppercase tracking-[0.12em] text-deep-950">
                DS
              </div>
              <div>
                <p className="eyebrow">GTA RP Teamleitung</p>
                <h1 className="font-display text-3xl uppercase tracking-[0.04em] text-white md:text-4xl">
                  DeepState Teamverwaltung
                </h1>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a className="nav-link" href="#team">
                Team
              </a>
              <a className="nav-link" href="#bereiche">
                Bereiche
              </a>
              <a className="nav-link" href="#standards">
                Standards
              </a>
              <a className="nav-link" href="#join">
                Bewertungen
              </a>
              <a className="nav-link" href="#massnahmen">
                Massnahmen
              </a>
            </div>
          </nav>

          <div className="relative mt-10 grid gap-6 lg:grid-cols-[1.45fr_0.8fr] lg:items-end">
            <div>
              <p className="eyebrow">Leitung, Struktur und Vertrauen</p>
              <h2 className="max-w-4xl font-display text-5xl uppercase leading-[0.9] tracking-[0.04em] text-white md:text-7xl">
                Interne Teamverwaltung nur fuer die Leitung.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-neon-steel md:text-lg">
                DeepState Teamverwaltung ist als internes Leitungsboard gedacht. Ihr koennt hier Infos zu Teamlern,
                positive Entwicklungen, negative Auffaelligkeiten und wichtige Leitungsnotizen sauber sammeln und spaeter
                leicht anpassen.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a className="primary-button" href="#team">
                  Team ansehen
                </a>
                <a className="secondary-button" href="#join">
                  Bewertungen
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {operationCards.map((card) => (
                <article key={card.title} className="rounded-[24px] border border-white/10 bg-deep-900/80 p-5 shadow-panel">
                  <h3 className="font-display text-2xl uppercase tracking-[0.06em] text-white">{card.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-neon-steel">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-neon-mint" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <article key={stat.value} className="panel px-5 py-5 md:px-6">
              <span className="font-display text-5xl uppercase tracking-[0.08em] text-neon-mint">{stat.value}</span>
              <p className="mt-3 text-sm leading-7 text-neon-steel md:text-base">{stat.label}</p>
            </article>
          ))}
        </section>

        <section className="section-shell">
          <SectionHeading eyebrow="Warum diese Seite Sinn macht" title="Mehr als nur eine Teamliste" />
          <div className="grid gap-4 lg:grid-cols-3">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className={`rounded-[24px] border border-white/10 p-6 shadow-panel ${
                  reason.accent
                    ? "bg-gradient-to-br from-neon-orange/20 via-white/5 to-white/5"
                    : "bg-deep-900/80"
                }`}
              >
                <h3 className="font-display text-2xl uppercase tracking-[0.05em] text-white">{reason.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neon-steel md:text-base">{reason.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell" id="team">
          <SectionHeading
            eyebrow="Staff-Team"
            title="Teamler und Verantwortungen"
            note="Die Teamkarten werden aus einer zentralen Datenliste geladen. Damit kannst du spaeter Namen, Rollen, Status oder interne Hinweise schnell austauschen."
          />

          <form onSubmit={handleAddMember} className="mb-6 rounded-[24px] border border-white/10 bg-deep-900/80 p-6 shadow-panel">
            <div className="mb-5">
              <p className="eyebrow">Manuell hinzufuegen</p>
              <h3 className="font-display text-2xl uppercase tracking-[0.05em] text-white">Neuen Teamler eintragen</h3>
              <p className="mt-2 text-sm leading-7 text-neon-steel md:text-base">
                Hier kannst du direkt auf der Seite einen Teamler anlegen. Felder wie Staerken oder Notizen einfach mit Kommas trennen.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <label className="text-sm text-neon-steel">
                <span className="mb-2 block">Name</span>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-neon-orange/40"
                  name="name"
                  value={memberForm.name}
                  onChange={handleFormChange}
                  placeholder="z. B. Leon"
                />
              </label>

              <label className="text-sm text-neon-steel">
                <span className="mb-2 block">Rolle</span>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-neon-orange/40"
                  name="role"
                  value={memberForm.role}
                  onChange={handleFormChange}
                  placeholder="z. B. Support"
                />
              </label>

              <label className="text-sm text-neon-steel">
                <span className="mb-2 block">Status</span>
                <select
                  className="w-full rounded-2xl border border-white/10 bg-deep-800 px-4 py-3 text-white outline-none transition focus:border-neon-orange/40"
                  name="status"
                  value={memberForm.status}
                  onChange={handleFormChange}
                >
                  {filterOptions.filter((option) => option !== "alle").map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-sm text-neon-steel md:col-span-2 xl:col-span-3">
                <span className="mb-2 block">Beschreibung</span>
                <textarea
                  className="min-h-24 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-neon-orange/40"
                  name="description"
                  value={memberForm.description}
                  onChange={handleFormChange}
                  placeholder="Kurze Beschreibung zur Person und Aufgabe"
                />
              </label>

              <label className="text-sm text-neon-steel">
                <span className="mb-2 block">Staerken</span>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-neon-orange/40"
                  name="strengths"
                  value={memberForm.strengths}
                  onChange={handleFormChange}
                  placeholder="z. B. Support, Ruhe, Struktur"
                />
              </label>

              <label className="text-sm text-neon-steel">
                <span className="mb-2 block">Positive Notizen</span>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-neon-orange/40"
                  name="positiveNotes"
                  value={memberForm.positiveNotes}
                  onChange={handleFormChange}
                  placeholder="z. B. zuverlaessig, ruhig im Support"
                />
              </label>

              <label className="text-sm text-neon-steel">
                <span className="mb-2 block">Negative Notizen</span>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-neon-orange/40"
                  name="negativeNotes"
                  value={memberForm.negativeNotes}
                  onChange={handleFormChange}
                  placeholder="z. B. reagiert manchmal zu spaet"
                />
              </label>

              <label className="text-sm text-neon-steel">
                <span className="mb-2 block">Letztes Gespraech</span>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-neon-orange/40"
                  name="lastTalk"
                  value={memberForm.lastTalk}
                  onChange={handleFormChange}
                  placeholder="z. B. Feedback am 25.04.2026"
                />
              </label>

              <label className="text-sm text-neon-steel md:col-span-2">
                <span className="mb-2 block">Naechste Massnahme</span>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-neon-orange/40"
                  name="nextStep"
                  value={memberForm.nextStep}
                  onChange={handleFormChange}
                  placeholder="z. B. in einer Woche erneut pruefen"
                />
              </label>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <button type="submit" className="primary-button">
                Teamler hinzufuegen
              </button>
              <button
                type="button"
                onClick={() => setMemberForm(emptyMemberForm)}
                className="secondary-button"
              >
                Formular leeren
              </button>
              <button
                type="button"
                onClick={handleResetMembers}
                className="secondary-button"
              >
                Gespeicherte Teamler zuruecksetzen
              </button>
            </div>
          </form>

          <div className="mb-6 flex flex-wrap gap-2">
            {filterOptions.map((option) => {
              const active = activeFilter === option;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setActiveFilter(option)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "border-neon-orange/40 bg-neon-orange/15 text-white"
                      : "border-white/10 bg-white/5 text-neon-steel hover:border-white/20 hover:text-white"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredMembers.map((member) => (
              <article
                key={member.name}
                className={`relative overflow-hidden rounded-[24px] border p-6 shadow-panel transition ${
                  selectedMember === member.name
                    ? "border-neon-orange/40 bg-deep-800/90"
                    : "border-white/10 bg-deep-900/80"
                }`}
              >
                <div className="pointer-events-none absolute -bottom-12 -right-10 h-36 w-36 rounded-full bg-neon-orange/20 blur-2xl" />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.2em] text-neon-sand">{member.role}</p>
                  </div>
                  <span className="rounded-full border border-neon-mint/20 bg-neon-mint/10 px-3 py-2 text-xs font-semibold text-neon-mint">
                    {member.status}
                  </span>
                </div>

                <p className="relative mt-5 text-sm leading-7 text-neon-steel md:text-base">{member.description}</p>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {member.strengths.map((strength) => (
                    <span key={strength} className="chip">
                      {strength}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedMember(member.name)}
                  className="relative mt-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-neon-orange/40 hover:bg-neon-orange/10"
                >
                  Details ansehen
                </button>
              </article>
            ))}
          </div>

          {currentMember ? (
            <div className="mt-6 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
              <article className="rounded-[24px] border border-white/10 bg-deep-900/80 p-6 shadow-panel">
                <p className="eyebrow">Detailprofil</p>
                <h3 className="font-display text-3xl uppercase tracking-[0.05em] text-white">{currentMember.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-neon-sand">{currentMember.role}</p>
                <p className="mt-4 text-sm leading-7 text-neon-steel md:text-base">{currentMember.description}</p>

                <div className="mt-5 space-y-3 text-sm text-neon-steel md:text-base">
                  <p>
                    <span className="font-semibold text-white">Status:</span> {currentMember.status}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Letztes Gespraech:</span> {currentMember.lastTalk}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Naechste Massnahme:</span> {currentMember.nextStep}
                  </p>
                </div>
              </article>

              <div className="grid gap-4 md:grid-cols-2">
                <article className="rounded-[24px] border border-white/10 bg-gradient-to-br from-neon-mint/15 via-white/5 to-white/5 p-6 shadow-panel">
                  <h3 className="font-display text-2xl uppercase tracking-[0.05em] text-white">Positiv</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-neon-steel md:text-base">
                    {currentMember.positiveNotes.map((note) => (
                      <li key={note} className="flex items-start gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-neon-mint" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="rounded-[24px] border border-white/10 bg-gradient-to-br from-neon-orange/15 via-white/5 to-white/5 p-6 shadow-panel">
                  <h3 className="font-display text-2xl uppercase tracking-[0.05em] text-white">Negativ</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-neon-steel md:text-base">
                    {currentMember.negativeNotes.map((note) => (
                      <li key={note} className="flex items-start gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-neon-orange" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          ) : null}
        </section>

        <section className="section-shell" id="bereiche">
          <SectionHeading eyebrow="Server-Organisation" title="Vier Bereiche, die ich dir empfehle" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {divisions.map((division) => (
              <article key={division.index} className="rounded-[24px] border border-white/10 bg-deep-900/80 p-6 shadow-panel">
                <span className="font-display text-3xl uppercase tracking-[0.08em] text-neon-sand">{division.index}</span>
                <h3 className="mt-4 font-display text-2xl uppercase tracking-[0.05em] text-white">{division.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neon-steel md:text-base">{division.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell" id="standards">
          <SectionHeading eyebrow="Teamkodex" title="Standards, die Vertrauen schaffen" />
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[24px] border border-white/10 bg-deep-900/80 p-6 shadow-panel">
              <h3 className="font-display text-2xl uppercase tracking-[0.05em] text-white">
                Was bei einem starken Staff gut ankommt
              </h3>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-neon-steel md:text-base">
                {standards.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-neon-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[24px] border border-white/10 bg-deep-900/80 p-6 shadow-panel">
              <h3 className="font-display text-2xl uppercase tracking-[0.05em] text-white">Empfohlener Weekly-Rhythmus</h3>
              <div className="mt-5 space-y-5">
                {weeklyRhythm.map((entry, index) => (
                  <div
                    key={entry.day}
                    className={`${index > 0 ? "border-t border-white/10 pt-5" : ""}`}
                  >
                    <p className="font-display text-2xl uppercase tracking-[0.06em] text-neon-sand">{entry.day}</p>
                    <p className="mt-2 text-sm leading-7 text-neon-steel md:text-base">{entry.text}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section-shell">
          <SectionHeading eyebrow="Interne Leitungsbereiche" title="Elemente, die zur Teambewertung passen" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {spotlightIdeas.map((idea) => (
              <article key={idea.title} className="rounded-[24px] border border-white/10 bg-deep-900/80 p-6 shadow-panel">
                <h3 className="font-display text-2xl uppercase tracking-[0.05em] text-white">{idea.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neon-steel md:text-base">{idea.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell" id="join">
          <SectionHeading
            eyebrow="Interne Bewertungen"
            title="Positive und negative Infos zu Teamlern festhalten"
            note="Dieser Bereich ist fuer die Teamleitung gedacht, damit Lob, Kritik und Leitungsentscheidungen an einem Ort gesammelt werden koennen."
          />
          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="rounded-[24px] border border-white/10 bg-gradient-to-br from-neon-orange/20 via-white/5 to-neon-mint/10 p-6 shadow-panel">
              <h3 className="font-display text-2xl uppercase tracking-[0.05em] text-white">Was ihr pro Teamler dokumentieren koennt</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-neon-steel md:text-base">
                Gerade in der Teamleitung hilft es, positive und negative Punkte nicht nur aus dem Kopf zu bewerten.
                Wenn ihr eure Eindruecke sauber festhaltet, werden Gespraeche, Verwarnungen oder Befoerderungen deutlich
                nachvollziehbarer und fairer.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {reviewAreas.map((point) => (
                  <span key={point} className="chip border-neon-orange/20 bg-neon-orange/10 text-neon-ice">
                    {point}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-[24px] border border-white/10 bg-deep-900/80 p-6 shadow-panel">
              <h3 className="font-display text-2xl uppercase tracking-[0.05em] text-white">Beispiel fuer Eintragsarten</h3>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-neon-steel md:text-base">
                {noteTemplates.map((template) => (
                  <li key={template.title} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-neon-mint" />
                    <span>
                      <strong className="text-white">{template.title}:</strong> {template.text}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section-shell" id="massnahmen">
          <SectionHeading
            eyebrow="Massnahmenboard"
            title="Was die Teamleitung als Naechstes tun sollte"
            note="Hier koennt ihr intern festhalten, was sofort beobachtet, positiv hervorgehoben oder aktiv nachverfolgt werden soll."
          />
          <div className="grid gap-4 xl:grid-cols-3">
            {actionBoard.map((column) => (
              <article key={column.title} className="rounded-[24px] border border-white/10 bg-deep-900/80 p-6 shadow-panel">
                <h3 className="font-display text-2xl uppercase tracking-[0.05em] text-white">{column.title}</h3>
                <ul className="mt-5 space-y-4 text-sm leading-7 text-neon-steel md:text-base">
                  {column.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-neon-sand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
