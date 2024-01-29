const tabHandler = (topic) => {
  switch (topic) {
    case "home":
      return "left-0";
    case "about us":
      return "left-20";
    case "portfolio":
      return "left-40";
    case "services":
      return "left-60";
    case "articles":
      return "left-80";
  }
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const observerFadeUp = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("portfolio-show");
    } else {
      entry.target.classList.remove("portfolio-show");
    }
  });
});

const observerWin = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("window-show");
    } else {
      entry.target.classList.remove("window-show");
    }
  });
});

const scrollHandler = (setTopic) => {
  let y = window.scrollY;
  const home = document.getElementById("home").offsetTop;
  const aboutUs = document.getElementById("aboutus").offsetTop;
  const portfolio = document.getElementById("portfolio").offsetTop;
  const offset = 400; //px
  if (y > home - offset && y < aboutUs) {
    setTopic("home");
  }
  if (y > aboutUs - offset && y < portfolio) {
    setTopic("about us");
  }
  if (y > portfolio - offset) {
    setTopic("portfolio");
  }
};

const scrollVar = () => {
  const htmlElement = document.documentElement;
  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight;
  htmlElement.style.setProperty(
    "--scroll",
    Math.min(percentOfScreenHeightScrolled * 100, 100),
  );
};

export {
  tabHandler,
  observer,
  scrollHandler,
  observerFadeUp,
  scrollVar,
  observerWin,
};
