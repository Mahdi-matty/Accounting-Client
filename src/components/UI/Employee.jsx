import { useState } from "react"

export default function Employee(){
    const [username, setUserName] = useState('')
    const [hours, setHours] = useState('')
    const [payPerHour, setPayPerhour] = useState('')

    return (
        <>
            <div>
                <form>
                        <input 
                                    name="username"
                                    id="username"
                                    value={username}
                                    onChange={e=>setUserName(e.target.value)}
                                    placeholder="Type a Question"
                                    type="text"
                                    className="questionNewCard"/>
                                    <input 
                                    name="hours"
                                    id="hours"
                                    value={hours}
                                    onChange={e=>setHours(e.target.value)}
                                    placeholder="Type a Question"
                                    type="text"
                                    className="questionNewCard"/>
                                    <input 
                                    name="payPerHour"
                                    id="payPerHour"
                                    value={payPerHour}
                                    onChange={e=>setPayPerhour(e.target.value)}
                                    placeholder="Type a Question"
                                    type="text"
                                    className="questionNewCard"/>
                                    <button type="submit">Submit changes</button>
                </form>
            </div>
        </>
    )
}