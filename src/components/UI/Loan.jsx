import { useState } from "react"

export default function Loan(props){
    const [title, setTitle] = useState('')
    const [duration, setDuration] = useState('')
    const [amount, setAmount] = useState('')
    const [interest, setInterest] = useState('')
    const userId = localStorage.getItem('userId')

    const handleCreate = async (e)=>{
        e.preventDefault()
        props.handleLoan({
            title: title,
            duration: duration,
            amount: amount,
            interest: interest,
            userId: userId
        })
    }


    return (
        <>
            <div>
                <h3>add new Loan</h3>
                <form onSubmit={handleCreate}>
                        <input 
                                    name="title"
                                    id="title"
                                    value={title}
                                    onChange={e=>setTitle(e.target.value)}
                                    placeholder="Type a title"
                                    type="text"
                                    className="questionNewCard"/>
                                    <input 
                                    name="duration"
                                    id="duration"
                                    value={duration}
                                    onChange={e=>setDuration(e.target.value)}
                                    placeholder="Type the duration"
                                    type="text"
                                    className="questionNewCard"/>
                                    <input 
                                    name="amount"
                                    id="amount"
                                    value={amount}
                                    onChange={e=>setAmount(e.target.value)}
                                    placeholder="Type amount"
                                    type="text"
                                    className="questionNewCard"/>
                                     <input 
                                    name="interest"
                                    id="interest"
                                    value={interest}
                                    onChange={e=>setInterest(e.target.value)}
                                    placeholder="Type interest rate"
                                    type="text"
                                    className="questionNewCard"/>
                                    <button type="submit">Submit changes</button>
                </form>
            </div>
        </>
    )
}