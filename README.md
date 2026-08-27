# Gravexa

Gravexa is a small learning tool about asteroid close approaches. You change a few values, watch a path move, and read a local result.

The result is for learning only. It is not a real collision prediction.

## What it has

| Part | What it does |
|---|---|
| Landing page | Explains the tool, the main idea, and the model limits. |
| Simulator | Changes path distance, speed, direction, uncertainty, size, and one optional orbit value. |
| 3D view | Shows an asteroid, Earth, a path, an uncertainty corridor, and a closest point. |
| 2D fallback | Shows a simpler path when WebGL is not available or reduced motion is enabled. |
| Compare mode | Holds one earlier result in the open browser tab. It does not save it. |
| AI explanation | Sends the calculated values to Groq only when the visitor selects the explanation action. |
| JPL panel | Loads a small public reference record on demand. It does not change the local result. |

## Local model limits

The model runs in the browser. It uses a small set of made-up learning inputs. It does not use an ephemeris, full orbital mechanics, gravity from other bodies, or a professional risk model.

Keep the two data sources separate:

| Item | Meaning |
|---|---|
| Local result | A simple calculation from the current slider values. |
| JPL reference data | Public information about a real small body. |

## Run it locally

Use Node 22 and pnpm.

```bash
pnpm install
pnpm dev
```

Run the checks with:

```bash
pnpm check
pnpm test
pnpm vite build
```

## Deploy on Vercel

This project is set up for Vercel's static build and serverless API routes.

1. Import the GitHub repository in Vercel.
2. Add `GROQ_API_KEY` in **Project Settings → Environment Variables**.
3. Use the existing build command: `pnpm vite build`.
4. Deploy.

The local model, landing page, and 3D view work without a database. The optional Groq button needs the environment variable. The optional JPL button uses a public NASA JPL endpoint.

## Credits and sources

The Bennu model is from NASA. The reference lookup uses the NASA JPL Small-Body Database API. The site uses Babylon.js through its browser CDN, plus React, Vite, Tailwind, GSAP, Lenis, and Groq.

- [NASA Bennu 3D model](https://science.nasa.gov/resource/bennu-3d-model/)
- [NASA JPL Small-Body Database API](https://ssd-api.jpl.nasa.gov/doc/sbdb.html)
- [Babylon.js](https://www.babylonjs.com/)
- [Groq API documentation](https://console.groq.com/docs/quickstart)

## Project skills used

The build work used the supplied game-development, image-generation, frontend-design, UI/UX, Impeccable, high-end visual-design, Karpathy-guidelines, and simple-English guidance. The design uses a dark aerospace view, clear labels, careful motion, and a low-cost fallback.
