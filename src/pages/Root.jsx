import { ScrollRestoration } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div
      // className="min-h-svh grid w-full"
      style={{
        gridTemplateRows: "auto 1fr auto",
        gridTemplateColumns: "100%",
      }}
    >
      <MainHeader />

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Root;
