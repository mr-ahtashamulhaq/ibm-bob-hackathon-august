import fs from "node:fs";

const files={home:fs.readFileSync("client/src/pages/Home.tsx","utf8"),simulator:fs.readFileSync("client/src/pages/Simulator.tsx","utf8"),canvas:fs.readFileSync("client/src/components/ApproachCanvas.tsx","utf8"),styles:fs.readFileSync("client/src/index.css","utf8")};
const checks=[
  ["landing has a named primary navigation",/Primary navigation|<nav/.test(files.home)],
  ["simulator controls have visible labels",/label htmlFor=/.test(files.simulator)],
  ["theme actions have labels",/aria-label="Change color theme"/.test(files.home)&&/aria-label="Change color theme"/.test(files.simulator)],
  ["3D canvas has a text label and keyboard focus",/tabIndex=\{0\}/.test(files.canvas)&&/aria-label="Interactive three-dimensional asteroid view/.test(files.canvas)],
  ["reduced motion has a 2D path choice",/prefers-reduced-motion/.test(files.simulator)&&/2D FALLBACK/.test(files.simulator)],
  ["focus styles are defined",/:focus-visible/.test(files.styles)],
];
const failures=checks.filter(([,passed])=>!passed);
checks.forEach(([name,passed])=>console.log(`${passed?"PASS":"FAIL"}: ${name}`));
if(failures.length)process.exit(1);
