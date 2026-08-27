# Design notes

The default view is dark to make the path and Earth easy to see. Cobalt shows the main path. Amber marks the closest point. The interface uses small data labels and plain sentences.

Motion is short and optional. The landing page uses Lenis and GSAP only when the visitor does not request reduced motion. Offscreen landing sections defer layout work until they are near the screen.

The simulator has a 2D fallback. This keeps the main lesson available when 3D graphics are unavailable.
