import React from "react";
import "./TalkCard.scss";

export default function TalkCard({ talkDetails }) {
  return (
    <div className="container">
      <div className={talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"}>
        {/* Banner Image */}
        {talkDetails.image && (
          <img src={talkDetails.image} alt={talkDetails.title} className="talk-card-image" />
        )}

        <div className="diagonal-fill"></div>
        <div className="talk-card-title">{talkDetails.title}</div>
        <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

        <div className="card-footer-button-div">
          {/* Only render Slides button if slides_url exists */}
          {talkDetails.slides_url && (
            <a href={talkDetails.slides_url} target="_blank" rel="noreferrer" className="talk-button">
              Slides
            </a>
          )}
          {/* Always render Event button if it exists */}
          {talkDetails.event_url && (
            <a href={talkDetails.event_url} target="_blank" rel="noreferrer" className="talk-button">
              Event
            </a>
          )}
        </div>
      </div>
    </div>
  );
}