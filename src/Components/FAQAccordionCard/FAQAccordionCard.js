import React from "react";

import FAQCard from './FAQCard/FAQCard'
import classes from './FAQAccordionCard.module.css'

const FAQAccordionCard = () => {
    return(
        <div className= {classes.FAQAccordionCard} >
            <FAQCard />
            <div className= {classes.attribution}>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
                Coded by <a href="https://www.linkedin.com/in/kowsar-mojtabaee">Kowsar7</a>.
            </div>
        </div>
    )
}

export default FAQAccordionCard