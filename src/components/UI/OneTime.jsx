import { useState } from "react"

export default function OneTime(props){
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [amount, setAmount] = useState('')

    const handleCreate = async(e)=>{
        props.handleone({
            title: title,
            content: content,
            amount: amount,
        })
            
    }

    return (
        <>
            <div>
                <h3>add new expense</h3>
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
                                    name="content"
                                    id="content"
                                    value={content}
                                    onChange={e=>setContent(e.target.value)}
                                    placeholder="Type a content"
                                    type="text"
                                    className="questionNewCard"/>
                                    <input 
                                    name="amount"
                                    id="amount"
                                    value={amount}
                                    onChange={e=>setAmount(e.target.value)}
                                    placeholder="Type the amount"
                                    type="text"
                                    className="questionNewCard"/>
                                    <button type="submit">Submit changes</button>
                </form>
            </div>
        </>
    )
}