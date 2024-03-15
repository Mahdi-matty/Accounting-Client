import { useEffect, useState } from "react"
import API from '../utils/API'
import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../utils/AuthContext"
import Employee from "../components/UI/Employee"
import Item from '../components/UI/Item'
import Loan from '../components/UI/Loan'
import Monthly from '../components/UI/Monthly'
import OneTime from '../components/UI/OneTime'
import Product from "../components/UI/Product"
import Expense from "../components/UI/Expense"

export default function ProfilePage(){
    const {isLoggedIn, token} = useAuthContext()
    const [showAddForm, setShowAddForm] = useState(false);
    const [showIncomeForm, setShowIncomeForm] = useState(false)
    const [showCategory, setShowCategory] = useState(false)
    const [showExpense, setShowExpense] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('')
    const [secondValue, setSecondValue] = useState('')
    const userId = localStorage.getItem('userId')
    if (!isLoggedIn) {
        return (
          <div className="container text-center">
            <h1>Please log in to access your profile.</h1>
            <Link to="/">Back to Home</Link>
          </div>
        );
      }

    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
  };

    const renderSecondSelect = () => {
      switch (selectedCategory) {
          case 'expense':
              setShowCategory(!showCategory)
              setShowIncomeForm(false)
              break;
          case 'income':
              setShowIncomeForm(!showIncomeForm)
              setShowCategory(false)
              break;
          default:
              return null;
      }
  };
  const addNewIncome = (iObj)=>{
    const productObj = {
      title: iObj.title,
      price: iObj.price,
      size: iObj.size,
      userId: iObj.userId
    }
    API.createProduct(token, productObj).then(data=>{
      console.log(data)
    })
  }
  const addEmployee = (eObj)=>{
    const employeeObj = {
      username: eObj.username,
      hours: eObj.hours,
      payPerHour : eObj.payPerHour,
      userId: eObj.userId
    }
    API.createEmployee(token, employeeObj).then(data=>{
      console.log(data)
    })
  }
  const addItem = ( iObj)=>{
    const itemObj = {
      title: iObj.title,
      size: iObj.size,
      price : iObj.price,
      userId: iObj.userId
    }
    API.createitem(token, itemObj).then(data=>{
      console.log(data)
    })
  };
  const addLoan = ( lObj)=>{
    const loanObj = {
      title: lObj.title,
      duration: lObj.duration,
      amount : lObj.amount,
      interest:lObj.interest,
      userId: lObj.userId
    }
    API.createloan(token, loanObj).then(data=>{
      console.log(data)
    })
  }
  const addMonethly = ( mObj)=>{
    const monthlyObj = {
      title: mObj.title,
      content: mObj.content,
      amount : mObj.amount,
      userId: mObj.userId
    }
    API.createMonthlyExpens(token, monthlyObj).then(data=>{
      console.log(data)
    })
  }
  const addOne = ( oObj)=>{
    const OneTimeObj = {
      title: oObj.title,
      amount : oObj.amount,
      content: oObj.content,
      userId: oObj.userId
    }
    API.createOneTimeExpense(token, OneTimeObj).then(data=>{
      console.log(data)
    })
  }

  const handleSecondCategory = (event)=>{
    setSecondValue(event.target.value)
  }

  const renderThirdSelect = ()=>{
    switch(secondValue){
      case 'Employee':
           return <Employee handleEmploy={addEmployee} />
      case 'item':
        return <Item handleItem={addItem}/>
      case 'loan':
        return <Loan handleLoan={addLoan} />
      case 'oneTimeExpense':
        return <OneTime handleOne={addOne} />
      case 'monthlyExpense':
        return <Monthly handleMonthly={addMonethly} />
    }
  }


    return (
       <>
            {showAddForm && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="w-64 h-auto bg-white rounded-lg p-8">
                        <button onClick={() => setShowAddForm(false)}>Close</button>
                        <div>
                                <div>
                                    <select onChange={handleCategoryChange} className="py-6">
                                        <option value="">Select Category</option>
                                        <option value="expense">Add an expense</option>
                                        <option value="income">Add an income</option>
                                    </select>
                                    <button onClick={renderSecondSelect}>Choose</button>
                                    {showCategory && (
                                        <>
                                            <select onChange={handleSecondCategory} className="py-6">
                                                <option value="">Select Category</option>
                                                <option id="11" value="Employee">Add an Employee</option>
                                                <option id="12" value="item">Add an item</option>
                                                <option id="13" value="loan">Add a loan</option>
                                                <option id="14" value="oneTimeExpense">Add a oneTimeExpense</option>
                                                <option id="15" value="monthlyExpense">Add a monthlyExpense</option>
                                            </select>
                                            {renderThirdSelect()}
                                        </>
                                    )}
                                </div>
                        </div>
                        <div>
                            {showIncomeForm && (
                               <Product handleProduct={addNewIncome}/>
                            )}
                        </div>
                    </div>
                </div>
            )}
            <div className="h-68 top-50 w-68 flex flex-col items-center justify-center h-screen">
                <button onClick={()=>setShowAddForm(true)}>Add new line :</button>
                <button onClick={()=>setShowExpense(true)}>show Expenses</button>
            </div>
            <div className="h-68 top-50 w-68 flex flex-col items-center justify-center h-screen">
                              {showExpense && (
                                <Expense />
                              )}
            </div>
        </>
    );

}