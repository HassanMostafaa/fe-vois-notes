import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { FunctionComponent, PropsWithChildren } from "react";
import SPageLayout from "./styles/PageLayout.styles";

const PageLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <SPageLayout style={{ opacity: 0 }}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </SPageLayout>
  );
};

export default PageLayout;
