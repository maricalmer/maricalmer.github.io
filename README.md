### [maricalmer.com](https://maricalmer.com), a portfolio website to showcase web development projects

## Static website
Website developed with HTML, CSS, Javascript and supported by the Stimulus framework. Assets are bundled with Webpack. Application is run on Github Pages.

![HTML](https://img.shields.io/badge/HTML-5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-3-264DE4?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript&logoColor=white)
![Stimulus](https://img.shields.io/badge/stimulus-3-77E8B9?style=for-the-badge&logo=stimulus&logoColor=white)

## JS Packages (non exhaustive)

[![gsap](https://img.shields.io/badge/gsap-3.11.4-yellow.svg)](https://yarnpkg.com/package/gsap)
[![animejs](https://img.shields.io/badge/animejs-3.2.1-yellow.svg)](https://yarnpkg.com/package/animejs)


## Run Locally

Clone the project

```bash
  git clone git@github.com:maricalmer/maricalmer.github.io.git my-project
```

Go to the project directory and remove git logs

```bash
  cd my-project
  rm -rf .git
```

Install dependencies

```bash
  bundle install
  yarn install
```

Make sure you have ./node_modules/.bin in your $PATH:

```bash
  echo $PATH
  # You should see `./node_modules/.bin` in the list
```

If it's not the case, add it:

```bash
  cd ~/code/dotfiles/<your_github_nickname>
  echo 'export PATH="./bin:./node_modules/.bin:${PATH}"' >> zshrc
  cd ~/code/<your_github_nickname>/my-project
  source ~/.zshrc
```

Start the server

```bash
  webpack-dev-server
```
