# Interview Scheduler

A react based app for students to create appointments/interviews with Lighthouse Labs Mentors.

## Features

- Users can create an interview with selected interviewer
- Users can edit or delete interviews
- Users can see the availability for each day of the week
- Interviews can be booked between Monday and Friday.
- A user can switch between weekdays.
- A user can book an interview in an empty appointment slot.
- Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
- A user can cancel an existing interview.
- A user can edit the details of an existing interview.
- The list of days informs the user how many slots are available for each day.
- The expected day updates the number of spots available when an interview is booked or canceled.
- A user is presented with a confirmation when they attempt to cancel an interview.
- A user is shown an error if an interview cannot be saved or deleted.
- A user is shown a status indicator while asynchronous operations are in progress.
- When the user presses the close button of the error they are returned to the Form or - Show view (skipping Status and Confirm).
- The application makes API requests to load and persist data. We do not lose data after a browser refresh.

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

!["Form and Existing interviews"](https://github.com/stephant98/Scheduler/blob/master/docs/Creating-Interview.png?raw=true)

!["Confirm deletion of interview"](https://github.com/stephant98/Scheduler/blob/master/docs/Confirm-deletion.png?raw=true)

!["Interview deletion status"](https://github.com/stephant98/Scheduler/blob/master/docs/Interview-deletion.png?raw=true)

!["Responsive view"](https://github.com/stephant98/Scheduler/blob/master/docs/Responsive-view.png?raw=true)
