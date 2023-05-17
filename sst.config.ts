import { SSTConfig } from "sst";
import { WhitepaperSiteStack } from "./stacks/WhitepaperSiteStack";

export default {
  config(_input) {
    return {
      name: "public-site",
      region: "eu-west-1",
    };
  },
  stacks(app) {
    app.stack(WhitepaperSiteStack);
  }
} satisfies SSTConfig;
