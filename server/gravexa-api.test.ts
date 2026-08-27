import {describe,expect,it} from "vitest";
import explain from "../api/gravexa/explain";
import reference from "../api/gravexa/reference";
function response(){const state={statusCode:0,body:null as unknown};return{state,res:{status(code:number){state.statusCode=code;return this},json(body:unknown){state.body=body;return this}}}}
describe("Vercel API routes",()=>{it("rejects an explanation request with the wrong method",async()=>{const {state,res}=response();await explain({method:"GET"},res);expect(state.statusCode).toBe(405)});it("rejects a reference request with the wrong method",async()=>{const {state,res}=response();await reference({method:"POST"},res);expect(state.statusCode).toBe(405)});it("rejects an unsafe reference query",async()=>{const {state,res}=response();await reference({method:"GET",query:{q:"<script>"}},res);expect(state.statusCode).toBe(400)})});
