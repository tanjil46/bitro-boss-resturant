import { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from './AuthProvider';

import Google from './Google';

const LOgin = () => {
// const [btnDisable,setDisable]=useState(true)
// const capchatRef=useRef(null)
const{userSingIn}=useContext(AuthContext)
const navigate=useNavigate()
// useEffect(()=>{

//     loadCaptchaEnginge(6); 





// },[])

const location=useLocation()

const loginHanler=e=>{
e.preventDefault()
const form =e.target
const email=form.email.value
const password=form.password.value
 userSingIn(email,password)
 .then((result)=>{
  console.log(result.user)
  navigate(location?.state?location.state:'/')
 })
.catch(error=>console.log(error.message))
}


// const capchaHanle=()=>{
// const USERCAPTCHA=capchatRef.current.value

//  if(validateCaptcha(USERCAPTCHA)){

// setDisable(false)
//  }else{
//     setDisable(true)
//  }

// }






    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={loginHanler} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>


        {/* <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input ref={capchatRef} type="text" placeholder="type captcha" name="captcha" className="input input-bordered" required />
          <button onClick={capchaHanle} className="btn bg-slate-500 btn-xs">validate</button>
       </div> */}





        <div className="form-control mt-6">
          <button  type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
     <Google></Google>

      <Link className='btn bg-slate-500' to='/resister'>RESISTER</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default LOgin;