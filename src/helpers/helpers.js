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

const scrollHandler = (setTopic) => {
  let y = window.scrollY;
  let home = document.getElementById("home").offsetTop;
  let aboutUs = document.getElementById("aboutus").offsetTop;
  let offset = 400; //px
  //console.log(i1,i2,i3,i4,x);
  if (y > home - offset && y < aboutUs) {
    setTopic("home");
  }
  if (y > aboutUs - offset) {
    setTopic("about us");
  }
};
export { tabHandler, observer, scrollHandler };
