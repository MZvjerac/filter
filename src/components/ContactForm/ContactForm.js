import emailjs from 'emailjs-com';
import React from 'react';
import classes from './ContactForm.module.css';
import Background from '../../assets/images/daes-bg.png'

const ContactForm = ()=>{
    
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_qr7kyfe', 'template_h3hyq9z', e.target, 'user_GOKZ7Fi1xcJypoaUFn5te')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return(
        <div className={classes.blueRibon100} style={{backgroundImage:"url("+Background+")"}}>
            <div className={classes.blueRibon}>
            <div className={classes.mainTitle}>
                <h3>Send us a message</h3>
            </div>
            <div className={classes.ico}></div>
                <div className={classes.query}>
                    <div className={classes.contactForm}>
                        <form onSubmit={sendEmail}>
                            <div className={classes.column1}>
                                <div className={classes.name}>
                                    <p>Name</p>
                                    <input type="text" placeholder="Your name" required className={classes.inputName} name="name"/>                       
                                </div>
                                <div className={classes.email}>
                                    <p>E-mail*</p>
                                    <input type="text" placeholder="Your E-mail address" required className={classes.inputEmail} name="email"/>
                                </div>
                                <div className={classes.subject}>
                                    <p>Subject</p>
                                    <input type="text" placeholder="Subject" required className={classes.inputSubject} name="subject"/>
                                </div>
                            </div>
                            <div className={classes.column2}>
                                <div className={classes.message}>
                                    <textarea cols="40" rows="8" required palceholder="Your Message" className={classes.inputMessage} name="message">
                                    </textarea>
                                </div>
                                <div className={classes.submit}>
                                    <input type="submit" className={classes.submitInput} value="Send"/>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
