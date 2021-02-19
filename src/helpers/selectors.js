export function getAppointmentsForDay(state, day) {
  let arrayOfAppointments = [];

  for(let dayItem of state.days) {
    if(dayItem.name === day){
      for(let item of dayItem.appointments) {
        arrayOfAppointments.push(state.appointments[item])
      }
    }
  }
  return arrayOfAppointments;  
}


export function getInterview(state, interview){
  if(!interview){
    return null
  }

  let interviewObject = {student: interview.student}
  interviewObject.interviewer = state.interviewers[interview.interviewer]

  return interviewObject;  
}

export function getInterviewersForDay(state, day) {
  let arrayOfInterviewers = [];

  for(let dayItem of state.days) {
    if(dayItem.name === day){
      for(let item of dayItem.interviewers) {
        arrayOfInterviewers.push(state.interviewers[item])
      }
    }
  }
  return arrayOfInterviewers;  
}
