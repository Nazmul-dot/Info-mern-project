import React,{useState,useContext} from 'react'
import {
    Link
  } from "react-router-dom";
  import { useHistory } from 'react-router'
import '../App.css'
import imag from '../images/signup.png'
import axios from 'axios'
import {UserContext} from '../App'
const SingIn = () => {
    const {state,dispatch} = useContext(UserContext)
    const history=useHistory()
    const [user,setuser]=useState({
      
        email:'',
        password:'',
    
    })
    const handleinput=(e)=>{
        const value=e.target.value;
        const name=e.target.name;
        setuser((predata)=>{
            return{
                ...predata,
                [name]:value
            };
        })
    }
const submit=async(event)=>{
    event.preventDefault()
    // const {email,password}=user
    // const res=await fetch('http://localhost:8000/signin',{
    //     method:'POST',
    //     headers:{
    //         'Content-type':'application/json'
    //     },
    //     body:JSON.stringify({
    //         email,password
    //     })
    // })
    // const data= await res.json();
    // {
    //     if(data.status===422 || data.error==='fill all field' || data.error==='user error'){
    //         alert('invalid')
    //     }
    //     else{
    //         console.log(data)
    //         alert('signin')
    //     }
    // }
    // console.log(user)
    // const data=await axios.post('http://localhost:8000/register',user)
    // console.log(data)
    
    // const data=await axios.post('http://localhost:8000/signin',user)
    // history.push('/')

    
    try {
        console.log(state)
        const data=await axios.post('http://localhost:8000/signin',user)
        console.log(data)
           if(data.status===422 || data.error==='fill all field' || data.error==='user error'){
            alert('invalid')
        }
        else{
            alert('login success')
            dispatch({type:'USER',payload:true,value:data.data})
            history.push('/')
        }

    } catch (error) {
        console.log(error)
    }
   

    setuser({
    
        email:'',
        password:'',
       
    })
}
    return (
        <>
            <div className="ontainer-fluid main-div1">
                <div className="row ">
                    <div className="col-sm-6 mx-auto p-5">


                        <div className="row main-div2 shadow p-3 mb-5 bg-body rounded">
                            <div className="col-md-6 col-10 mx-auto main-div21">
                                <h2>SignIn</h2>
                                <form action="" className="row">

                                <div className="col-12 d-flex m-2 level1">
                                        <i className="zmdi zmdi-email align-self-center "></i>
                                        <input type="email" name='email' value={user.email} onChange={handleinput} required />
                                        <label className="bodernon">Your Email</label>
                                    </div>

                                    

                                    <div className="col-12 d-flex m-2 level1">
                                        <i className="zmdi zmdi-lock align-self-center "></i>
                                        <input type="password" name='password' value={user.password} onChange={handleinput} required />
                                        <label className="bodernon">Your password</label>
                                    </div>

                                    <div className="col d-flex m-2">
                                        <button className="btn btn-success mt-3" onClick={submit}>Sign in</button>
                                    </div>

                                </form>
                            </div>

                            <div className="col-md-6 col-10 mx-auto main-div21">
                                <img src={imag} alt="image"  className="img2"/>
                                <Link to="/signup">
                                     have not any account? Sign up
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default SingIn




{/* <Link to="/signin">
                Already have an account? Sign in
</Link> */}