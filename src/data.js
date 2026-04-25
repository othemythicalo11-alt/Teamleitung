export const teamMembers = [
  {
    name: "Niklas",
    role: "Teamleitung",
    status: "stark",
    description:
      "Fuehrt das Staff-Team, setzt Prioritaeten und behaelt Beschwerden, interne Bewertungen und Eskalationen im Blick.",
    strengths: ["Strategie", "Leitung", "Entscheidungen"],
    positiveNotes: [
      "haelt die Leitungsentscheidungen nachvollziehbar fest",
      "ist in Eskalationen ruhig und klar",
    ],
    negativeNotes: [
      "muss Aufgabenverteilung frueher delegieren, statt zu viel selbst aufzufangen",
    ],
    lastTalk: "Leitungscheck am 22.04.2026",
    nextStep: "Supportleitung entlasten und Verantwortungen klarer splitten",
  },
  {
    name: "Aylin",
    role: "Leitung Support",
    status: "stark",
    description:
      "Koordiniert Supportfaelle und sorgt dafuer, dass Beschwerden ruhig, fair und nachvollziehbar geloest werden.",
    strengths: ["Support", "Community", "Ruhe"],
    positiveNotes: [
      "antwortet ruhig in stressigen Situationen",
      "wird von Teamlern oft als stabile Ansprechperson genannt",
    ],
    negativeNotes: [
      "muss schwierige Faelle schneller an die Leitung eskalieren",
    ],
    lastTalk: "Feedbackgespraech am 21.04.2026",
    nextStep: "Eskalationsschema fuer problematische Tickets festigen",
  },
  {
    name: "Rico",
    role: "Whitelist Manager",
    status: "im Blick",
    description:
      "Verantwortlich fuer Bewerbungen, Einweisungen und einen sauberen Einstieg neuer Spieler in den Server.",
    strengths: ["Whitelist", "Ausbildung", "Ordnung"],
    positiveNotes: [
      "arbeitet Bewerbungen sauber und strukturiert ab",
      "erklaert Regeln neuen Spielern verstaendlich",
    ],
    negativeNotes: [
      "Rueckmeldungen dauern teilweise zu lange",
      "muss offene Bewerbungen sichtbarer dokumentieren",
    ],
    lastTalk: "Whitelist-Review am 20.04.2026",
    nextStep: "Antwortzeiten tracken und offene Faelle taeglich markieren",
  },
  {
    name: "Mika",
    role: "Event Koordination",
    status: "unauffaellig",
    description:
      "Plant serverweite Aktionen mit Fraktionen und bringt mit Events mehr Dynamik und langfristige Aktivitaet rein.",
    strengths: ["Events", "Fraktionen", "Aktivitaet"],
    positiveNotes: [
      "bringt regelmaessig eigene Eventideen ein",
      "koordiniert Fraktionen engagiert",
    ],
    negativeNotes: [
      "Eventnachbereitung koennte sauberer dokumentiert werden",
    ],
    lastTalk: "Event-Rueckblick am 19.04.2026",
    nextStep: "Nach jedem Event kurzes Ergebnisprotokoll hinterlegen",
  },
  {
    name: "Lena",
    role: "Moderation",
    status: "kritisch",
    description:
      "Dokumentiert Verstoesse sauber, schuetzt die Fairness auf dem Server und achtet auf konsistente Entscheidungen.",
    strengths: ["Regelwerk", "Fairness", "Dokumentation"],
    positiveNotes: [
      "kennt das Regelwerk sehr sicher",
      "entscheidet in klaren Faellen fair und direkt",
    ],
    negativeNotes: [
      "Tonfall im Support war zuletzt mehrfach zu hart",
      "zwei Teamler meldeten unruhige Kommunikation in Stresslagen",
    ],
    lastTalk: "Kritikgespraech am 23.04.2026",
    nextStep: "Kommunikation beobachten und in einer Woche erneut auswerten",
  },
  {
    name: "Noah",
    role: "Qualitaetskontrolle",
    status: "im Blick",
    description:
      "Sammelt Auffaelligkeiten aus Tickets und Feedback, damit wiederkehrende Probleme frueh erkannt werden.",
    strengths: ["Analyse", "Verbesserung", "Struktur"],
    positiveNotes: [
      "erkennt wiederkehrende Probleme sehr frueh",
      "liefert der Leitung gute Uebersichten",
    ],
    negativeNotes: [
      "muss Handlungsempfehlungen klarer formulieren",
    ],
    lastTalk: "Analysecheck am 18.04.2026",
    nextStep: "Aus Reports konkrete Massnahmen fuer das Team ableiten",
  },
];

export const stats = [
  { value: "24/7", label: "Fokus auf schnelle Reaktion bei wichtigen Support- und Teamfaellen" },
  { value: "4", label: "klare Leitungsbereiche fuer Staff, Community, Events und Qualitaet" },
  { value: "100%", label: "Ausrichtung auf Fairness, RP-Qualitaet und transparente Entscheidungen" },
];

export const reasons = [
  {
    title: "Interne Orientierung",
    text: "Die Teamleitung sieht direkt, wer fuer welche Bereiche verantwortlich ist und bei welchem Teamler genauer hingeschaut werden muss.",
    accent: true,
  },
  {
    title: "Saubere Dokumentation",
    text: "Positive Leistungen, Auffaelligkeiten und interne Hinweise koennen zentral gesammelt werden, statt irgendwo im Chat verloren zu gehen.",
  },
  {
    title: "Leicht pflegbar",
    text: "Texte, Teamler und Bewertungsbereiche koennen spaeter schnell angepasst werden, ohne die ganze Seite neu zu bauen.",
  },
];

export const divisions = [
  {
    index: "01",
    title: "Community Management",
    text: "Bearbeitet Feedback, Streitfaelle und Tickets und haelt den Umgangston zwischen Team und Community sauber.",
  },
  {
    index: "02",
    title: "Whitelist und Ausbildung",
    text: "Prueft Bewerbungen, fuehrt Einweisungen durch und sorgt dafuer, dass neue Spieler den RP-Standard verstehen.",
  },
  {
    index: "03",
    title: "Event und Fraktionskoordination",
    text: "Plant besondere Lagen, Events und Fraktionsabsprachen und bringt Leben in die Serverwoche.",
  },
  {
    index: "04",
    title: "Qualitaet und Regelwerk",
    text: "Analysiert Beschwerden, dokumentiert Entscheidungen und verbessert interne Ablaeufe Schritt fuer Schritt.",
  },
];

export const standards = [
  "ruhige Kommunikation auch in stressigen Support-Situationen",
  "gleiche Regeln fuer alle, unabhaengig von Namen oder Fraktion",
  "saubere Dokumentation von positiven und negativen Auffaelligkeiten",
  "klare interne Rueckmeldungen an Teamler ohne unnoetiges Drama",
];

export const weeklyRhythm = [
  {
    day: "Montag",
    text: "Kurzes Teambriefing mit offenen Baustellen, Beschwerden und Prioritaeten fuer die Woche.",
  },
  {
    day: "Mittwoch",
    text: "Zwischencheck zu Tickets, Fraktionsfragen und Teamleistung in aktiven Bereichen.",
  },
  {
    day: "Freitag",
    text: "Planung fuer Wochenendevents, Schwerpunktaktionen und hoeheres Spieleraufkommen.",
  },
];

export const spotlightIdeas = [
  {
    title: "Leistungsstand",
    text: "Ein kompakter Bereich, der zeigt, welche Teamler konstant stark arbeiten und wer aktuell Unterstuetzung braucht.",
  },
  {
    title: "Auffaelligkeiten",
    text: "Sammelt intern, ob es zu spaetes Reagieren, unruhige Kommunikation oder wiederkehrende Beschwerden gab.",
  },
  {
    title: "Positives Feedback",
    text: "Hebt gute Arbeit hervor, damit starke Leistungen in der Teamleitung nicht untergehen.",
  },
  {
    title: "Entwicklungsziele",
    text: "Zum Beispiel bessere Ticketzeiten, sauberere Doku oder ruhigere Kommunikation in Stresssituationen.",
  },
];

export const reviewAreas = [
  "positives Verhalten",
  "negative Auffaelligkeiten",
  "Verwarnungen oder Hinweise",
  "Entwicklung seit der letzten Leitungssicht",
];

export const filterOptions = ["alle", "stark", "unauffaellig", "im Blick", "kritisch"];

export const operationCards = [
  {
    title: "Leitungsfokus",
    items: [
      "klare Rollenverteilung im Staff",
      "schnelle Eskalation bei Supportfaellen",
      "Transparenz fuer Events und Fraktionen",
      "einheitliche Standards fuer Moderation",
    ],
  },
  {
    title: "Interne Bewertung",
    items: [
      "positive und negative Vermerke festhalten",
      "nachvollziehbare Teamler-Entwicklung",
      "auffaellige Muster frueh erkennen",
      "klare Grundlage fuer Leitungsentscheidungen",
    ],
  },
];

export const noteTemplates = [
  {
    title: "Positiver Eintrag",
    text: "Zum Beispiel: hat mehrere Tickets ruhig und sauber geloest, war verlaesslich online und hat Teamkollegen unterstuetzt.",
  },
  {
    title: "Negativer Eintrag",
    text: "Zum Beispiel: wiederholt zu spaet reagiert, unpassender Ton im Support oder Entscheidungen schlecht dokumentiert.",
  },
  {
    title: "Leitungsnotiz",
    text: "Zum Beispiel: im Blick behalten, zunaechst muendliches Gespraech fuehren oder in zwei Wochen erneut bewerten.",
  },
];

export const actionBoard = [
  {
    title: "Sofort beobachten",
    items: [
      "Lena: Tonfall im Support in den naechsten Tagen gezielt beobachten",
      "Rico: Rueckmeldungen bei offenen Bewerbungen kuerzer halten",
    ],
  },
  {
    title: "Positiv hervorheben",
    items: [
      "Aylin im naechsten Leitungsmeeting fuer ruhige Ticketarbeit loben",
      "Mika fuer konstante Eventideen sichtbar anerkennen",
    ],
  },
  {
    title: "Naechste Massnahmen",
    items: [
      "Noah soll aus Analyseberichten direkt konkrete To-dos ableiten",
      "Niklas delegiert einen Teil der Ticketkontrolle an die Supportleitung",
    ],
  },
];
