import { useState } from "react"

export default function Employee(props){
    const [username, setUserName] = useState('')
    const [hours, setHours] = useState('')
    const [payPerHour, setPayPerhour] = useState('')

    const addNewEmployee = async(e)=>{
        e.preventDefault()
        props.handleEmploy({
            username: username,
            hours: hours,
            payPerHour: payPerHour
        })
    }

    return (
        <>
            <div>
                <h3>add New Employee</h3>
                <form onSubmit={addNewEmployee}>
                        <input 
                                    name="username"
                                    id="username"
                                    value={username}
                                    onChange={e=>setUserName(e.target.value)}
                                    placeholder="Type a username"
                                    type="text"
                                    className="questionNewCard"/>
                                    <input 
                                    name="hours"
                                    id="hours"
                                    value={hours}
                                    onChange={e=>setHours(e.target.value)}
                                    placeholder="Type hour"
                                    type="text"
                                    className="questionNewCard"/>
                                    <input 
                                    name="payPerHour"
                                    id="payPerHour"
                                    value={payPerHour}
                                    onChange={e=>setPayPerhour(e.target.value)}
                                    placeholder="Type payperHour"
                                    type="text"
                                    className="questionNewCard"/>
                                    <button type="submit">Submit changes</button>
                </form>
            </div>
        </>
    )
}