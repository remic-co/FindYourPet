// @vendors  
import React from 'react';

// @styling
import './styles.css';

const Login = () => (
    <div className="login">
        <div className="container">

                <br></br>
 
                   <div className="container-2">


              
               <div className="cont-email">
               <input className="e-mail" type="text" placeholder= "     E-mail" ></input>
               </div>
               <br></br>
              
              
              <div className="cont-password"> 
              <input className="password" type="password" placeholder= "    Password"></input>
              </div>
                
               <hr className="hr-one"></hr> 

              <input className="log-in" type="submit" value="Log In">
              </input>

              
                 

                 </div>
        </div>
    </div>

  
);

export default Login;