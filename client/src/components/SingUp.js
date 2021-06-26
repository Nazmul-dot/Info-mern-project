import React, { useState } from 'react'
import {
    Link, useHistory
} from "react-router-dom";
import '../App.css'
import imag from '../images/signup.png'
import axios from 'axios'
const SingUp = () => {
    const history=useHistory()
    const [user, setuser] = useState({
        name: '',
        email: '',
        phone: '',
        work: '',
        password: '',
        cpassword: '',
    })
    const handleinput = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setuser((predata) => {
            return {
                ...predata,
                [name]: value
            };
        })
    }
    const submit = async (event) => {
        event.preventDefault()
        // const {name,email,phone,work,password,cpassword}=user
        // const res=await fetch('http://localhost:8000/register',{
        //     method:'POST',
        //     headers:{
        //         'Content-type':'application/json'
        //     },
        //     body:JSON.stringify({
        //         name,email,phone,work,password,cpassword
        //     })
        // })
        // const data= await res.json();
        // {
        //     if(data.status===422 || data.error==='email already exist..' || data.error==='plz fill all fild' || data.error==='both password are not same'){
        //         alert('invalid')
        //     }
        //     else{
        //         console.log(data)
        //         alert('register')
        //     }
        // }
        // console.log(user)
        // const data=await axios.post('http://localhost:8000/register',user)
        // console.log(data)

        try {
            const data = await axios.post('http://localhost:8000/register', user)
            console.log(data)
            if (data.status === 422 || data.error === 'email already exist..' || data.error === 'plz fill all fild' || data.error === 'both password are not same') {
                alert('invalid')
            }
            else {
                console.log(data)
                alert('register')
                history.push('/signin')
            }

        } catch (error) {
            alert('invalid')
            console.log(error)
        }
        setuser({
            name: '',
            email: '',
            phone: '',
            work: '',
            password: '',
            cpassword: '',
        })
    }
    return (
        <>
            <div className="ontainer-fluid main-div1">
                <div className="row ">
                    <div className="col-sm-6 mx-auto p-5">


                        <div className="row main-div2 shadow p-3 mb-5 bg-body rounded">

                            <div className="col-md-6 col-10 mx-auto main-div21">
                                <h2 className="ml-2">SignUp</h2>
                                <form action="" className="row">
                                    <div className="col-12 m-2 level1">
                                        <i className="zmdi zmdi-account align-self-center "></i>
                                        <input onChange={handleinput} value={user.name} name="name" type="text" required />
                                        <label className="bodernon">Your Name</label>
                                    </div>

                                    <div className="col-12 d-flex m-2 level1">
                                        <i className="zmdi zmdi-email align-self-center "></i>
                                        <input onChange={handleinput} value={user.email} name="email" type="email" required />
                                        <label className="bodernon">Your Email</label>
                                    </div>

                                    <div className="col-12 d-flex m-2 level1">
                                        <i className="zmdi zmdi-flower-alt zmdi-hc-lgzmdi zmdi-whatsapp align-self-center "></i>
                                        <input onChange={handleinput} value={user.phone} name="phone" type="number" required />
                                        <label className="bodernon">Your Phone</label>
                                    </div>

                                    <div className="col-12 d-flex m-2 level1">
                                        <i className="zmdi zmdi-run align-self-center "></i>
                                        <input onChange={handleinput} value={user.work} name="work" type="text" required />
                                        <label className="bodernon">profession</label>
                                    </div>

                                    <div className="col-12 d-flex m-2 level1">
                                        <i className="zmdi zmdi-lock align-self-center "></i>
                                        <input onChange={handleinput} value={user.password} name="password" type="password" required />
                                        <label className="bodernon">Your password</label>
                                    </div>

                                    <div className="col-12 d-flex m-2 level1">
                                        <i className="zmdi zmdi-lock align-self-center "></i>
                                        <input onChange={handleinput} value={user.cpassword} name="cpassword" type="password" required />
                                        <label className="bodernon">Your Confirm password</label>
                                    </div>

                                    <div className="col d-flex m-2 level1">
                                        <button onClick={submit} className="btn btn-success mt-3">register</button>
                                    </div>

                                </form>
                            </div>

                            <div className="col-md-6 col-10 mx-auto main-div21">
                                <img src={imag} alt="image" className />
                                <Link to="/signin">
                                    Already have an account? Sign in
                                </Link>
                            </div>

                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default SingUp




{/* <Link to="/signin">
                Already have an account? Sign in
</Link> */}