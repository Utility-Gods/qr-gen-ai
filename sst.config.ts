import { SSTConfig } from "sst";
import { Service } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "qr-gen-ai",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const service = new Service(stack, "service", {
        port: 5176,
      });

      stack.addOutputs({
        ServiceUrl: service.url,
      });
    });
  },
} satisfies SSTConfig;
