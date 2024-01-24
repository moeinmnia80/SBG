export const ArticleAboutUs = () => {
  return (
    <>
      <section
        className={`grid place-items-center grid-cols-1 \ 
        grid-rows-[minmax(15rem,_1fr)_minmax(15rem,_1fr)_minmax(15rem,_1fr)] \
        sm:grid-rows-2 sm:grid-cols-2 \
         px-8 sm:p-0 lg:grid-cols-3 lg:grid-rows-1 mt-8 w-full h-max gap-8 \
         2xl:grid-cols-5`}
      >
        <article
          className={`not-show w-full h-full border-[1px] border-black rounded-md \
                2xl:col-start-2 2xl:col-end-3 overflow-hidden`}
        >
          <h2
            className={`text-white bg-black font-bold text-2xl p-4 md:p-4 \ 
                 border-b-[1px] border-black`}
          >
            At a Glance
          </h2>
          <p className={`text-black text-sm p-4 md:p-4 text-justify`}>
            We are an experienced group of developers specializing in Front-End
            development. From expertise in HTML, CSS, and JavaScript to
            proficiency in popular frameworks like React.js and Vue.js, we have
            successfully delivered projects with high standards and diverse
            designs.
          </p>
        </article>
        <article
          className={`not-show w-full h-full border-[1px] border-black rounded-md \
               2xl:col-start-3 2xl:col-end-4 overflow-hidden`}
        >
          <h2
            className={` text-white bg-black font-bold text-2xl p-4 md:p-4 \
                  border-b-[1px] border-black`}
          >
            SBG Values
          </h2>
          <p className={`text-black text-sm p-4 md:p-4 text-justify`}>
            At SBG, we focus on enhancing the user experience. With an
            innovative approach and the use of advanced technologies, our goal
            is to create programs and websites that not only run on any device
            but also provide engaging and reliable user experiences.
          </p>
        </article>
        <article
          className={`not-show w-full h-full border-[1px] border-black rounded-md \
              2xl:col-start-4 2xl:col-end-5 overflow-hidden`}
        >
          <h2
            className={` text-white bg-black font-bold text-2xl p-4 md:p-4 \
                border-b-[1px] border-black `}
          >
            Contacting SBG
          </h2>
          <p className={` text-black text-sm p-4 md:p-4 text-justify`}>
            If you have any questions or suggestions, we would be delighted to
            hear from you through our contact section. We love brainstorming and
            collaborating with you on new projects.
          </p>
        </article>
      </section>
    </>
  );
};
