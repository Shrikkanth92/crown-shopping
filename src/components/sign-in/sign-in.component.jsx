import React, { useState } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';


import './sign-in.styles.scss';

const SignIn = () => {

    const [userCredentials, setUserCredentials] = useState({ email : '', password: ''});
    const {email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setUserCredentials({
                email: '',
                password: ''
            });
        } catch(error) {
            console.log(error);
        }
       
    }

    const handleChange = event => {
        const {name, value} = event.target;

        setUserCredentials({ ...userCredentials,
            [name] : value,
        })
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput  name='email' type='email' value={email} label='Email' handleChange={handleChange} required></FormInput>
                <FormInput  name='password' type='password' value={password} label='Password' handleChange={handleChange} required></FormInput>

                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                </div>
            </form>
        </div>
    )
    
}

export default SignIn;