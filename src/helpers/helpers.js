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
const observerToUp = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("to-up-show");
    } else {
      entry.target.classList.remove("to-up-show");
    }
  });
});

const scrollHandler = (setTopic) => {
  let y = window.scrollY;
  const home = document.getElementById("home").offsetTop;
  const aboutUs = document.getElementById("aboutus").offsetTop;
  const portfolio = document.getElementById("portfolio").offsetTop;
  const services = document.getElementById("services").offsetTop;
  const articles = document.getElementById("articles").offsetTop;
  const offset = 400; //px
  if (y > home - offset && y < aboutUs) {
    setTopic("home");
  }
  if (y > aboutUs - offset && y < portfolio) {
    setTopic("about us");
  }
  if (y > portfolio - offset && y < services) {
    setTopic("portfolio");
  }
  if (y > services - offset && y < articles) {
    setTopic("services");
  }
  if (y > articles - offset) {
    setTopic("articles");
  }
};

export { tabHandler, observer, scrollHandler, observerToUp };
