# Portfolio / Personal Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/3c332460-92fb-4831-b621-87b5bd677ddf/deploy-status)](https://app.netlify.com/sites/prutkowski-redesign/deploys)

My old personal website, which I made back in 2019, was well overdue for a redesign. I therefore finally decided to sit down and do it, and that is exactly how this website was created. 

It is written entirely from scratch using React and Gatsby. It is mostly a single page web app, with a few exceptions:

* __Projects__: This page holds a list of all my public GitHub repositories, automatically updated from the GitHub API.
* __Blog__: Holds a list of all my blog posts, written in Markdown.
* __Gallery__: Displays a chosen selection of photographs I've recently taken. It retrieves the pictures through a remote Heroku dyno (via my back end), from my Microsoft Azure storage.

The API that I've written which the gallery uses can be found [here](https://github.com/PiotrRut/prutkowski.tech-backend).

## :open_file_folder: Frameworks and libraries used

* ReactJS
* GatsbyJS
* Material UI
* TailwindCSS
* Wow.js (for animations)

## :recycle: Old website

The old codebase can be found [here](https://github.com/PiotrRut/OLD-prutkowski.tech), although that repository is now read only.