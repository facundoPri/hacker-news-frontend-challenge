<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/facundoPri/hacker-news-frontend-challenge">
    <img src="public/hacker-news.svg" alt="Logo" width="208" height="28">
  </a>

  <h3 align="center">Hacker news fontend challenge</h3>

  <p align="center">
   Frontend for hacker news 
    <br />
    <a href="https://hacker-news-frontend-challenge.netlify.app/">View Demo</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Small responsive web application, made with Nextjs and using the [HackersNews public API](https://hn.algolia.com/api)

The web application displays the latest posts on the HackerNews api, allowing the user to filter by technologies and save their favorite posts. It also uses infinite scroll as pagination and SWR to cache the requests made, for better user experience and less loading times.

The project also uses [Storybook](https://storybook.js.org/) for component documentation and [Jest](https://jestjs.io/) for testing.




### Built With

* [Nextjs](https://nextjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* CSS
* [Storybook](https://storybook.js.org/)
* [Jest](https://jestjs.io/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Have node package manager of choice

* npm
  ```sh
  npm install npm@latest -g
  ```

  or

* yarn
  ```sh
  npm install --global yarn
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/facundoPri/hacker-news-frontend-challenge
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

   or

   ```sh
   yarn
   ```
2. Run project on localhost
   ```sh
   npm run dev
   ```

   or

   ```sh
   yarn dev
   ```

2. Run project storybook
   ```sh
   npm run storybook
   ```

   or

   ```sh
   yarn storybook
   ```


<!-- CONTACT -->
## Contact

Facundo Prieto - facundo.prieto312@gmail.com

Project Link: [Hacker news fontend challenge](https://github.com/facundoPri/hacker-news-frontend-challenge)