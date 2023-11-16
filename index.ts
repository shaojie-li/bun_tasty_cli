import figlet from "figlet";
import { getConfig } from "config";



const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const body = figlet.textSync('Bun!' + Bun.version);
        const config = getConfig()
      return new Response(JSON.stringify({...config, bunText: body}, null ,2));
    },
  });
  
console.log(`Listening on http://localhost:${server.port} ...`);
