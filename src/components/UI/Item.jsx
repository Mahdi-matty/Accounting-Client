import { useState } from "react"

export default function Item(){
    const [title, setTitle] = useState('')
    const [size, setSize] = useState('')
    const [price, setPrice] = useState('')

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
                                    name="size"
                                    id="size"
                                    value={size}
                                    onChange={e=>setSize(e.target.value)}
                                    placeholder="Type a Question"
                                    type="text"
                                    className="questionNewCard"/>
                                    <input 
                                    name="price"
                                    id="price"
                                    value={price}
                                    onChange={e=>setPrice(e.target.value)}
                                    placeholder="Type a Question"
                                    type="text"
                                    className="questionNewCard"/>
                                    <button type="submit">Submit changes</button>
                </form>
            </div>
        </>
    )
}