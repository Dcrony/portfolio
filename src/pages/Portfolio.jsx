import { useState, useEffect, useRef } from "react";


const portfolioItems = [
  {
    id: 1,
    category: "web",
    title: "Creative Website",
    image: "src/assets/images/shoe.png",
  },
  {
    id: 2,
    category: "app",
    title: "Mobile App Design",
    image: "src/assets/images/result.png",
  },
  {
    id: 3,
    category: "branding",
    title: "Brand Identity",
    image: "src/assets/images/restaurant.png",
  },
];

const filters = [
  { label: "All", value: "*" },
  { label: "Web", value: "web" },
  { label: "App", value: "app" },
  { label: "Branding", value: "branding" },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("*");
  const gridRef = useRef(null);

  // Filtering logic (simple Isotope-like)
  const filteredItems =
    activeFilter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  // Scroll animation placeholder (if needed later for GSAP/ScrollMagic)
  useEffect(() => {
    // e.g. setup reveal animations when in view
  }, []);

  return (
    <div className="unslate_co--section" id="portfolio-section">
      <div className="container">
        <div className="section-heading-wrap text-center mb-5">
          <h2 className="heading-h2 text-center divider">
            <span className="gsap-reveal">Portfolio</span>
          </h2>
          <span className="gsap-reveal">
            <img src="src/assets/images/divider.png" alt="divider" width="76" />
          </span>
        </div>

        {/* Filter buttons */}
        <div className="portfolio-filters text-center mb-5">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`btn-filter ${activeFilter === f.value ? "active" : ""}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="row gutter-v2" ref={gridRef}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`col-sm-6 col-md-4 item ${item.category}`}
              data-id={item.id}
            >
              <a
                href={item.image}
                className="portfolio-item isotope-item"
                data-fancybox="gallery"
              >
                <div className="overlay">
                  <div className="portfolio-item-content">
                    <h3>{item.title}</h3>
                    <span>{item.category}</span>
                  </div>
                </div>
                <img
                  src={item.image}
                  className="lazyload img-fluid"
                  alt={item.title}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
