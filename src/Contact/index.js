import React from "react";
import { Page, Section } from "../Styles";
import Locations from "./Locations";
// import Feedback from "./Feedback";
import Footer from "../Footer";

export default () => {
  return (
    <Page>
      <Section>
        <Locations />
      </Section>
      {/* <Section>
        <Feedback />
      </Section> */}
      <Footer />
    </Page>
  );
};
