# Portfolio / Personal Website

My old personal website, which I made back in 2019, was well overdue for a redesign. This website is a result of an effort to re-design it entirely, using new tools and better code practices.

It is written entirely from scratch using React and Next. It is mostly a single page web app, with a few exceptions:

- **Projects**: This page holds a list of all my public GitHub repositories, automatically updated from the GitHub API and retrieved from a MondoDB collection via my back end.
- **Gallery**: Displays a chosen selection of photographs I've recently taken. It retrieves the pictures through a remote Heroku dyno (via my back end), from my Microsoft Azure storage.

My REST API which the gallery uses can be found [here](https://github.com/PiotrRut/prutkowski.dev-backend).

## :open_file_folder: Technical stack

![React](https://img.shields.io/badge/-React-black?style=flat-square&logo=react) ![NextJS](https://img.shields.io/badge/-NextJS-black?style=flat-square&logo=next.js) ![TailwindCSS](https://img.shields.io/badge/-Tailwind_CSS-black?style=flat-square&logo=tailwind-css) ![Styled Components](https://img.shields.io/badge/-Styled_Components-black?style=flat-square&logo=styled-components) ![Material UI](https://img.shields.io/badge/-Material_UI-black?style=flat-square&logo=material-ui)

## :recycle: Old website

The old codebase can be found [here](https://github.com/PiotrRut/OLD-prutkowski.tech), although that repository is now read only.
