import { useState } from "react"

export default function Item(){
    const [title, setTitle] = useState('')
    const [duration, setDuration] = useState('')
    const [amount, setAmount] = useState('')
    const [interest, setInterest] = useState('')


    return (
        <>
            <div>
                <form>
                        <input 
                                    name="title"
                                    id="title"
                                    value={title}
                                    onChange={e=>setTitle(e.target.value)}
                                    placeholder="Type a Question"
                                    type="text"
                                    className="questionNewCard"/>
                                    <input 
                                    name="duration"
                                    id="duration"
                                    value={duration}
                                    onChange={e=>setDuration(e.target.value)}
                                    placeholder="Type a Question"
                                    type="text"
                                    className="questionNewCard"/>
                                    <input 
                                    name="amount"
                                    id="amount"
                                    value={amount}
                                    onChange={e=>setAmount(e.target.value)}
                                    placeholder="Type a Question"
                                    type="text"
                                    className="questionNewCard"/>
                                     <input 
                                    name="interest"
                                    id="interest"
                                    value={interest}
                                    onChange={e=>setInterest(e.target.value)}
                                    placeholder="Type a Question"
                                    type="text"
                                    className="questionNewCard"/>
                                    <button type="submit">Submit changes</button>
                </form>
            </div>
        </>
    )
}