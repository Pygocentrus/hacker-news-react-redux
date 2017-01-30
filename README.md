![HN clone](images/header.png)

[![deploy](https://img.shields.io/badge/status-deployed-green.svg)](https://hacker-news-react-redux.surge.sh/) ![licence](https://img.shields.io/badge/Licence-MIT-blue.svg)

# Hacker news clone

Tiny project to play around with [Hacker News](http://news.ycombinator.com) API using React/Redux. Demo [Here](https://hacker-news-react-redux.surge.sh/).

## Getting started

To run the project, make sure you have [Yarn](https://yarnpkg.com) installed. Then, simply run the following commands:

```bash
$ yarn # installs dependencies
$ npm run serve # starts the webpack dev server

$ npm run build # if you need to build the app statically within `dist` folder
$ npm run try # Try the built static files
```

## Deploy it using Surge

If you wanna host it for free somewhere, use [Surge.sh](http://surge.sh/) following the next steps:

```bash
$ sudo npm i -g surge # install Surge
$ npm run deploy # then target the `dist` folder and choose your DNS!
```

## Overview

### Filters

Quick filters to sort by Top, Latest, Show and Ask stories, as well as job offers

![HN clone](images/hn_show.gif)

### Search using Algolia real-time search API

Search among HN posts

![HN clone](images/hn_search.gif)
