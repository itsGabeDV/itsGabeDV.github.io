---
layout: single
title: "Technical Projects"
permalink: /projects/
author_profile: true

# Creating Patient-Specific Models for Fluoroscopy PSD Estimation
psd_project:
  - image_path: /assets/images/mayo_model.jpg
    alt: "3D model PSD estimate"
    title: "Mayo Clinic 3D Estimation & 3D Modeling"
    excerpt: "The goal of the project was to improve the accuracy of Peak Skin Dose (PSD) estimates to enhance fluoroscopy patient safety. Fluoroscopy procedures utilize generic patient data in PSD estimates. My research team was tasked with creating patient-specific models to attain more accurate estimates. To do this, my team and I developed patient models using a depth camera and calculated PSD estimates using a Python-based PSD calculator. We successfully created a prototype method for high-accuracy modeling and shared our research findings at two different conventions."

psd_gallery:
  - url: /assets/images/psd_model.jpg
    image_path: /assets/images/psd_model.jpg
    alt: "Calculating PSD cases on 3D models."
  - url: /assets/images/presenting.JPG
    image_path: /assets/images/presenting.JPG
    alt: "Presenting at the HSI summit, October 2024."

# Tower Defense Game
tower_defense_game:
  - image_path: /assets/images/game.png
    alt: "Unity Tower Defense"
    title: "Unity Tower Defense Game"
    excerpt: "I created a strategic tower defense game on the Unity Engine for an Honors Project. Over the course of the semester, I created game assets, worked on game logic, custom soundFX, music, enemy pathfinding, and upgradable defensive structures. The outcome is a fully functional, small tower defense game. Feel free to try the game out—download below, extract the ZIP, and run the .exe file to play!"
    url: "/assets/downloads/Tower-Defense-1.2.zip"
    btn_label: "Download Game (.zip)"
    btn_class: "btn--info"

tower_defense_gallery:
  - url: /assets/images/game.png
    image_path: /assets/images/game.png
    alt: "Gameplay Screenshot"
  - url: /assets/images/game.png
    image_path: /assets/images/game.png
    alt: "Second Gameplay Screenshot"
---

Welcome to my project showcase. Below are some of the projects I have had the pleasure of working on.

{% include feature_row id="psd_project" %}
{% include gallery id="psd_gallery" %}

---

{% include feature_row id="tower_defense_game" %}
{% include gallery id="tower_defense_gallery" %}
