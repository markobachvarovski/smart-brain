import React from 'react';
import 'tachyons';
import './Signin.css';

const Signin = ({onRouteChange}) => {
    return(
        <article className="br3 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-white w-100"
                                   type="email" name="email-address" id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-white w-100"
                                   type="password" name="password" id="password"/>
                        </div>
                    </fieldset>
                    <div className="" style={{display:"flex", flexDirection: 'column', justifyContent:"center"}}>
                        <input onClick={() => onRouteChange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib"
                               type="submit" value="Sign in"/>
                        <input onClick={() => onRouteChange('register')} className="b mh3 mv2 ph0 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                               type="submit" value="Register"/>
                    </div>
                </div>
            </main>
        </article>
    )
}

export default Signin;