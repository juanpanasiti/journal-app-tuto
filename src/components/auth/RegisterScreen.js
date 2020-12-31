import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const { msgError } = useSelector((state) => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isValidForm()) {
            dispatch(startRegisterWithEmailPasswordName(email,password,name))
        }
    };

    const isValidForm = () => {
        if (validator.isEmpty(name)) {
            dispatch(setError('Name is required'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'));
            return false;
        } else if (password !== password2 || password.length < 6) {
            dispatch(setError('Password is not valid'));
            return false;
        }

        dispatch(removeError());
        return true;
    };
    return (
        <>
            <h3 className='auth__title'>Register</h3>

            <form onSubmit={handleRegister}>
                {msgError && <div className='auth__alert-error'>{msgError}</div>}

                <input type='text' placeholder='Name' name='name' value={name} className='auth__input' autoComplete='off' onChange={handleInputChange} />
                <input type='text' placeholder='E-mail' name='email' value={email} className='auth__input' autoComplete='off' onChange={handleInputChange} />
                <input type='password' placeholder='Password' name='password' value={password} className='auth__input' onChange={handleInputChange} />
                <input type='password' placeholder='Confirm pass' name='password2' value={password2} className='auth__input' onChange={handleInputChange} />

                <button type='submit' className='btn btn-primary btn-block mb-5'>
                    Register
                </button>

                <Link className='link' to='/auth/login'>
                    Aready registered?
                </Link>
            </form>
        </>
    );
};
