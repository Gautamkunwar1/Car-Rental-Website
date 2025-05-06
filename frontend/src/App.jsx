import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function App() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
}
