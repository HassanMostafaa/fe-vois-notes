import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { FunctionComponent, PropsWithChildren } from "react";
// import { SLayout } from "./styles/Layout.styles";

const PageLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
