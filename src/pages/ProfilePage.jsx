import { useEffect, useState } from "react"
import API from '../utils/API'
import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../utils/AuthContext"
import Employee from "../components/UI/Employee"
import Item from '../components/UI/Item'
import Loan from '../components/UI/Loan'
import Monthly from '../components/UI/Monthly'
import OneTime from '../components/UI/OneTime'

export default function ProfilePage(){
    const {isLoggedIn, token} = useAuthContext()
    const [showFirm , setShowFirm] = useState(false)
    const [showIncomeForm, setShowIncomeForm] = useState(false)
    const [showCategory, setShowCategory] = useState(false)
    const [title, setTtile] = useState('')
    const [price, setPrice] = useState('')
    const [size, setSize] = useState('')
    const navigate = useNavigate()
    const [selectedCategory, setSelectedCategory] = useState('')
    const [secondValue, setSecondValue] = useState('')
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
              setShowCategory(!showCategory)
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

  const handleSecondCategory = (event)=>{
    setSecondValue(event.target.value)
  }

  const renderThirdSelect = ()=>{
    switch(secondValue){
      case 'Employee':
           return <Employee />
      case 'item':
        return <Item />
      case 'loan':
        return <Loan />
      case 'oneTimeExpense':
        return <OneTime />
      case 'monthlyExpense':
        return <Monthly />
    }
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
                            {showCategory && renderSecondSelect()}
                            {showCategory && (
                                <>
                                     <select onChange={handleSecondCategory}>
                                        <option value="">Select Category</option>
                                        <option id="11" value="Employee">Add an Employee</option>
                                        <option id="12" value="item">Add an item</option>
                                        <option id="13" value="loan">Add a loan</option>
                                        <option id="14" value="oneTimeExpense">Add a oneTimeExpense</option>
                                        <option id="15" value="monthlyExpense">Add a monthlyExpense</option>
                                      </select>
                                      <button type="submit">Choose</button>
                                      {renderThirdSelect()}
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