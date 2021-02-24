# Interview Scheduler

A react based app for students to create appointments/interviews with Lighthouse Labs Mentors.

## Features

- Users can create an interview with selected interviewer
- Users can edit or delete interviews
- Users can see the availability for each day of the week

## Getting Started

## Dependencies

- Axios
- Classnames
- Storybook
- Cypress
- React

## Setup

Install dependencies with `npm install`.

## Setting API server

An api server must be set up to retrieve data for scheduler from `localhost:8001`.

Fork and clone [scheduler_api](https://github.com/lighthouse-labs/scheduler-api) outside of scheduler app folder.

To allow requests from one server to another Add "proxy": "http://localhost:8001" to the package.json file in our main scheduler.

## Running Webpack Development Server

```sh
npm start
```

This project will run on `localhost:8000`

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Screenshots
