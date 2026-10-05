# Portfolio

Mon portfolio de développeur, en ligne sur [portfolio-mouhsine.netlify.app](https://portfolio-mouhsine.netlify.app).

## Contenu

- Présentation et compétences : Java, Spring Boot, PostgreSQL, API REST, tests JUnit et Mockito, Angular, React, Vue.js
- Projets : stage sur la plateforme Idea To Market (code non public), projets de fin d'études, site d'une association, projets Angular
- CV à télécharger

## Technologies

- Next.js 13 et React 18
- Tailwind CSS
- Framer Motion pour les animations
- Déploiement sur Netlify

## Lancer le projet en local

```bash
npm install
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

## Organisation du code

| Dossier | Contenu |
|---|---|
| `src/app/page.js` | Page d'accueil, qui assemble les sections |
| `src/app/components/` | Une section par fichier : présentation, compétences, projets, contact |
| `src/app/api/send/route.js` | Route du formulaire de contact |
| `public/` | CV et images |
