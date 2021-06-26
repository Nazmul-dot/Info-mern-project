import React, { createContext,useEffect,useReducer } from 'react'
import Navbar from './components/Navbar'
import {reducer,initialState} from '../src/reducer/useReducer'
import axios from 'axios';
export const UserContext=createContext();
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(()=>{
    const isloged=async()=>{
      const result=await axios.get('http://localhost:8000/getdata')
      if(result.status===200)
      {
        console.log('logged')
        dispatch({type:'USER',payload:true,value:result.data})
      }
      else{
        console.log('not logged')
        dispatch({type:'USER',payload:false,value:''})
      }
    }
    isloged()
    
  },[])
  return (
    
    <UserContext.Provider value={{state,dispatch}}>
      <Navbar/>
    </UserContext.Provider>
  )
}

export default App
