import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      console.log("first requewst", all[0])
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    })
  }, [])

  function updateDayspots(state) {
    const updatedDays = state.days.map(day => {
      let numSpots = 0;
      day.appointments.forEach((id) => {
        if(!state.appointments[id].interview) {
          numSpots++
        }
      })
      day.spots = numSpots
      return day;
    })
    return updatedDays;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const days = updateDayspots({...state, appointments})
    return axios.put(`/api/appointments/${id}`, {interview}).then(response => setState({...state, appointments, days}))
  }


  function deleteInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const days = updateDayspots({...state, appointments})
    return axios.delete(`/api/appointments/${id}`).then(response => setState({...state, appointments, days}))
  }

  const setDay = day => setState({ ...state, day });


  return { state,  bookInterview, deleteInterview, setDay }
}