import { useState } from "react"

export default function Product(props){
    const [title, setTitle] = useState('')
    const [size, setSize] = useState('')
    const [price, setPrice] = useState('')

    const handleCreate = async(e)=>{
        props.handleProduct({
            title: title,
            size: size,
            price: price
        })
    }

    return (
        <>
            <div>
                <h2>add an item</h2>
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
                                    name="size"
                                    id="size"
                                    value={size}
                                    onChange={e=>setSize(e.target.value)}
                                    placeholder="Type a size"
                                    type="text"
                                    className="questionNewCard"/>
                                    <input 
                                    name="price"
                                    id="price"
                                    value={price}
                                    onChange={e=>setPrice(e.target.value)}
                                    placeholder="Type a price"
                                    type="text"
                                    className="questionNewCard"/>
                                    <button type="submit">Submit changes</button>
                </form>
            </div>
        </>
    )
}