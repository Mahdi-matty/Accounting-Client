import API from "../../utils/API";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../utils/AuthContext";


export default function Expense(){
    const userId = localStorage.getItem('userId')
    const {isLoggedIn, token} = useAuthContext()

    useEffect(()=>{
        API.fetcItemsUser(token, userId).then(data=>{
            console.log(data)
        })
    }, [userId, token])

    useEffect(()=>{
        API.fetchEmploUser(token, userId).then(data=>{
            console.log(data)
        })
    }, [token, userId])

}