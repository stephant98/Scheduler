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