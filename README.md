# Gravexa 🪐

[![IBM Bob Hackathon](https://img.shields.io/badge/IBM%20Bob-AI%20Builders%20Challenge-0f62fe?style=flat-square&logo=ibm&logoColor=white)](https://aibuilderschallenge-bobhub.bemyapp.com/#/sponsors/2-august-challenge)
[![Theme](https://img.shields.io/badge/Theme-Advance%20Space%20Exploration%20with%20AI-7c5cff?style=flat-square)](https://aibuilderschallenge-bobhub.bemyapp.com/#/sponsors/2-august-challenge)
[![Live site](https://img.shields.io/badge/Live%20site-gravexa.vercel.app-000000?style=flat-square&logo=vercel&logoColor=white)](https://gravexa.vercel.app)
[![YouTube Demo](https://img.shields.io/badge/YouTube-Demo%20Video-FF0000?style=flat-square&logo=youtube&logoColor=white)](https://youtu.be/1hxC2grUFGM?si=CSFGeHTnFblfPfzW)
[![No database](https://img.shields.io/badge/Database-none-2f855a?style=flat-square)](#privacy-and-data)

**Gravexa** is an interactive learning tool about asteroid close approaches. Move a few values, watch the path change, and read a local result. The site is for students and the general public.

> **Important:** Gravexa uses a simplified local learning model. It does **not** predict a real asteroid collision or provide mission advice.

## 🚀 Hackathon project

Gravexa was built for the **[AI Builders Challenge with IBM Bob — August Challenge](https://aibuilderschallenge-bobhub.bemyapp.com/#/sponsors/2-august-challenge)**. The August theme was **Advance Space Exploration with AI**. The challenge asks students to build AI-powered solutions that make complex, data-heavy space work easier to understand and more accessible. [1]

IBM Bob was the primary development tool for this hackathon project. It supported the work from feature planning through implementation, documentation, review, and testing. The optional explanation feature uses Groq only after a visitor asks for it.

| Challenge focus | How Gravexa responds |
| --- | --- |
| **Advance space exploration with AI** | It turns a close-approach concept into a visual experiment. Visitors move values and see how the shown path changes. |
| **Make complex information easier to use** | The result card explains closest distance, safety margin, and uncertainty in plain language. |
| **Use AI meaningfully** | IBM Bob was the primary development tool. The optional Groq feature explains the visitor's current local result in plain language. |
| **Show technical execution** | The site combines a browser-only model, a Babylon.js 3D view, a no-WebGL 2D fallback, on-demand JPL reference data, and accessible controls. |
| **Show feasibility** | It has no application database, no account system, and no saved user data. It uses Vercel and public resources. |
| **Create useful public value** | Students and general visitors can learn the meaning of a close approach without reading mission data tables first. |
| **Build responsibly** | The site clearly separates its local model from real NASA JPL reference information. It never presents a local result as a collision forecast. |

The official challenge page lists **Technical Execution**, **Innovation**, **Challenge Fit**, **Feasibility**, and **Real-World Impact** as judging categories. [1]

## 🎓 What the site does

The landing page explains the main idea before the visitor opens the simulator. The simulator lets the visitor change a simple path model. It then shows the result in a 3D view, or in a 2D fallback when WebGL is unavailable.

| Part | What it does |
| --- | --- |
| **Full-screen landing page** | Uses a real Earth video behind the content. It explains the learning goal and states the model limit. |
| **Path controls** | Changes miss-distance offset, approach speed, direction angle, uncertainty range, asteroid size, and an optional orbit bias. |
| **Preset cases** | Starts an experiment with Nearby Pass, Wide Pass, or Uncertain Path. |
| **3D learning view** | Shows Earth, the Bennu asteroid asset, an asteroid path, an uncertainty corridor, and the closest point. |
| **2D fallback** | Shows the same learning idea when a browser has no WebGL support or reduced motion is active. |
| **Local result** | Shows clear, close, or overlap only in the simplified local model. |
| **Compare two runs** | Keeps one earlier result in the open browser tab so the visitor can compare it with the current result. |
| **JPL reference panel** | Loads a small public small-body record on demand. It does not change the local calculation. |
| **AI explanation** | Sends the current local inputs and result to Groq only when the visitor selects the explanation action. |

## 🧭 How to use Gravexa

1. Open the [live site](https://gravexa.vercel.app).
2. Select **Open simulator**.
3. Select a preset or change one slider.
4. Read the local result and watch the path move.
5. Save one run if you want to compare it with a second run.
6. Open the JPL panel or request an AI explanation when you want more context.

The best learning method is to change one value at a time. A wider uncertainty range makes the displayed corridor wider. A different miss-distance offset moves the path relative to Earth.

## ⚠️ Model limits and responsible use

Gravexa runs a small calculation in the browser. It uses a limited set of learning inputs. It does not use ephemerides, full orbital mechanics, gravity from other bodies, observation data, or a professional risk model.

| Information shown | Meaning |
| --- | --- |
| **Local result** | A simplified calculation from the values selected in the simulator. It is for learning only. |
| **JPL reference data** | Public reference information about a real small body from NASA JPL. [2] |
| **Groq explanation** | Plain-language text about the local result. It is not an astronomical prediction. [4] |

Do not use Gravexa for safety decisions, observation planning, or real mission work. Space agencies use more data, specialist tools, and reviewed physics models for those tasks.

## ✨ Design and accessibility

The product uses a calm aerospace-instrument visual style. Dark space surfaces, cobalt path colors, amber closest-point markers, and compact data labels make the learning view easier to read. The full design rules are in [DESIGN.md](./DESIGN.md).

The site supports a dark and light theme, visible keyboard focus, labeled controls, reduced motion, and a 2D fallback for browsers without WebGL. The detailed validation notes are in [ACCESSIBILITY.md](./ACCESSIBILITY.md).

## 🧱 Technical approach

The main simulation logic runs in the browser. This keeps the experiment responsive and avoids storing visitor data. The optional serverless endpoints only handle user-requested explanation and reference lookups.

| Layer | Technology | Role |
| --- | --- | --- |
| Client | React 19, TypeScript, Vite, Tailwind CSS 4 | Routes, controls, themes, local calculation, and page layout. |
| 3D view | Babylon.js | Earth, asteroid, path, uncertainty corridor, and camera controls. [3] |
| Motion | GSAP and Lenis | Short landing-page movement when reduced motion is not active. |
| Serverless API | Vercel Functions | Optional Groq explanation and JPL reference lookup. |
| AI | IBM Bob and Groq | IBM Bob supported primary development. Groq writes an optional explanation after user action. [4] |
| Hosting | Vercel | Static Vite build, client routing, and serverless API routes. |

## 🔒 Privacy and data

Gravexa has **no application database**. It does not create accounts, save a profile, or persist simulator runs. A saved comparison stays only in the open browser tab.

The optional JPL feature sends a request to the public JPL endpoint. The optional explanation feature sends the current local values to the project API, which sends them to Groq. This happens only after the visitor selects the explanation action.

## 📁 Repository structure

```text
.
├── api/
│   └── gravexa/
│       ├── explain.ts          # Optional Groq explanation endpoint
│       └── reference.ts        # Optional NASA JPL reference endpoint
├── client/
│   └── src/
│       ├── components/
│       │   ├── ApproachCanvas.tsx
│       │   ├── InsightsPanel.tsx
│       │   └── LandingMotion.tsx
│       ├── lib/
│       │   └── simulation.ts   # Browser-only learning model
│       └── pages/
│           ├── Home.tsx        # Landing experience
│           └── Simulator.tsx   # Interactive simulator
├── scripts/
│   └── a11y-check.mjs          # Source accessibility assertions
├── server/
│   └── gravexa.ts              # API schemas and service helpers
├── ACCESSIBILITY.md             # Accessibility notes
├── ASSETS.md                    # Asset credits and notes
├── DESIGN.md                    # Product design guide
├── PRODUCT.md                   # Product context and scope
└── vercel.json                  # Vercel build and route settings
```

## 🛠️ Run the project locally

Use Node.js 22 and pnpm.

```bash
pnpm install
pnpm dev
```

Open the local address shown in the terminal. The landing page, local model, 3D view, and 2D fallback work without an API key.

Run the project checks with:

```bash
pnpm check
pnpm test
pnpm vite build
```

## ▲ Deploy on Vercel

This repository includes `vercel.json` for a Vite static build and Vercel serverless API routes. Import the repository into Vercel, then use `pnpm vite build` as the build command. Vercel publishes the `dist/public` output folder.

Set `GROQ_API_KEY` in **Project Settings → Environment Variables** only if you want the optional AI explanation action to work in production. The rest of the product does not need this key.

## 📚 Sources and credits

The Bennu model comes from NASA. The on-demand reference lookup uses the NASA JPL Small-Body Database API. Babylon.js provides the browser 3D engine. [2] [3]

| Source | Use in Gravexa |
| --- | --- |
| [NASA Bennu 3D model](https://science.nasa.gov/resource/bennu-3d-model/) | Asteroid asset in the 3D learning view. |
| [NASA JPL Small-Body Database API](https://ssd-api.jpl.nasa.gov/doc/sbdb.html) | On-demand public reference information. |
| [Babylon.js](https://www.babylonjs.com/) | Browser 3D engine. |
| [Groq API documentation](https://console.groq.com/docs/quickstart) | Optional plain-language explanation feature. |

## References

[1]: https://aibuilderschallenge-bobhub.bemyapp.com/#/sponsors/2-august-challenge "AI Builders Challenge with IBM Bob — August Challenge"
[2]: https://ssd-api.jpl.nasa.gov/doc/sbdb.html "NASA JPL Small-Body Database API"
[3]: https://www.babylonjs.com/ "Babylon.js"
[4]: https://console.groq.com/docs/quickstart "Groq API Documentation"
