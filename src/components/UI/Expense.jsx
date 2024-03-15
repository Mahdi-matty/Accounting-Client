import API from "../../utils/API";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../utils/AuthContext";


export default function Expense(){
    const userId = localStorage.getItem('userId')
    const {isLoggedIn, token} = useAuthContext()
    const [itemTot, setItemTot] = useState('')
    const [employTot, setEmployTot] = useState('')
    const [loanTot, setloanTot] = useState('')
    const [monthTot, setMonthTot] = useState('')
    const [oneTot, setOneTot] = useState('')
    const [amount, setAmount] = useState('')

    useEffect(() => {
        const itemsPromise = API.fetcItemsUser(token, userId);
    
        if (itemsPromise) {
            itemsPromise.then(data => {
                if (data.length > 1) {
                    const totalAmount = data.reduce((accumulator, currentItem) => {
                        return accumulator + currentItem.total;
                    }, 0);
    
                    setItemTot(totalAmount);
                } else if (data.length === 1) {
                    setItemTot(data[0].total);
                }
            }).catch(error => {
                console.error('Error fetching items:', error);
            });
        }
    }, [token, userId]);

    useEffect(()=>{
       const employeesPromise= API.fetchEmploUser(token, userId)
       if(employeesPromise){
       employeesPromise.then(data=>{
        if (data.length > 1) {
            const totalAmount = data.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.monthPay;
            }, 0);

            setEmployTot(totalAmount);
        } else if (data.length === 1) {
            setEmployTot(data[0].monthPay);
        }
    }).catch(error => {
        console.error('Error fetching items:', error);
    });
}
}, [token, userId]);

    useEffect(()=>{
        const LoansPromise= API.fetchLoanUser(token, userId)
        if(LoansPromise){
        LoansPromise.then(data=>{
            if (data.length > 1) {
                const totalAmount = data.reduce((accumulator, currentItem) => {
                    return accumulator + currentItem.monthPayment;
                }, 0);
    
                setloanTot(totalAmount);
            } else if (data.length === 1) {
                setloanTot(data[0].monthPayment);
            }
        }).catch(error => {
            console.error('Error fetching items:', error);
        });
    }
    }, [token, userId]);

     useEffect(()=>{
        const monthliesPromise= API.fetchMonthUser(token, userId)
        if(monthliesPromise){
        monthliesPromise.then(data=>{
            if (data.length > 1) {
                const totalAmount = data.reduce((accumulator, currentItem) => {
                    return accumulator + currentItem.amount;
                }, 0);
    
                setMonthTot(totalAmount);
            } else if (data.length === 1) {
                setMonthTot(data[0].amount);
            }
        }).catch(error => {
            console.error('Error fetching items:', error);
        });
    }
    }, [token, userId]);

     useEffect(()=>{
        const oneTimesPromise= API.fetchOneTimeUser(token, userId)
        if(oneTimesPromise){
        oneTimesPromise.then(data=>{
            if (data.length > 1) {
                const totalAmount = data.reduce((accumulator, currentItem) => {
                    return accumulator + currentItem.amount;
                }, 0);
    
                setOneTot(totalAmount);
            } else if (data.length === 1) {
                setOneTot(data[0].amount);
            }
        }).catch(error => {
            console.error('Error fetching items:', error);
        });
    }
    }, [token, userId]);

    useEffect(() => {
        setAmount(parseInt(employTot) + parseInt(loanTot) + parseInt(itemTot) + parseInt(monthTot) + parseInt(oneTot));
        console.log(amount);
    }, [employTot, loanTot, monthTot, oneTot, itemTot]);


     const calculateExpense = (e)=>{
        e.preventDefault()
        const d= new Date()
        const mon = d.getMonth()
        const ya = d.getFullYear()
        const mont = `${mon}-${ya}`
        const expenseObj = {
            month: mont,
            amount: amount,
            detail: `${mon} report`
        }

        API.createExpense(token, expenseObj).then(data=>{
            console.log(data)
        })
     }


     return (
        <>
        <div>
            <button onClick={(e)=>calculateExpense(e)}>calculate</button>
        </div>
        
        </>
     )

}