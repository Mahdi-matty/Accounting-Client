import { useAuthContext } from "../../utils/AuthContext"
import API from "../../utils/API"
import { useState, useEffect } from "react"

export default function Balance(){
    const userId = localStorage.getItem('userId')
    const {isLoggedIn, token} = useAuthContext()
    const [monthExpense, setMonthExpense] = useState('')
    const [income, setIncome] = useState('')
    const [tableExpense, setTableExpense] = useState('')
    const [tableincome, setTableIncome] = useState('')
    const [tableNet, setTableNet] = useState('')

    const d= new Date()
    const monthId = d.getMonth()

    useEffect(()=>{
        API.getMonthExpense(monthId).then(data=>{
            setMonthExpense(data.amount)
        })
    }, [monthId])

    useEffect(()=>{
        API.catchIncomeMonth(token, userId, monthId).then(data=>{
            setIncome(data.total)
        })
    }, [token, monthId])

    useEffect(()=>{
        const promise = API.getMonthBalance(monthId, userId)
        if(promise){
             promise.then(data=>{
            setTableExpense(data.expenses)
            setTableIncome(data.income)
            setTableNet(data.net)
        })
        }   

    }, [token, monthId])

    const calBalance = (e)=>{
        e.preventDefault()
        const balanceObj ={
            expenses: monthExpense,
            income: income
        }
        API.createBalance(token, balanceObj).then(data=>{
            console.log(data)
        })
    }




    return (
        <>
        <div>
            <button onClick={(e)=>calBalance(e)}>calculate Month Balance</button>
        </div>
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>All Expense:</th>
                        <th>{tableExpense}</th>
                    </tr>
                    <tr>
                        <th>All Income </th>
                        <th>{tableincome}</th>
                    </tr>
                    <tr>
                        <th>Net Profit: </th>
                        <th>{tableNet}</th>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}