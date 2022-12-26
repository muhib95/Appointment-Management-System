import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

   
    const { register, handleSubmit } = useForm();
    const onSubmit=(data)=>{
        console.log(data);
    }

    return (
        <div>
                 <div className='h-[800px]  flex justify-center items-center'>
         <div className='w-85'>
         <h2 className='text-3xl'>Log in</h2>
         <form onSubmit={handleSubmit(onSubmit)}>

<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Your Email</span>
</label>
<input type="email" className="input input-bordered w-full max-w-xs" {...register("email",{ required: "Email Address is required" })} placeholder="Type here"/>

{/* {errors.email && <p role="alert">{errors.email?.message}</p>} */}
</div>
<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Your Password</span>
</label>
<input type="password" className="input input-bordered w-full max-w-xs" {...register("password",{ required: "Password is required" },{ minLength: { value: 6, message: "Password must br six" } })} placeholder="Type here"/>
{/* {errors.password && <p role="alert">{errors.password?.message}</p>} */}
</div>
<label className="label"><span className="label-text">Forget Password?</span></label>
<p >New user <span className="label-text"><Link to='/register'>Register</Link></span></p>


<input className="btn btn-active w-full" type="submit" />
</form>
<div className='divider'>OR</div>
<button className="btn btn-outline w-full " >Google</button>
         </div>
         
       
        </div>
        </div>
    );
};

export default Login;