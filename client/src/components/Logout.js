import axios from 'axios'
import React, { useEffect,useContext } from 'react'
import { useHistory } from 'react-router'
import {UserContext} from '../App'
const Logout = () => {
    const {state,dispatch} = useContext(UserContext)
    const history=useHistory()
    const logout=async()=>{
        try {
            const result=await axios.get('http://localhost:8000/logout')
            if(result.status===200)
            {
                dispatch({type:'USER',payload:false})
                history.push('/signin')
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        logout()
    },[])
    return (
        <>
          
        </>
    )
}

export default Logout
