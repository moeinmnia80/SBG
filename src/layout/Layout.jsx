import { NavBar } from "../components/NavBar.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import themeValidation from "../helpers/theme.js";
import { Footer } from "../components/Footer.jsx";
import { useLocation } from "react-router-dom";
import { NavbarBlog } from "../components/NavbarBlog.jsx";

export const Layout = ({ children }) => {
  const theme = useSelector((store) => store.theme.theme);
  useEffect(() => {
    themeValidation();
  }, [theme]);
  const { pathname } = useLocation();
  return (
    <section className={`w-full h-full bg-white dark:bg-[#1a1a1d]`}>
      {pathname === "/" ? <NavBar /> : <NavbarBlog />}
      {children}
      <Footer />
    </section>
  );
};
