import { useContext, useEffect } from "react"
import * as authService from '../serviceR/authService'
import { useNavigate } from "react-router-dom"
import AuthContext from "../Context/authContext"

export default function Logout(){
    const navigate = useNavigate()
    const {logoutHandler} = useContext(AuthContext)
    useEffect(() =>{
        authService.logout()
        .then(() => {
            logoutHandler()
            navigate('/')
        })
        .catch(() => {
        navigate('/')})
    },[])
    
    return null
}