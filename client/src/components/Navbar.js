import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import SignIn from './SignIn';
import SingUp from './SingUp';
import logo from '../images/logo1.jpg'
import Logout from './Logout';
import { UserContext } from '../App'
import axios from 'axios'
axios.defaults.withCredentials = true;
const Navbar = () => {
    const { state, dispatch } = useContext(UserContext)
    return (

        <>
            <Router>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="#">Nazmul@</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/">Home</Link>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link" to="/about">About</Link>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link" to="/contact">Contact</Link>
                                </li>
                                {
                                    !state.isloged && <>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/signin">Login</Link>
                                        </li>

                                        <li class="nav-item">
                                            <Link class="nav-link" to="signup">Registration</Link>
                                        </li>
                                    </>
                                }
                                {
                                    state.isloged && <>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="logout">Logout</Link>
                                        </li>
                                    </>
                                }

                            </ul>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>

                    <Route path='/about'>
                        <About />
                    </Route>

                    <Route path='/contact'>
                        <Contact />
                    </Route>
                    {
                        !state.isloged && <>
                            <Route path='/signin'>
                                <SignIn />
                            </Route>

                            <Route path='/signup'>
                                <SingUp />
                            </Route>
                        </>
                    }
                    {
                        state.isloged && <>
                            <Route path='/logout'>
                                <Logout />
                            </Route>
                        </>

                    }


                </Switch>
            </Router>
        </>
    )
}

export default Navbar
