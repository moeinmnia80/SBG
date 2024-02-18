export const ArticleAboutUs = () => {
  return (
    <>
      <section className={`aboutus`}>
        <article
          className={`aboutus-article not-show bg-gradient-to-r from-[#1EEB31] to-[#AEFF02]`}
        >
          <h2 className={`aboutus-article-title`}>At a Glance</h2>
          <p className={`aboutus-article-text`}>
            We are an experienced group of developers specializing in Front-End
            development. From expertise in
            <strong> HTML, CSS, and JavaScript</strong> to proficiency in
            popular frameworks like <strong>React.js and Vue.js</strong>, we
            have successfully delivered projects with high standards and diverse
            designs.
          </p>
        </article>
        <article
          className={`aboutus-article not-show bg-gradient-to-r from-[#eebd89] to-[#da3abd]`}
        >
          <h2 className={`aboutus-article-title`}>SBG Values</h2>
          <p className={`aboutus-article-text`}>
            At SBG, we focus on enhancing the user experience. With an
            innovative approach and the use of advanced technologies, our goal
            is to create programs and websites that not only run on any device
            but also provide engaging and reliable user experiences.
          </p>
        </article>
        <article
          className={`aboutus-article not-show bg-gradient-to-r from-[#9600ff] to-[#AEbaf8]`}
        >
          <h2 className={`aboutus-article-title`}>Contacting SBG</h2>
          <p className={`aboutus-article-text`}>
            If you have any questions or suggestions, we would be delighted to
            hear from you through our contact section. We love brainstorming and
            collaborating with you on new projects.
          </p>
        </article>
      </section>
    </>
  );
};
