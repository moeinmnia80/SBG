const themeValidation = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

// change theme
const themeSwitchHandler = (isDark, setIsDark, dispatch, changeTheme) => {
  setIsDark((isDark) => !isDark);
  if (isDark) {
    dispatch(changeTheme("light"));
  } else {
    dispatch(changeTheme("dark"));
  }
};
export default themeValidation;
export { themeSwitchHandler };
