import React from 'react';
import './index.css';
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const NotDecaEmail = () => {
    const {logout} = useAuth0();
    return (
        <div className="notDecaEmail">
            <div>
            <lord-icon
                  src="https://cdn.lordicon.com/tdrtiskw.json"
                  trigger="loop"
                  colors="primary:#0082c3,secondary:#ffea28"
                  style={{width: '250px', height: '250px'}}
                  >
              </lord-icon>
            </div>
            <Typography variant="h4" component="h4" gutterBottom className="title">
            Decathlon email address is required!
            </Typography>
            
            <div className="notDecaEmail__btn-container primary-button-container">
            <Button onClick={() => logout()} variant="contained">LOGOUT</Button>
            </div>
            
        </div>
    )
}
 
export default NotDecaEmail;