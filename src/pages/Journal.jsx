import React from "react";
import "../css/journal.css"

const posts = [
  {
    id: 1,
    title: "Web Development",
    author: "Dcrony",
    readTime: "5 mins read",
    image: "src/assets/images/cyber.jpg",
    link: "blog-single.html",
    delay: "0",
  },
  {
    id: 2,
    title: "Alone",
    author: "Dcrony",
    readTime: "5 mins read",
    image: "src/assets/images/IMG-20240914-WA0144.jpg",
    link: "blog-single.html",
    delay: "100",
  },
  {
    id: 3,
    title: "Coding",
    author: "Dcrony",
    readTime: "5 mins read",
    image: "src/assets/images/skill2.jpg",
    link: "blog-single.html",
    delay: "100",
  },
  {
    id: 4,
    title: "Success",
    author: "Dcrony",
    readTime: "5 mins read",
    image: "src/assets/images/IMG-20240910-WA0098.jpg",
    link: "blog-single.html",
    delay: "0",
  },
  {
    id: 5,
    title: "Free Time With Friends",
    author: "Dcrony",
    readTime: "5 mins read",
    image: "src/assets/images/IMG-20240910-WA0069.jpg",
    link: "blog-single.html",
    delay: "200",
  },
];

export default function Journal() {
  return (
    <div className="unslate_co--section" id="journal-section">
      <div className="container">
        <div className="section-heading-wrap text-center mb-5">
          <h2 className="heading-h2 text-center divider">
            <span className="gsap-reveal">My Journal</span>
          </h2>
          <span className="gsap-reveal">
            <img src="src/assets/images/divider.png" alt="divider" width="76" />
          </span>
        </div>

        <div className="row gutter-v4 align-items-stretch">
          {posts.map((post, idx) => (
            <div
              key={post.id}
              className={`col-sm-6 col-md-6 col-lg-${
                idx === 0 ? "8" : "4"
              } blog-post-entry`}
              data-aos="fade-up"
              data-aos-delay={post.delay}
            >
              <a href={post.link} className="grid-item blog-item w-100 h-100">
                <div className="overlay">
                  <div className="portfolio-item-content">
                    <h3>{post.title}</h3>
                    <p className="post-meta">
                      By {post.author} <span className="small">&bullet;</span>{" "}
                      {post.readTime}
                    </p>
                  </div>
                </div>
                <img
                  src={post.image}
                  className="lazyload img-fluid"
                  alt={post.title}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
