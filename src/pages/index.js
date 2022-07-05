import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Services from "sections/services";
import ExcitingFeatures from "sections/exciting-features";
import WorkHard from "sections/work-hard";
import UltimateFeatures from "sections/ultimate-features";
import HappyCustomer from "sections/happy-customer";
import Blog from "sections/blog";
import SubscribeUs from "sections/subscribe-us";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="liquip ex ea commodo consequat. Duis"
          description="ciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores e"
        />
        <Banner page="Landing Page" />
        <Services />
        <ExcitingFeatures />
        <WorkHard />
        <UltimateFeatures />
        <HappyCustomer />
        <Blog />
        <SubscribeUs />
      </Layout>
    </ThemeProvider>
  );
}
