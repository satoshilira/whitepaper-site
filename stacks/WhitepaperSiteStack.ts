import { RemovalPolicy } from "aws-cdk-lib";
import { StackContext, Api, StaticSite } from "sst/constructs";

export function WhitepaperSiteStack({ stack }: StackContext) {

  const zoneName = `whitepaper.satoshilira.${stack.stage === "prd" ? "io" : "xyz"}`;

  const site = new StaticSite(this, 'WhitepaperSite', {
    path: '.',
    buildOutput: 'public',
    buildCommand: `build`,
    errorPage: 'redirect_to_index_page',
    customDomain: zoneName,
    cdk: {
      bucket: {
        removalPolicy: RemovalPolicy.DESTROY,
      },
    },
    fileOptions: [
      {
        exclude: '*',
        include: '*.html',
        cacheControl: 'max-age=0,no-cache,no-store,must-revalidate',
      },
      {
        exclude: '*',
        include: ['*.js', '*.css'],
        cacheControl: 'max-age=31536000,public,immutable',
      },
    ],
  });

  // Show the endpoint in the output
  this.addOutputs({
    'PublicSiteUrl': site.url,
  });

}
