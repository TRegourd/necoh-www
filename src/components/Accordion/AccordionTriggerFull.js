

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
      <div
        className={`${className} ${isCurrentEventKey ? 'active' : ''}`}
        onClick={decoratedOnClick}
        onKeyDown={decoratedOnClick}
        role="button"
        tabIndex={isCurrentEventKey ? 1 : 0}
      >
        {children}
      </div>
    );
  }


