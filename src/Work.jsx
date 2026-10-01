import "./Work.css";

const works = [
  {
    id: "01",
    title: "Project One",
    image: "/photo.jpg",
  },
  {
    id: "02",
    title: "Project Two",
    image: "/work/image2.jpg",
  },
  {
    id: "03",
    title: "Project Three",
    image: "/work/image3.jpg",
  },
  {
    id: "04",
    title: "Project Four",
    image: "/work/image4.jpg",
  },
];

function Work() {
  return (
    <main className="work-page">

      <section className="work-hero">

        <div className="work-top">
          <a href="/" className="work-logo">
            ACT2REACT
          </a>

          <span>03 / WORK</span>
        </div>

        <div className="work-hero-content">

          <span className="work-eyebrow">
            SELECTED WORK
          </span>

          <h1>
            Work that
            <br />
            <span>creates reaction.</span>
          </h1>

          <p>
            A collection of digital work,
            identities, campaigns and
            experiences created by ACT2REACT.
          </p>

        </div>

        <div className="work-scroll">
          SCROLL TO EXPLORE
          <span>↓</span>
        </div>

      </section>


      <section className="work-gallery">

        <div className="work-gallery-head">

          <span>
            {works.length} PROJECTS
          </span>

          <span>
            DIGITAL / CREATIVE
          </span>

        </div>


        <div className="work-grid">

          {works.map((work) => (

            <article
              className="work-item"
              key={work.id}
            >

              <div className="work-image">

                <img
                  src={work.image}
                  alt={work.title}
                />

                <div className="work-image-hover">
                  <span>VIEW</span>
                  <strong>↗</strong>
                </div>

                <small>
                  {work.id}
                </small>

              </div>


              <div className="work-info">

                <h2>
                  {work.title}
                </h2>

                <span>
                  DIGITAL WORK
                </span>

              </div>

            </article>

          ))}

        </div>

      </section>


      <section className="work-cta">

        <span>
          HAVE A PROJECT IN MIND?
        </span>

        <h2>
          Let's make
          <br />
          <span>something happen.</span>
        </h2>

        <a
          href="mailto:hello@act2react.com"
          className="work-cta-button"
        >
          START A PROJECT
          <strong>↗</strong>
        </a>

      </section>

    </main>
  );
}

export default Work;