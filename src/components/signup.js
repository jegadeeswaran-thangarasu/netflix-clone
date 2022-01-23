import React, { useRef } from 'react';
import '../css/signup.css';
import { auth } from '../firebase';

function Signup() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log('authUser', authUser);
        })
        .catch((error) => {
            alert(error.message);
        });
    }

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log('authUser signin', authUser);
        })
        .catch((error) => {
            alert(error.message);
        });
    }

    return (
        <div className='signup-screen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder='Email' type='email' />
                <input ref={passwordRef} placeholder='Password' type='password' />
                <button onClick={signIn} type='submit'>Sign In</button>
                <h4>
                    <span className='signup-screen-grey'>New to Netflix?</span> 
                    <span className='signup-screen-link' onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    );
}

export default Signup;
