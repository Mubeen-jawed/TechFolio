# TechFolio ⚡️

## Modern and Professional Open-Source Portfolio Website for Tech Professinals!


<p align="center">
  <kbd>
    <img src="https://github.com/Mubeen-jawed/techfolio/assets/110166209/8321e254-1de4-4a76-9dbf-046f5acdea88"></img>
  </kbd>
</p>


Just change `src/App.jsx` to get your personal portfolio. Feel free to use it as-is or personalize it as much as you want.

If you'd like to **contribute** and make this much better for other users, have a look at [Issues](https://github.com/Mubeen-jawed/techfolio/issues).

Created something awesome for your fork of the portfolio and want to share it? Feel free to open a [pull request](https://github.com/Mubeen-jawed/techfolio/pulls).

## Table of Contents
- [Sections](#sections)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Change and Customize](#change-and-customize-every-section-according-to-your-need)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Illustrations](#illustrations)
- [For the Future](#for-the-future)
- [Contributors](#project-maintainers)

## Portfolio Sections
✔️ Summary and About me\
✔️ Features\
✔️ Portfolio\
✔️ Resume\
✔️ Testimonial\
✔️ Pricing\
✔️ Blogs\
✔️ Footer

To view a live example, **[click here](https://techfolio-template.vercel.app/)**.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```


## How To Use 

From your command line, clone and run techfolio:

```bash
# Clone this repository
git clone https://github.com/Mubeen-jawed/Portfolio-Website.git

# Go into the repository
cd techfolio

# Install dependencies
npm install

# Start a local dev server
npm start
```

```


## Change and customize every section according to your need.

#### Personalize page content in `/src/portfolio.js` & modify it as per your need. You will also need to modify `index.html` to change the title and metadata to provide accurate SEO for your personal portfolio.

```javascript
/* Change this file to get your Personal Porfolio */


```

## Deployment
When you are done with the setup, you should host your website online.
We highly recommend to read through the [Deploying on GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages) docs for React.

#### Configuring GitHub Actions (Recommended)
First you should enable, GitHub Actions for the repository you use.

The Profile and the Repository information from GitHub is only created at the time of deploy and the site needs to be redeployed if those information needs to be updated. So, a configurable [CRON Job](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#scheduled-events) is setup which deploys your site every week, so that once you update your profile on GitHub it is shown on your portfolio. You can also trigger it manually using `workflow_dispatch` event, see [this guide](https://github.blog/changelog/2020-07-06-github-actions-manual-triggers-with-workflow_dispatch) on how to do that.

- When you are done with the configuration, we highly recommend to read through the [GitHub Actions Configuring a workflow](https://docs.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow) docs.

#### Deploying to GitHub Pages

This section guides you to deploy your portfolio on GitHub pages.

- Navigate to `package.json` and enter your domain name instead of `https://developerfolio.js.org/` in `homepage` variable. For example, if you want your site to be `https://<your-username>.github.io/developerFolio`, add the same to the homepage section of `package.json`.

- In short you can also add `/devloperFolio` to `package.json` as both are exactly same. Upon doing so, you tell `create-react-app` to add the path assets accordingly.

- Optionally, configure the domain. You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

- Follow through the guide to setup GitHub pages from the official CRA docs [here](https://create-react-app.dev/docs/deployment/#github-pages).

#### Deploying to Netlify

You could also host directly with Netlify by linking your own repository.

[![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/saadpasta/developerFolio)

For more information, read [hosting on Netlify](https://create-react-app.dev/docs/deployment/#netlify).


## Technologies Used 

- [React](https://reactjs.org/)
- [TailwindCss](https://tailwindcss.com/)
- [react-icons](https://react-icons.github.io/react-icons/)

## Illustrations
- [UnDraw](https://undraw.co/illustrations)


## For the Future
If you can help us with these. Please don't hesitate to open a [pull request](https://github.com/Mubeen-jawed/Portfolio-Website/).

- Connect with LinkedIn to get Summary, Skills, Education and Experience

- Move to Gatsby

- Add More Sections

## Project Maintainers 

<table>
  <tr>
    <td align="center"><a href="https://github.com/Mubeen-jawed"><img src="" width="100px;" alt=""/><br /><sub><b>Mubeen Jawed</b></sub></a></td>
    
  </tr>
</table>



<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
