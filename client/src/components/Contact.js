import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import {UserContext} from '../App'
const Contact = () => {
    const {state,dispatch} = useContext(UserContext)
    console.log(state)
    const [userData,setuserData]=useState({
        name:'',
        email:'',
        phone:'',
        message:'',
    })

    const callcontactpage = async () => {
    try {
        const result = await axios.get('http://localhost:8000/getdata')
        if (!result.status === 200) {
            const error = new Error(result.error)
            throw error;
        }
       // console.log(result.data)
        setuserData({...userData,name:result.data.name,email:result.data.email,phone:result.data.phone})
        console.log(userData)
    } catch (error) {
        console.log(error)
    }
}
useEffect(() => {

    callcontactpage()
}, [])


const handleinput=(e)=>{
    const value=e.target.value;
    const name=e.target.name;
    setuserData({...userData,[name]:value})
}
const submit=async(event)=>{
    event.preventDefault()
    try {
        const result = await axios.post('http://localhost:8000/contact',userData)
        if (!result.status === 201) {
            const error = new Error(result.error)
            throw error;
        }
       console.log(result.data)
       setuserData({...userData,message:''})
        
    } catch (error) {
        console.log(error)
    }

}
    return (
        <>
            <div className="container ">
                <div className="row mt-5">
                    <div className="col-sm-10  mx-auto d-flex justify-content-between f-wrap">

                        <div className="border px-5 d-flex align-self-end shadow p-3 mb-5 bg-body rounded">
                            <i className="zmdi zmdi-smartphone-iphone pt-3 pr-3"></i>
                            <div>
                                <div>Phone</div>
                                <div>{userData.phone? userData.phone : "0151*********"}</div>
                            </div>
                        </div>

                        <div className="border px-5 d-flex align-self-end shadow p-3 mb-5 bg-body rounded">
                        <i className="zmdi zmdi-email align-self-center pt-3 pr-3 "></i>
                            <div>
                                <div>Email</div>
                                <div>{userData.email? userData.email:"user@gmail.com"}</div>
                            </div>
                        </div>

                        <div className="border px-5 d-flex align-self-end shadow p-3 mb-5 bg-body rounded">
                        <i class="zmdi zmdi-city pt-3 pr-3"></i>

                            <div>
                                <div>Adress</div>
                                <div>Narayongonj</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">

                    <div className="col-sm-10 mx-auto border shadow p-3 mb-5 bg-body rounded">
                        <form className="row d-flex flex-column">
                        <h4 className="Get_In_Touch">Get In Touch</h4 >
                            <div className="col-sm-10 mx-auto d-flex justify-content-between ">
                                <div>
                                    <input type="text" onChange={handleinput} value={userData.name} name="name"  id="" placeholder="Your Name" className="border px-4"/>
                                </div>
                                <div>
                                    <input type="text" onChange={handleinput} value={userData.email} name="email"  id="" placeholder="Your Email" className="border px-4"/>
                                </div>
                                <div>
                                    <input type="text" onChange={handleinput} value={userData.phone} name="phone"  id="" placeholder="Your phone" className="border px-4"/>
                                </div>

                            </div>

                            <div className="col-sm-10 mx-auto mt-5">
                                <textarea onChange={handleinput} name="message" value={userData.message} placeholder="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div>
                                <button onClick={submit} className="btn btn-success btn_padding">Send Message</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
