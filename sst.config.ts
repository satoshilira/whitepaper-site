import { SSTConfig } from "sst";
import { PublicSiteStack } from "./stacks/PublicSiteStack";

export default {
  config(_input) {
    return {
      name: "public-site",
      region: "eu-west-1",
    };
  },
  stacks(app) {
    app.stack(PublicSiteStack);
  }
} satisfies SSTConfig;
