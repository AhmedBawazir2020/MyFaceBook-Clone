import { Button } from '@material-ui/core';
import React from 'react'
import './Login.css';
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';



function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //sigin ..
        auth.signInWithPopup(provider)
            .then((result) => {

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })

                //console.log(result.user);
            })
            .catch((error) => alert(error.message));

    };

    return (

        <div className="login">
            <div className="lofin__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" />

                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" />
            </div>
            <Button type="submit"
                onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
