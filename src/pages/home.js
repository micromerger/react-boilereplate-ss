import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="liquip ex ea commodo consequat. Duis"
          description="ciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores e"
        />
        <Banner page="Home Page" />
      </Layout>
    </ThemeProvider>
  );
}

export default HomePage;
