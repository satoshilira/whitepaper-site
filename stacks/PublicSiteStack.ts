import { RemovalPolicy } from "aws-cdk-lib";
import { StackContext, Api, StaticSite } from "sst/constructs";

export function PublicSiteStack({ stack }: StackContext) {

  const zoneName = `satoshilira.${stack.stage === "prd" ? "io" : "xyz"}`;

  const site = new StaticSite(this, 'PublicSite', {
    path: '.',
    buildOutput: 'build',
    buildCommand: `npm run build`,
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
