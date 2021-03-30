import { serve } from "https://deno.land/x/sift@0.1.6/mod.ts";

const page = (title: string, body: string): Response => new Response(`<title>${title}</title>
<meta charset="utf-8"/>
<style>
body {
  background: black;
  color: white;
}
main {
/*
  margin: 50vh auto 0;
  padding: 15px 30px; 
*/
  transform: translateY(-50%);
  border: solid 1px white;
  text-align: center;
  font-size: 10em;
}
</style>
<main>
${body}
</main>
`, {"headers": {"content-type": "text/html; charset=utf-8"}});

serve({
  "/": () => page("deno depoly sample", "デノ"),
  404: () => page("deno depoly sample", "ありまへん"),
});
