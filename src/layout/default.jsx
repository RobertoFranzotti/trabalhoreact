import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import PosFooter from "../components/Footer/PosFooter";



export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
