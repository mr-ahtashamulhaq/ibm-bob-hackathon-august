import {Toaster} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {Route,Switch} from "wouter";
import {lazy,Suspense} from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import {ThemeProvider} from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
const Simulator=lazy(()=>import("./pages/Simulator"));
function Loading(){return <main className="space-grain grid min-h-[100dvh] place-items-center bg-background"><p className="font-data text-xs tracking-[.15em] text-muted-foreground">LOADING SIMULATOR</p></main>}
function Router(){return <Suspense fallback={<Loading/>}><Switch><Route path="/" component={Home}/><Route path="/simulator" component={Simulator}/><Route path="/404" component={NotFound}/><Route component={NotFound}/></Switch></Suspense>}
export default function App(){return <ErrorBoundary><ThemeProvider defaultTheme="dark" switchable><TooltipProvider><Toaster/><Router/></TooltipProvider></ThemeProvider></ErrorBoundary>}
