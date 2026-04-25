# DeepState Teamverwaltung

React- und Tailwind-Website fuer die Teamleitung eines GTA RP Servers.

## Tech Stack

- React
- Vite
- Tailwind CSS

## Entwicklung starten

```bash
npm install
npm run dev
```

## Produktions-Build

```bash
npm run build
```

Die fertige Ausgabe liegt danach im Ordner `dist`.

## Wichtige Dateien

- `src/App.jsx`
  Hauptaufbau der Seite mit allen Bereichen
- `src/data.js`
  Teammitglieder, Inhalte, Ideen und Leitungsdaten
- `src/index.css`
  Tailwind-Basis und eigene Komponentenklassen

## Teammitglieder aendern

In `src/data.js` findest du die Liste:

```js
export const teamMembers = [
  {
    name: "Niklas",
    role: "Teamleitung",
    status: "Leitet aktuell",
    description: "Beschreibung...",
    strengths: ["Strategie", "Leitung", "Entscheidungen"],
  },
];
```

Wenn du neue Leute hinzufuegen willst, kopiere einen Eintrag und passe die Werte an.

## Render Deployment

Fuer Render als Static Site:

- `Build Command`: `npm run build`
- `Publish Directory`: `dist`
- `Root Directory`: leer lassen, wenn dieses Projekt direkt im Repo liegt

Environment Variables brauchst du fuer diese Seite nicht.
