import {
  divisions,
  operationCards,
  reasons,
  recruitmentPoints,
  spotlightIdeas,
  standards,
  stats,
  teamMembers,
  weeklyRhythm,
} from "./data";

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
                Recruiting
              </a>
            </div>
          </nav>

          <div className="relative mt-10 grid gap-6 lg:grid-cols-[1.45fr_0.8fr] lg:items-end">
            <div>
              <p className="eyebrow">Leitung, Struktur und Vertrauen</p>
              <h2 className="max-w-4xl font-display text-5xl uppercase leading-[0.9] tracking-[0.04em] text-white md:text-7xl">
                Die Schaltzentrale fuer dein Server-Team.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-neon-steel md:text-lg">
                DeepState Teamverwaltung verbindet Teamvorstellung, Aufgabenverteilung, Standards und Recruiting auf
                einer Seite. So kannst du Mitglieder, Rollen und wichtige Infos sauber praesentieren und spaeter leicht
                anpassen.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a className="primary-button" href="#team">
                  Team ansehen
                </a>
                <a className="secondary-button" href="#join">
                  Bewerberbereich
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
            title="Mitglieder und Verantwortungen"
            note="Die Teamkarten werden aus einer zentralen Datenliste geladen. Damit kannst du spaeter Namen, Rollen oder Status schnell austauschen."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="relative overflow-hidden rounded-[24px] border border-white/10 bg-deep-900/80 p-6 shadow-panel"
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
              </article>
            ))}
          </div>
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
          <SectionHeading eyebrow="Eigene Ideen fuer die Seite" title="Elemente, die besonders gut zu GTA RP passen" />
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
            eyebrow="Teamverstaerkung"
            title="Neue Leute ins Team holen"
            note="Wenn du willst, koennen wir spaeter noch Discord, ein Bewerbungsformular oder einen internen Login-Bereich dazubauen."
          />
          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="rounded-[24px] border border-white/10 bg-gradient-to-br from-neon-orange/20 via-white/5 to-neon-mint/10 p-6 shadow-panel">
              <h3 className="font-display text-2xl uppercase tracking-[0.05em] text-white">Was gute Bewerber mitbringen sollten</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-neon-steel md:text-base">
                Gesucht sind Leute, die ruhig auftreten, Verantwortung uebernehmen und auch in stressigen Situationen
                nicht unkontrolliert reagieren. Gerade fuer einen GTA-RP-Server ist ein staffstarkes Team oft der
                Unterschied zwischen Chaos und Qualitaet.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {recruitmentPoints.map((point) => (
                  <span key={point} className="chip border-neon-orange/20 bg-neon-orange/10 text-neon-ice">
                    {point}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-[24px] border border-white/10 bg-deep-900/80 p-6 shadow-panel">
              <h3 className="font-display text-2xl uppercase tracking-[0.05em] text-white">Empfohlene naechste Ausbaustufen</h3>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-neon-steel md:text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-neon-mint" />
                  <span>Discord-Button mit direkter Bewerberweiterleitung</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-neon-mint" />
                  <span>Mitgliederbilder oder Rangabzeichen pro Teammitglied</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-neon-mint" />
                  <span>Interner Bereich fuer Aufgaben, Notizen oder Eventplanung</span>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
