import React from 'react'
import 'components/Appointment/styles.scss'

import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';
import useVisualMode from 'hooks/useVisualMode'
import Form from './Form';
import Status from './Status';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE"
const SAVING = "SAVING";
const DELETE = "DELETE";


export default function Appointment(props){
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY)

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props.bookInterview(props.id, interview).then(response => transition(SHOW))
  }  

  function cancel() {
    transition(DELETE)
    props.deleteInterview(props.id).then(() => transition(EMPTY))
  }

  return (
  <article className="appointment">
    <Header time={props.time}/>
    {mode === CREATE && <Form interviewers={props.interviewers}  onSave={save} onCancel={back} />}
    {mode === SAVING && <Status message="Saving..."/>}
    {mode === DELETE && <Status message="Deleting..."/>}
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)}/>}
    {mode === SHOW && <Show student={props.interview.student} interviewer={props.interview.interviewer} onDelete={cancel}/>}
  </article>)
}