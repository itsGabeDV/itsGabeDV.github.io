import React, { useContext, useEffect, useState } from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);

  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isMobile, setIsMobile] = useState(false);
  const [showAllMobile, setShowAllMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!workExperiences.display) {
    return null;
  }

  const experiences = workExperiences.experience || [];
  const visibleCount = 4;
  const maxStartIndex = Math.max(0, experiences.length - visibleCount);

  const desktopCards = experiences.slice(startIndex, startIndex + visibleCount);
  const mobileCards = showAllMobile ? experiences : experiences.slice(0, visibleCount);

  const goLeft = () => {
    setDirection("prev");
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const goRight = () => {
    setDirection("next");
    setStartIndex((prev) => Math.min(maxStartIndex, prev + 1));
  };

  return (
    <div id="experience">
      <div className="experience-container" id="workExperience">
        <div className="experience-content">
          <h1 className="experience-heading">Experiences</h1>

          {isMobile ? (
            <>
              <div className="experience-cards-div experience-cards-mobile">
                {mobileCards.map((card, i) => (
                  <ExperienceCard
                    key={i}
                    isDark={isDark}
                    cardInfo={{
                      company: card.company,
                      desc: card.desc,
                      date: card.date,
                      companylogo: card.companylogo,
                      role: card.role,
                      descBullets: card.descBullets,
                    }}
                  />
                ))}
              </div>

              {experiences.length > visibleCount && (
                <button
                  className="experience-view-all-btn"
                  onClick={() => setShowAllMobile((prev) => !prev)}
                >
                  {showAllMobile ? "Show Less" : "View All"}
                </button>
              )}
            </>
          ) : (
            <div className="experience-desktop-row">
              <button
                className="experience-arrow"
                onClick={goLeft}
                disabled={startIndex === 0}
                aria-label="Previous experience"
              >
                <i className="fas fa-chevron-left" />
              </button>

              <div className={`experience-cards-div experience-cards-desktop experience-anim-${direction}`}>
                {desktopCards.map((card, i) => (
                  <ExperienceCard
                    key={i}
                    isDark={isDark}
                    cardInfo={{
                      company: card.company,
                      desc: card.desc,
                      date: card.date,
                      companylogo: card.companylogo,
                      role: card.role,
                      descBullets: card.descBullets,
                    }}
                  />
                ))}
              </div>

              <button
                className="experience-arrow"
                onClick={goRight}
                disabled={startIndex === maxStartIndex}
                aria-label="Next experience"
              >
                <i className="fas fa-chevron-right" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}