import React from 'react'
import 'components/Appointment/styles.scss'

import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';
import useVisualMode from 'hooks/useVisualMode'
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm'
import Error from './Error'

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE"
const SAVING = "SAVING";
const DELETE = "DELETE";
const CONFIRM = "CONFIRM"
const EDIT = "EDIT";
const ERROR_DELETE = "ERROR_DELETE";
const ERROR_SAVE = "ERROR_SAVE"


export default function Appointment(props){
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY)

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props.bookInterview(props.id, interview)
    .then(() => transition(SHOW))
    .catch(() => transition(ERROR_SAVE, true))
  }  

  function cancel() {
    transition(DELETE, true)
    props.deleteInterview(props.id)
    .then(() => transition(EMPTY))
    .catch(() => transition(ERROR_DELETE, true))
  }
  console.log("props here", props.interview)

  return (
  <article className="appointment" data-testid="appointment">
    <Header time={props.time}/>
    {mode === CREATE && <Form interviewers={props.interviewers}  onSave={save} onCancel={back} />}
    {mode === EDIT && <Form name={props.interview.student} interviewers={props.interviewers} interviewer={props.interview.interviewer.id} onSave={save} onCancel={back} />}
    {mode === SAVING && <Status message="Saving..."/>}
    {mode === CONFIRM && <Confirm message="Are you sure you want to delete?" onConfirm={cancel} onCancel={() => transition(SHOW)}/>}
    {mode === DELETE && <Status message="Deleting..."/>}
    {mode === ERROR_DELETE && <Error message="Could not delete appointment." onClose={() => transition(SHOW)}/>}
    {mode === ERROR_SAVE && <Error message="Could not save appointment." onClose={() => transition(EMPTY)}/>}
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)}/>}
    {mode === SHOW && <Show student={props.interview.student} interviewer={props.interview.interviewer} onDelete={() => transition(CONFIRM)} onEdit={() => transition(EDIT)}/>}
  </article>)
}