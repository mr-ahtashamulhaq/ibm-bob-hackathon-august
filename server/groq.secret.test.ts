import {describe,expect,it} from "vitest";
describe("Groq API key",()=>{it("authenticates with the Groq models endpoint",async()=>{const key=process.env.GROQ_API_KEY;expect(key).toBeTruthy();const response=await fetch("https://api.groq.com/openai/v1/models",{headers:{Authorization:`Bearer ${key}`}});expect(response.ok).toBe(true)},15000)});
