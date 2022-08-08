import React from 'react';
import './Body.css';
import { useForm } from 'react-hook-form';

const Body = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='Body--container'>
      <div className='signup--container'>
        <h2>Sign Up Your Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='form--container'>
          <div className='input--container'>
            <label htmlFor='firstName' className='labels'>First Name:</label>
            <input className='inputFrame' id='firstName' {...register("firstname", { required: true, pattern: /^[A-Za-z]+$/i })} />
            {errors.firstname && <p>firstname error</p>}
          </div>
          <div className='input--container'>
            <label htmlFor='lastName' className='labels'>Last Name:</label>
            <input className='inputFrame' id='lastName' {...register("lastname", { required: true, pattern: /^[A-Za-z]+$/i })} />
            {errors.lastname && <p>lastname error</p>}
          </div>
          <div className='input--container'>
            <label htmlFor='Email' className='labels'>Email:</label>
            <input className='inputFrame' id='email' {...register("email", { required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address" } })} />
            {errors.email && <p>email error</p>}
          </div>
          <div className='input--container'>
            <label htmlFor='Password' className='labels'>Password:</label>
            <input className='inputFrame' id='password' {...register("password", { required: true })} />
            {errors.password && <p>password error</p>}
          </div>
          <input className='submit--btn' type="submit" value='Sign Up' />
        </form>
      </div>
    </div>
  )
};

export default Body;