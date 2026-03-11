import React, { useContext } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import ImageCarousel from "../../components/imageCarousel/ImageCarousel.js";


export default function StartupProject() {
  // eslint-disable-next-line no-unused-vars
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    const win = window.open(url, "_blank");
    if (win) win.focus();
  }



  const { isDark } = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              // determine images array (new `images` or legacy `image`)
              const imagesArr =
                project.images && project.images.length ? project.images : (project.image ? [project.image] : []);

              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {imagesArr.length ? (
                    <div className="project-image">
                      <ImageCarousel
                        images={imagesArr}
                        interval={5000}
                        altBase={project.projectName}
                      />
                    </div>
                  ) : null}

                  <div className="project-detail">
                    <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                      {project.projectName}
                    </h5>
                    <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                      {project.projectDesc}
                    </p>

                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((linkObj, idx) => {
                          // treat as download if filename ends with .zip or label contains "download"
                          const isDownload =
                            (linkObj.url && linkObj.url.toLowerCase().endsWith(".zip")) ||
                            (linkObj.name && linkObj.name.toLowerCase().includes("download"));
                            if(isDownload) {
                              return (  
                                <a
                                key={idx}
                                className={isDark ? "dark-mode project-tag" : "project-tag"}
                                href={linkObj.url}
                                download
                                rel="noreferrer"
                                >
                                {linkObj.name}
                                </a>
                              );
                            } else {
                                return (
                                  <a
                                    key={idx}
                                    className={isDark ? "dark-mode project-tag" : "project-tag"}
                                    href={linkObj.url}         // example: "/downloads/Tower_Defense.zip"
                                    download                   
                                    rel="noreferrer"
                                    >
                                    {linkObj.name}
                                  </a>
                                );
                            }
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}