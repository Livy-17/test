import React from 'react';
import './Body.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const Body = ({ setRedirect }) => {
  
  const formSchema = Yup.object().shape(
    {
      firstname: Yup.string()
        .required('Firstname is mendatory')
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
      lastname: Yup.string()
        .required('Lastname is mendatory')
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
      email: Yup.string()
        .required('Email is mendatory')
        .email('Invalid email format'),
      password: Yup.string()
        .required('Password is mendatory')
        .min(3, 'Passwords must be at least 3 characters long'),
      confirmPwd: Yup.string()
        .required('Password is mendatory')
        .oneOf([Yup.ref('password')], 'Passwords does not match')
    }
  )

  const formOptions = { resolver: yupResolver(formSchema) };

  const { register, handleSubmit, reset, formState } = useForm(formOptions);

  const { errors } = formState;

  const onSubmit = async (data) => {
    const FD = new FormData();
    FD.append("firstname", data.firstname);
    FD.append("lastname", data.lastname);
    FD.append("email", data.email);
    FD.append("password", data.password);
    FD.append("confirmPwd", data.confirmPwd);
    // const res = await fetch("HERE IS THE URL", {
    //   method: "POST",
    //   body: FD
    // }).then((res) => res.json()); 
    // alert(JSON.stringify(`${res.message}, status: ${res.status}`));
    
    jump();
  };

  const jump = () => {
    setRedirect(true);
  };

  return (
    <div className='Body--container'>
      <div className='signup--container'>
        <h2>Sign Up Your Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='form--container' id='myForm'>
          <div className='input--container'>
            <label htmlFor='FirstName' className='labels'>First Name:</label>
            <input className={errors.firstname ? 'inputFrame--red' : 'inputFrame'} id='FirstName' type='text' name='firstname' {...register("firstname")} />
            {errors.firstname && <p className='error--info'>Please enter a valid firstname.</p>}
          </div>
          <div className='input--container'>
            <label htmlFor='LastName' className='labels'>Last Name:</label>
            <input className={errors.lastname ? 'inputFrame--red' : 'inputFrame'} id='LastName' type='text' name='lastname' {...register("lastname")} />
            {errors.lastname && <p className='error--info'>Please enter a valid lastname.</p>}
          </div>
          <div className='input--container'>
            <label htmlFor='Email' className='labels'>Email:</label>
            <input className={errors.email ? 'inputFrame--red' : 'inputFrame'} id='Email' type='email' name='email' {...register("email")} />
            {errors.email && <p className='error--info'>Please enter a valid email address.</p>}
          </div>
          <div className='input--container'>
            <label htmlFor='Password' className='labels'>Password:</label>
            <input className={errors.password ? 'inputFrame--red' : 'inputFrame'} id='Password' type='password' name='password' {...register("password")} />
            {errors.password && <p className='error--info'>Please enter a valid password.</p>}
          </div>
          <div className='input--container'>
            <label htmlFor='ConfirmPwd' className='labels'>Password:</label>
            <input className={errors.confirmPwd ? 'inputFrame--red' : 'inputFrame'} id='ConfirmPwd' type='password' name='confirmPwd' {...register("confirmPwd")} />
            {errors.confirmPwd && <p className='error--info'>Passwords do not match.</p>}
          </div>

          <input className='submit--btn' type="submit" value='Sign Up' />
        </form>
      </div>
    </div>
  )

};

export default Body;