import { ScrollRestoration } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div
      className="min-h-svh grid w-full"
      style={{
        gridTemplateRows: "auto 1fr auto",
        gridTemplateColumns: "100%",
        gap: "2rem",
      }}
    >
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
