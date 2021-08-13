import React from 'react';
import './index.css';
import Typography from '@material-ui/core/Typography';

const Contact = () => {
    return(
        <div className="contact page">
            <Typography variant="h4" component="h4" gutterBottom className="title contact__title">
            Hello from the Austrian online team 😀
            </Typography>
           <p className="contact__paragraph">Hi, my name is Hadar and I'm the front end web developer in the Austrian online team. </p>
           <p className="contact__paragraph">If you have any questions, requirements, tips, new ideas, suggestions for improvement or if you need technical support, please contact me, I will do my best to help:</p>
            <p className="contact__email"><a href="mailto:hadar.acobas@decathlon.com">hadar.acobas@decathlon.com</a></p>
        </div>
    );
}


export default Contact;