# Gravexa design guide

Gravexa is an educational space-learning product for students and the general public. Its job is to make a close approach easier to understand. It does not try to look like a mission-control tool or predict a real collision.

> **Product rule:** The local result is for learning. It is not a real asteroid collision prediction.

## 1. Design direction

The interface uses a calm aerospace-instrument direction. It combines a deep space background, thin data labels, simple cards, and direct controls. The visual style supports the lesson. It must never make a local result look more certain than it is.

| Design principle | Guideline in Gravexa |
| --- | --- |
| **Clarity before drama** | State the model limit near the simulator title and in the result area. Use plain sentences. |
| **Learn by changing** | Show a path, then give visitors one clear control at a time. Each change must update the visual and local result. |
| **Show uncertainty** | Draw uncertainty as a wider corridor around the path. Do not hide it behind a single precise-looking line. |
| **Keep data sources separate** | Label the local model and JPL reference information clearly. JPL data must not change the local result. |
| **Use calm density** | Use small technical labels for context. Keep main headings, controls, and result text easy to scan. |
| **Support the fallback** | The 2D view is a first-class learning view when WebGL is unavailable or reduced motion is active. |

## 2. Visual system

The default theme is dark. It gives the Earth, asteroid path, and data highlights enough contrast. The light theme uses the same information order and semantic colors. It is not a separate visual design.

| Token or role | Dark implementation | Light implementation | Use |
| --- | --- | --- | --- |
| Page background | `oklch(.105 .017 255)` | `oklch(.975 .008 250)` | Main page surface. |
| Raised surface | `oklch(.15 .022 255)` | `oklch(.995 .004 250)` | Cards, navigation, and panels. |
| Primary cobalt | `oklch(.7 .14 250)` | `oklch(.43 .14 258)` | Main actions, clear path state, focus ring, and data emphasis. |
| Secondary surface | `oklch(.19 .027 255)` | `oklch(.94 .012 250)` | Control groups and quiet result tiles. |
| Main text | `oklch(.93 .012 250)` | `oklch(.19 .02 258)` | Headings and important values. |
| Muted text | `oklch(.67 .025 250)` | `oklch(.44 .025 255)` | Explanations and data labels. |
| Amber status | `#f1c96f` | `#d6aa50` | Close-approach state and closest-point marker. |
| Destructive status | `oklch(.68 .18 27)` | `oklch(.56 .2 27)` | Overlap state only. |

Use **Manrope** for headings, body text, and controls. Its wide, clean forms keep the content readable at large and small sizes. Use **Fragment Mono** only for short data labels, units, view mode labels, and technical tags. Use wide letter spacing on those labels to give the interface a measured instrument feel.

## 3. Layout and hierarchy

The landing page and simulator are different experiences. The landing page explains the idea and gives one clear route into the simulator. The simulator puts the visual experiment first and keeps controls nearby.

| Area | Layout rule | Reason |
| --- | --- | --- |
| **Navigation** | Use a compact, rounded navigation bar with the brand on the left and a single simulator action on the right. Keep it fixed on the landing page. | The main action remains easy to find without a large header. |
| **Landing hero** | Use the Earth video at full viewport size behind the content. Place no frame around the video. Add dark gradient and radial overlays for readable text. | The background sets the space context without competing with the message. |
| **Hero copy** | Keep the headline to one clear question. Put a short explanation and two actions below it. | Visitors can understand the product before they enter the simulator. |
| **Hero data card** | Place a compact glass-like card on the right at large sizes. Stack it below the copy at smaller sizes. | It introduces the local-model limit without blocking the path graphic. |
| **Explainer sections** | Use large spacing, one topic per section, and three numbered learning steps. | The page reads as a guided explanation, not a feature list. |
| **Simulator desktop** | Use a wide visual area on the left and a 350 px control column on the right. | The path stays the main object. Controls remain within one glance. |
| **Simulator mobile** | Stack the visual, local result, insight panels, comparison panel, presets, and controls. | The reading order remains logical on narrow screens. |

Use `max-w-5xl` for content that needs a focused reading width. The landing hero can expand to `max-w-[1400px]` to give its visual enough space. Keep page padding at `px-4` on small screens, `sm:px-6` on medium screens, and larger padding only when the available width supports it.

## 4. Components and surfaces

Cards use a soft, technical shape. Their large radius is part of the Gravexa identity. Do not replace them with sharp dashboard boxes or heavy shadows.

| Component | Required treatment |
| --- | --- |
| **Card** | Use a 1.7 rem radius, a subtle border, a quiet card surface, and a soft shadow only when the card needs depth. |
| **Primary action** | Use a rounded pill with cobalt or white contrast. Add a small arrow capsule only when it helps show movement into the next view. |
| **Secondary action** | Use a thin border and a calm surface. It must not compete with the simulator action. |
| **Preset** | Make the full preset row a button. Show its name in bold and its teaching purpose in small muted text. |
| **Slider group** | Show a visible label, a one-sentence explanation, the current value, and the slider. Keep one control group per row. |
| **Result card** | Start with `LOCAL RESULT` and the active view mode. Put the status name first, then the plain-language meaning, then the three values. |
| **Comparison** | Show only a saved value and the current value. State that the saved run stays in the open tab. |
| **Data panel** | State the source and the role of the data before showing values. Do not blend it into the local result card. |

## 5. Path and result semantics

The visual language must explain the model at a glance. Cobalt is the normal local path. Amber shows a close state and the closest-point marker. Red is reserved for an overlap state. The wide translucent band is the uncertainty range. Earth stays blue and bright enough to act as the fixed reference object.

| Visual element | Meaning | Constraint |
| --- | --- | --- |
| Dashed path | Current local asteroid path. | Use a visible contrast color. |
| Wide path corridor | Uncertainty around the path. | Make it visibly wider as the uncertainty value increases. |
| Dot on the path | Closest point in the local model. | Use amber when the result is close. |
| Earth | Fixed reference object for the local view. | Do not imply scale accuracy. |
| Asteroid | Educational visual object. | It is not a real object trajectory. |
| Status color | Clear, close, or overlap in the local model. | Always pair color with a text label. |

## 6. Motion and performance

Motion is quiet and optional. The landing page uses Lenis for smoother scrolling and GSAP for short entrance reveals. The page starts reveal work only when a section is near the screen. It uses `content-visibility` on lower sections to reduce offscreen rendering work.

Use transitions for color, scale, and small movement. Keep button feedback fast. The current implementation uses a small scale change for hover and press states. Do not add looping decorative motion to cards, controls, or text.

If `prefers-reduced-motion: reduce` is active, remove nonessential animation, use the poster instead of the hero video, and select the 2D simulator view. The local lesson must still work without movement.

## 7. Accessibility rules

Accessibility is part of the visual system. Do not treat it as an extra layer after a layout is complete.

| Need | Gravexa rule |
| --- | --- |
| Keyboard focus | Keep the visible cobalt focus outline at 2 px with a 3 px offset. Do not remove it. |
| Controls | Use visible labels for every slider and button. Give reset and theme controls an accessible name. |
| Canvas alternative | Keep the SVG 2D fallback available when WebGL is unavailable. Give it an image role and a useful label. |
| Reduced motion | Remove nonessential animation and use the static hero poster. |
| Color meaning | Pair every status color with clear words. |
| Theme support | Keep dark and light themes fully readable. Use the same content and information order in both. |
| Background media | Mark the hero video and decorative path SVG as hidden from assistive technology. |

## 8. Content rules

Use short, direct sentences. Prefer `local model`, `local result`, `uncertainty range`, and `closest approach`. Keep these names consistent in the interface and documents.

Do not use language that implies a real warning, a real risk score, or a forecast. Do not call the local calculation a prediction. Do not use fake mission data, fake reviews, or invented expert quotes.

## 9. Guardrails for future work

The next visual change must preserve the learning goal. A new feature needs a visible explanation, a keyboard path, a mobile layout, and a reduced-motion result. It must not add a database requirement or hide the learning disclaimer.

For any real astronomical data, show the source, update time, and role in the product. Keep it separate from the educational calculation unless the model changes in a documented and reviewed way.
