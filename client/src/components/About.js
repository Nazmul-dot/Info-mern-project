import axios from 'axios'
import React, { useEffect, useState ,useContext} from 'react'
import { useHistory } from 'react-router'
import autopic from '../images/logo1.jpg'
import adminpic from '../images/nazmul.jpg'
import {UserContext} from '../App'
const About = () => {
    const {state,dispatch} = useContext(UserContext)
    console.log(state)
    const history = useHistory()
    const [userData,setuserData]=useState({})
    const callaboutpage = async () => {


        // try {
        //     const res =await fetch('http://localhost:8000/about',{
        //         method: 'GET',
        //         headers:{
        //             Accept: 'appllication/json',
        //             'Content-Type':'appllication/json'
        //         },
        //         credentials:'include'
        //     });
        //     const data=await res.json();
        //     console.log(data)
        //     if(!res.status===200)
        //     {
        //         const error=new  Error(res.error)
        //         throw error;
        //     }
        // } catch (error) {
        //     console.log(error)
        //     history.push('/signin')
        // }

        try {
            const data = await axios.get('http://localhost:8000/about')
            if (!data.status === 200) {
                const error = new Error(data.error)
                throw error;
            }
            console.log(data.data)
            setuserData(data.data)
        } catch (error) {
            console.log(error)
            history.push('/signin')
        }
    }
    useEffect(() => {

        callaboutpage()
    }, [])
    return (
        <>
            <div className="main-div-about border ">
                <div className="row">
                    <div className="col-sm-8 mx-auto border shadow bg-body rounded">
                        {/* uporer first div */}
                        <div className="row  m-1">
                            <div className='col-md-4 '>
                                <img className="about-img" src={userData.name==='nazmul haq'?adminpic: autopic} alt="nazmul" />
                            </div>
                            <div className='col-sm-6 '>
                                <h3>welcome</h3>
                                <p>webdevoloper</p>
                                <p className="marbotom">RATING <span>0/10</span></p>
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">about</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">timline</button>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-sm-2 '>
                                <button>edit profile</button>
                            </div>
                        </div>

                        {/* nicher div */}
                        <div className='row  m-1'>
                            <div className="col-sm-4 ">
                                <p className='mb-3'>work detels</p>
                                <h5>youtuber link</h5>
                                <h5>facebooke link</h5>
                                <h5>instragram link</h5>
                                <h5>telegram link</h5>
                                <h5>twiter link</h5>
                            </div>

                            <div className="col-sm-8  break">
                                <div className="tab-content mt-4" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                                user id
                                        </div>
                                            <div className="col-sm-6">

                                                <p className="wrap">{userData._id}</p>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                                name:
                                        </div>
                                            <div className="col-sm-6">
                                                {userData.name}
                                        </div>
                                        </div>

                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                                email:
                                        </div>
                                            <div className="col-sm-6">
                                                {userData.email}
                                        </div>
                                        </div>

                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                                Address:
                                        </div>
                                            <div className="col-sm-6">
                                                Narayongonj
                                        </div>
                                        </div>

                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                                profession:
                                        </div>
                                            <div className="col-sm-6">
                                                {userData.work}
                                        </div>
                                        </div>

                                    </div>
                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <p>student</p>
                                        <p>learner</p>
                                        <p>0 rangking</p>
                                    </div>
                                </div>
                            </div>
                        </div>









                    </div>
                </div>
            </div>
        </>
    )
}

export default About
