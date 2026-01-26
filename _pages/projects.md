---
layout: single
title: "Technical Projects"
permalink: /projects/
author_profile: true

# Creating Patient-Specefic Models for Fluroscopy PSD Estimation
psd_project:
  - image_path: /assets/images/mayo_model.jpg
    alt: "3D model PSD estimate"
    title: "Mayo Clinic 3D Estimation & 3D Modeling"
    excerpt: "The goal of the project was to improve the accuracy of Peak Skin Dose (PSD) estimates to enchance fluroscopy patient safety. To do this me and my team developed 3D patient models using a depth camera and calculated PSD estimates of the models using a python based PSD calculator. The result of this project was that we succesfully created a prototype method of creating patient accurate 3D models and shared our research findings in 2 different research conventions.

psd_gallery:
    - url: /assets/images/estimates.jpg
      image_path:/assets/images/estimates.jpg
      alt: "Calculating PSD cases on 3D models." 
    - url:/assets/images/presenting.jpg
      image_path: /assets/images/presenting.jpg
      alt: "Presenting at the HSI summit, October 2024."

# Tower Defense Game
  tower_defense_game:
  -image_path: /assets/images/game.png
    alt: "Unity Tower Defense"
    title: "Unity Tower Defense Game"
    excerpt: "I wanted to create a game on the Unity Engine for an Honors  Project. The game I had set in mind was a strategic tower defense game. Over the course of the semester i created simple game assets, worked on game logic, custom soundFX, music, enemy pathfinding, and upgradable defensive structures. The outcome is a simple yet fully working fun small tower defense game. Feel free to try the game out—download below, extract the ZIP, and run the `.exe` file to play!."
    url: "assets/downloads/Tower-Defense-1.2.zip"
    btn_label: "Download Game (.zip)"
    btn_class: "btn--info"

tower_defense_gallery:
  - url: /assets/images/game_ss1.png
    image_path: /assets/images/game_ss1.png
    alt: "Gameplay Screenshot"
  - url: /assets/images/game_ss2.png
    image_path: /assets/images/game_ss2.png
    alt: "Upgrade Menu"
---

Welcome to my project showcase. Below are some of the projects I have had the pleasure of working on.

{% include feature_row id="psd_project" %}
{% include gallery id="psd_gallery" %}

***

{% include feature_row id="tower_defense_game" %}
{% include gallery id="tower_defense_gallery" %}



