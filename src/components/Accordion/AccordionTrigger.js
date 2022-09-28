

import React,{useContext} from 'react'
import {useAccordionButton,AccordionContext} from 'react-bootstrap'


export default function AccordionTrigger({className, children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
      <button
        type="button"
        className={`${className} ${isCurrentEventKey ? 'active' : ''}`}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }


