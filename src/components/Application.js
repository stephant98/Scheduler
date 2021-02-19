import React, { useState, useEffect } from "react";
import axios from 'axios';

import "components/Application.scss";

import DayList from "components/DayList";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay} from "helpers/selectors"



export default function Application(props) {


  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })
  
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.put(`http://localhost:8001/api/appointments/${id}`, {interview}).then(response => setState({...state, appointments}))
  }

  let dailyAppointments = [];

  const setDay = day => setState({ ...state, day });
  // const setDays = days => setState(prev => ({...prev, days}))

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/interviewers")
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    })
  }, [])
  dailyAppointments = getAppointmentsForDay(state, state.day)
  console.log(state)

  const dailyInterviewers = getInterviewersForDay(state, state.day)

  return (
    <main className="layout">
      <section className="sidebar">
      <img
       className="sidebar--centered"
       src="images/logo.png"
       alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
        <DayList days={state.days} day={state.day} setDay={setDay}/>
      </nav>
      <img
      className="sidebar__lhl sidebar--centered"
      src="images/lhl.png"
      alt="Lighthouse Labs"
      />

      </section>
      <section className="schedule">
        {dailyAppointments.map((appointment) => {
          const interview = getInterview(state, appointment.interview)
          return (<Appointment key={appointment.id} id={appointment.id} time={appointment.time} interview={interview} interviewers={dailyInterviewers} bookInterview={bookInterview} />)
        })}
        <Appointment key="last" time="5pm"/>
      </section>
    </main>
  );
}
