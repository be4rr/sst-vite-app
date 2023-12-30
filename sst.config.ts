import { SSTConfig } from "sst";
import { MyApp } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "sst-vite-app",
      region: "ap-northeast-1",
      profile: "be4rr",
    };
  },
  stacks(app) {
    app.stack(MyApp);
  },
} satisfies SSTConfig;
