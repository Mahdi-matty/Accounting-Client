import { useEffect, useState } from "react"
import API from '../utils/API'
import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../utils/AuthContext"

export default function ProfilePage(){
    const {isLoggedIn, token} = useAuthContext()
    const [showFirm , setShowFirm] = useState(false)
    const [showIncomeForm, setShowIncomeForm] = useState(false)
    const [title, setTtile] = useState('')
    const [price, setPrice] = useState('')
    const [size, setSize] = useState('')
    const navigate = useNavigate()
    const userId = localStorage.getItem('userId')
    console.log(userId)
    if (!isLoggedIn) {
        return (
          <div className="container text-center">
            <h1>Please log in to access your profile.</h1>
            <Link to="/">Back to Home</Link>
          </div>
        );
      }

    const showAddForm = ()=>{
      setShowFirm(!showFirm)
    }

    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
  };

    const renderSecondSelect = () => {
      switch (selectedCategory) {
          case 'expense':
              return (
                  <select>
                      <option value="Employee">Add an Employee</option>
                      <option value="item">Add an item</option>
                      <option value="loan">Add a loan</option>
                      <option value="oneTimeExpense">Add a oneTimeExpense</option>
                      <option value="monthlyExpense">Add a monthlyExpense</option>
                  </select>
              );
          case 'income':
              setShowIncomeForm(!showIncomeForm)
          default:
              return null;
      }
  };


  const addNewIncome = (e)=>{
    e.preventDefault();
    const productObj = {
      title: title,
      price: price,
      size: size
    }
    API.createProduct(token, productObj).then(data=>{
      console.log(data)
    })
  }


    return (
        <>
           <div className="categories-container">
              <button onClick={showAddForm}>Add new line :</button>
              <div>
                {showFirm && (
                    <div>
                   <select onChange={handleCategoryChange}>
                                <option value="">Select Category</option>
                                <option value="expense">Add an expense</option>
                                <option value="income">Add an income</option>
                            </select>
                            {selectedCategory && (
                                <>
                                    <select>
                                        <option value="">Select Option</option>
                                        {renderSecondSelect()}
                                    </select>
                                    <button type="submit">Submit changes</button>
                                </>
                            )}
                        </div>
                )}
              </div>
              <div>
                {showIncomeForm &&(
                  <form onSubmit={addNewIncome()}>
                     <input 
                                    name="title"
                                    id="title"
                                    value={title}
                                    onChange={e=>setTtile(e.target.value)}
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
                )}
              </div>
          </div>
        </>
    )

}