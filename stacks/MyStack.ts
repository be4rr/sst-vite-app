import { Api, StackContext, StaticSite } from "sst/constructs";

export function MyApp({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });

  const web = new StaticSite(stack, "web", {
    path: "packages/frontend",
    buildOutput: "dist",
    buildCommand: "npm run build",
    environment: {
      VITE_API_ENDPOINT: api.url,
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
    WebUrl: web.url,
  });
}
