import React from "react";
import "../css/journal.css";
import dividerImg from "../assets/images/divider.png";
import hero from "../assets/images/cyber.jpg";
import journal1 from "../assets/images/dct1.jpg";
import journal2 from "../assets/images/skill2.jpg";
import journal3 from "../assets/images/IMG-20240910-WA0069.jpg";
import journal4 from "../assets/images/skill2.jpg";






const posts = [
  {
    id: 1,
    title: "Web Development",
    author: "Dcrony",
    readTime: "5 mins read",
    image: hero,
    link: "blog-single.html",
  },
  {
    id: 2,
    title: "Alone",
    author: "Dcrony",
    readTime: "5 mins read",
    image: journal1,
    link: "blog-single.html",
  },
  {
    id: 3,
    title: "Coding",
    author: "Dcrony",
    readTime: "5 mins read",
    image: journal2,
    link: "blog-single.html",
  },
  {
    id: 4,
    title: "Success",
    author: "Dcrony",
    readTime: "5 mins read",
    image: journal3,
    link: "blog-single.html",
  },
  {
    id: 5,
    title: "Free Time With Friends",
    author: "Dcrony",
    readTime: "5 mins read",
    image: journal4,
    link: "blog-single.html",
  },
];

export default function Journal() {
  return (
    <section className="journal-section" id="journal-section">
      <div className="container">
        {/* ===== Heading ===== */}
        <div className="section-heading text-center">
          <h2 className="section-title">My Journal</h2>
          <img
            src={dividerImg}
            alt="divider"
            className="divider-img"
          />
        </div>

        {/* ===== Posts Grid ===== */}
        <div className="journal-grid">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              className="journal-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="journal-image">
                <img src={post.image} alt={post.title} />
                <div className="overlay"></div>
              </div>
              <div className="journal-content">
                <h3>{post.title}</h3>
                <p className="post-meta">
                  By {post.author} <span>•</span> {post.readTime}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
