# Accessibility check

Gravexa uses visible labels, keyboard-focus styles, touch-sized controls, and a readable light and dark theme. The simulator uses a labelled canvas. Its sliders have labels and value text.

The app has a 2D fallback when WebGL is unavailable or reduced motion is requested. The landing-page motion turns off when reduced motion is requested.

Run the source check with:

```bash
node scripts/a11y-check.mjs
```

The visual checks also cover a desktop and a mobile layout for the landing page and simulator.

| Check | Landing page | Simulator |
|---|---|---|
| Desktop view | Checked at 1280 × 900. The navigation and main action are visible. | Checked at 1280 × 900. The 3D canvas, main controls, and labels are visible. |
| Mobile view | Checked at 390 × 844. The heading, buttons, and local-model note remain visible. | Checked at 390 × 844. The camera controls, path view, and result card remain visible. |
| Keyboard and labels | Navigation, links, buttons, and theme action have visible focus styling and names. | Sliders have visible labels, buttons have names, and the canvas can receive keyboard focus. |
| Reduced motion | Landing motion does not start when reduced motion is requested. | The local 2D path is selected when reduced motion is requested or WebGL is absent. |
