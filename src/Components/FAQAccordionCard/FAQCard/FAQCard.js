import React, { useState } from "react";

import classes from './FAQCard.module.css'
import patternDesktop from '../../../assets/images/bg-pattern-desktop.svg'
import womanDesktop from '../../../assets/images/illustration-woman-online-desktop.svg'
import patternMobile from '../../../assets/images/bg-pattern-mobile.svg'
import womanMobile from '../../../assets/images/illustration-woman-online-mobile.svg'
import illustrationBox from '../../../assets/images/illustration-box-desktop.svg'
import iconArrowDown from '../../../assets/images/icon-arrow-down.svg'

function FAQCard () {
    const [ question1, setQuestion1 ] = useState(false)
    const [ question2, setQuestion2 ] = useState(false)
    const [ question3, setQuestion3 ] = useState(false)
    const [ question4, setQuestion4 ] = useState(false)
    const [ question5, setQuestion5 ] = useState(false)

    const setActive1 = () => {
        setQuestion1(prev => !prev);
        setQuestion2(false);
        setQuestion3(false);
        setQuestion4(false);
        setQuestion5(false);
    }

    const setActive2 = () => {
        setQuestion2(prev => !prev);
        setQuestion1(false);
        setQuestion3(false);
        setQuestion4(false);
        setQuestion5(false);
    }

    const setActive3 = () => {
        setQuestion3(prev => !prev);
        setQuestion2(false);
        setQuestion1(false);
        setQuestion4(false);
        setQuestion5(false);
    }

    const setActive4 = () => {
        setQuestion4(prev => !prev);
        setQuestion2(false);
        setQuestion3(false);
        setQuestion1(false);
        setQuestion5(false);
    }

    const setActive5 = () => {
        setQuestion5(prev => !prev);
        setQuestion2(false);
        setQuestion3(false);
        setQuestion4(false);
        setQuestion1(false);
    }

    return(
        <div className= {classes.FAQCard}>
            <div className= {classes.Card}>
                <div className= {classes.Images}>
                    <img src={patternDesktop} alt='patternDesktop' className={classes.PatternDesktop} />
                    <img src={womanDesktop} alt='womanDesktop' className={classes.WomanDesktop}/>
                    <img src={patternMobile} alt='patternMobile' className={classes.PatternMobile} />
                    <img src={womanMobile} alt='womanMobile' className={classes.WomanMobile}/>
                </div>
                <img src={illustrationBox} alt='womanDesktop' className={classes.IllustrationBox}/>

                <div className= {classes.Content} >
                    <h1 className={classes.FAQ}>FAQ</h1>
                    <div className={classes.QuestionBox}>
                        <div className={question1? classes.ActiveQuestion : classes.Question} onClick={setActive1}>
                            <p>How many team members can I invite?</p>
                            <img src={iconArrowDown} alt='iconArrowDown' />
                        </div>
                        <p className={question1? classes.Answer : classes.hiddenAnswer}>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>
                    </div>
                    <hr />
                    <div className={classes.QuestionBox}>
                        <div className={question2? classes.ActiveQuestion : classes.Question} onClick={setActive2}>
                            <p>What is the maximum file upload size?</p>
                            <img src={iconArrowDown} alt='iconArrowDown' />
                        </div>
                        <p className={question2? classes.Answer : classes.hiddenAnswer}>No more than 2GB. All files in your account must fit your allotted storage space.</p>
                    </div>
                    <hr />
                    <div className={classes.QuestionBox}>
                        <div className={question3? classes.ActiveQuestion : classes.Question} onClick={setActive3}>
                            <p>How do I reset my password?</p>
                            <img src={iconArrowDown} alt='iconArrowDown' />
                        </div>
                        <p className={question3? classes.Answer : classes.hiddenAnswer}>Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.</p>
                    </div>
                    <hr />
                    <div className={classes.QuestionBox}>
                        <div className={question4? classes.ActiveQuestion : classes.Question} onClick={setActive4}>
                            <p>Can I cancel my subscription?</p>
                            <img src={iconArrowDown} alt='iconArrowDown' />
                        </div>
                        <p className={question4? classes.Answer : classes.hiddenAnswer}>Yes! Send us a message and we’ll process your request no questions asked.</p>
                    </div>
                    <hr />
                    <div className={classes.QuestionBox}>
                        <div className={question5? classes.ActiveQuestion : classes.Question} onClick={setActive5}>
                            <p>Do you provide additional support?</p>
                            <img src={iconArrowDown} alt='iconArrowDown' />
                        </div>
                        <p className={question5? classes.Answer : classes.hiddenAnswer}>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default FAQCard