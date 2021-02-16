import React from "react";
import classnames from 'classnames';
import 'components/DayListItem.scss'

export default function DayListItem(props) {
  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  })

  function formatSpots (props, spotsRemaining){
    if(spotsRemaining === 1) {
      return `${props} spot remaining`;
    } else if (spotsRemaining === 0){
      return "no spots remaining"
    }
    return `${props} spots remaining`;

  }

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props.spots, props.spots)}</h3>
    </li>
  );
}