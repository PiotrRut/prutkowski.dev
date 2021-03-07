# Portfolio / Personal Website

My old personal website, which I made back in 2019, was well overdue for a redesign. This website is a result of an effort to re-design it entirely, using new tools and better code practices.

It is written entirely from scratch using React and Next. It is mostly a single page web app, with a few exceptions:

- **Projects**: This page holds a list of all my public GitHub repositories, automatically updated from the GitHub API.
- **Blog**: Holds a list of all my blog posts, written in Markdown. (coming soon 🎉)
- **Gallery**: Displays a chosen selection of photographs I've recently taken. It retrieves the pictures through a remote Heroku dyno (via my back end), from my Microsoft Azure storage.

My REST API which the gallery uses can be found [here](https://github.com/PiotrRut/prutkowski.dev-backend).

## :open_file_folder: Technical stack

- ReactJS
- NextJS
- Material UI
- TailwindCSS
- Wow.js (for animations)

## :recycle: Old website

The old codebase can be found [here](https://github.com/PiotrRut/OLD-prutkowski.tech), although that repository is now read only.
