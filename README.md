<div id="top"></div>

<h1 align="center">SpoTower Insurance Assignment Server Node.js Javascript</h1>

<div align="center">
  <p align="center">
    This server-side application is part of the SpoTower insurance assingment built with Node.js and Javascript. 
  </p>
    <a href="https://www.postman.com/almog-gutin/workspace/spotower-insurance-assignment">View Postman Files</a>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-application">About The Application</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#how-to-install">How To Install</a></li>
    <li><a href="#available-scripts">Available Scripts</a></li>
    <li><a href="#postman">Postman</a></li>
  </ol>
</details>

<!-- ABOUT THE APPLICATION -->

## About The Application

This server-side application is is part of the DXC Book Store assignment.

It is built with Node.js and Express Framework with Javascript. In addition, the application's database is MongoDB with the use of an ODM like Mongoose.

In the applicaiton we can add quotes to the database, and search quotes based on a zip code.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

-   [Node.js](https://nodejs.org/en/)
-   [Express](https://expressjs.com/)
-   [MongoDB](https://www.mongodb.com/)
-   [Mongoose (ODM)](https://mongoosejs.com/)
-   [Validator.js](https://www.npmjs.com/package/validator)
-   [Cors](https://www.npmjs.com/package/cors)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- INSTALLATION INSTRUCTIONS -->

## How To Install

**Git clone**

```
git clone https://github.com/almog-gutin/spotower-insurance-assignment-server-node-javascript.git
```

**Instructions**

-   After cloning the the repository run `npm i` in order to install all the dependencies.
-   Fill in all the values of the env variables in `config/dev.env` file so that the application will run properly during development mode.

<p align="right">(<a href="#top">back to top</a>)</p>

<!--  AVAILABLE SCRIPTS -->

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the production mode.\
However this script is only ment to be run when deploying the application. The application is built, where you need to setup the env variables on the machine that your will be hosting it on or in a webhosting service, unlike in development mode.

### `npm run dev`

Runs the app in the development mode.\
Open localhost on the port you decided on in the env variables to view it in the browser.

The page will reload if you make edits with nodemon.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- POSTMAN -->

## Postman

Above, there is a link that will take you to the postman files in my postman profile where you can test the api functionality in the browser.

However, if you would like to run the files locally on your machine in the postman desktop application, included in the repository, in the `postman` directory all the files so you can import them. In addition, you will have to configure env variables in postman so that you will be able to test properly everything.

<div align="center">
  <img src="./assets/postman-global-env-variables.png" alt="Postman global env variables."/>
</div>

<p align="right">(<a href="#top">back to top</a>)</p>
