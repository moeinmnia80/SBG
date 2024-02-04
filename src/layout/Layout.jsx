import { NavBar } from "../components/NavBar.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import themeValidation from "../helpers/theme.js";
import { Footer } from "../components/Footer.jsx";

export const Layout = ({ children }) => {
  const theme = useSelector((store) => store.theme.theme);
  useEffect(() => {
    themeValidation();
  }, [theme]);
  return (
    <>
      <NavBar />
      {children}
      {/*<Footer />*/}
    </>
  );
};
