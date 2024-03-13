import useSwr from 'swr'

const URL_PREFIX = "http://localhost:3001"

const fetcher = URL => fetch(URL).then(res=>{
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }res.json})

const API = {
    login:userObj=>{
        return fetch(`${URL_PREFIX}/api/users/login`,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>{
            if(!res.ok){
             throw new Error("invalid login")
            }
            return res.json()
          })
        },  
    logOut:()=>{
            fetch(`${URL_PREFIX}/api/users/logOut`, {
                method: 'GET',
            }).then(res=>{
                if(!res.ok){
                    throw new Error('something went wrong ')
                }
                return res.json()
            })
        },
    signup:userObj=>{
            return fetch(`${URL_PREFIX}/api/users/`,{
                method:"POST",
                body:JSON.stringify(userObj),
                headers:{
                    "Content-Type":"application/json"
            }
        }).then(res=>{
            if(!res.ok){
                throw new Error("invalid signup")
                }
                return res.json()
          })
        },
    getDataToken:token=>{
            return fetch(`${URL_PREFIX}/tokenData`,{
                method:"GET",
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("invalid token")
                }
                return res.json()
              })
        },
    getAllProduct:()=>{
            const {data, error} = useSwr(`${URL_PREFIX}/api/products`, fetcher)
            if (error){
                throw new Error('something went wrong')
            }
            return data
        },
     getOneProduct: (productId)=>{
            return fetch(`${URL_PREFIX}/api/products/${productId}`, {
                method: 'GET',
            }).then(res=>{
                if(!res.ok){
                    throw new Error('something went wrong')
                }else{
                    return res.json()
                }
            })
        },
    createProduct:(token,productObj)=>{
            return fetch(`${URL_PREFIX}/api/products`,{
                method:"POST",
                body:JSON.stringify(productObj),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot create")
                }
                return res.json()
              })
        },
    editProduct:(token,productId,productObj)=>{
            return fetch(`${URL_PREFIX}/api/products/${productId}`,{
                method:"PUT",
                body:JSON.stringify(productObj),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot edit")
                }
                return res.json()
              })
        },
    deleteProduct:(token,productId)=>{
            return fetch(`${URL_PREFIX}/api/products/${productId}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot delete")
                }
                return res.json()
              })
        },
    getAllItem:()=>{
            return fetch(`${URL_PREFIX}/api/items`,{
                method:"GET",
            }).then(res=>{
                if(!res.ok){
                    console.log(Error)
                 throw new Error("invalid token")
                }
                return res.json()
              })
        },
     getOneItem: (itemId)=>{
            return fetch(`${URL_PREFIX}/api/items/${itemId}`, {
                method: 'GET',
            }).then(res=>{
                if(!res.ok){
                    throw new Error('something went wrong')
                }else{
                    return res.json()
                }
            })
        },
    createitem:(token,itemObj)=>{
            return fetch(`${URL_PREFIX}/api/items`,{
                method:"POST",
                body:JSON.stringify(itemObj),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot create")
                }
                return res.json()
              })
        },
    editItem:(token,itemId,itemObj)=>{
            return fetch(`${URL_PREFIX}/api/items/${itemId}`,{
                method:"PUT",
                body:JSON.stringify(itemObj),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot edit")
                }
                return res.json()
              })
        },
    deleteItem:(token,itemId)=>{
            return fetch(`${URL_PREFIX}/api/items/${itemId}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot delete")
                }
                return res.json()
              })
        },
    getAllEmploy:()=>{
            return fetch(`${URL_PREFIX}/api/employees`,{
                method:"GET",
            }).then(res=>{
                if(!res.ok){
                    console.log(Error)
                 throw new Error("invalid token")
                }
                return res.json()
              })
    },
    getOneEmployee: (employeeId)=>{
            return fetch(`${URL_PREFIX}/api/employees/${employeeId}`, {
                method: 'GET',
            }).then(res=>{
                if(!res.ok){
                    throw new Error('something went wrong')
                }else{
                    return res.json()
                }
            })
    },
    createEmployee:(token,employeObj)=>{
            return fetch(`${URL_PREFIX}/api/employees`,{
                method:"POST",
                body:JSON.stringify(employeObj),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot create")
                }
                return res.json()
              })
        },
    editEmployee:(token,employeeId,employeObj)=>{
            return fetch(`${URL_PREFIX}/api/employees/${employeeId}`,{
                method:"PUT",
                body:JSON.stringify(employeObj),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot edit")
                }
                return res.json()
              })
        },
    deleteProduct:(token,employeeId)=>{
            return fetch(`${URL_PREFIX}/api/employees/${employeeId}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot delete")
                }
                return res.json()
              })
        },
    getAllLoan:()=>{
            return fetch(`${URL_PREFIX}/api/loan`,{
                method:"GET",
            }).then(res=>{
                if(!res.ok){
                    console.log(Error)
                 throw new Error("invalid token")
                }
                return res.json()
              })
        },
     getOneloan: (loanId)=>{
            return fetch(`${URL_PREFIX}/api/loan/${loanId}`, {
                method: 'GET',
            }).then(res=>{
                if(!res.ok){
                    throw new Error('something went wrong')
                }else{
                    return res.json()
                }
            })
        },
    createloan:(token,loanObj)=>{
            return fetch(`${URL_PREFIX}/api/loan`,{
                method:"POST",
                body:JSON.stringify(loanObj),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot create")
                }
                return res.json()
              })
        },
    editLoan:(token,loanId,loanObj)=>{
            return fetch(`${URL_PREFIX}/api/loan/${loanId}`,{
                method:"PUT",
                body:JSON.stringify(loanObj),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot edit")
                }
                return res.json()
              })
        },
    deleteLoan:(token,loanId)=>{
            return fetch(`${URL_PREFIX}/api/loan/${loanId}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot delete")
                }
                return res.json()
              })
        },
    getAllMonthlyExpens:()=>{
            return fetch(`${URL_PREFIX}/api/monthexpens`,{
                method:"GET",
            }).then(res=>{
                if(!res.ok){
                    console.log(Error)
                 throw new Error("invalid token")
                }
                return res.json()
              })
        },
    getOneMonthlyExpens: (monethluId)=>{
            return fetch(`${URL_PREFIX}/api/monthexpens/${monethluId}`, {
                method: 'GET',
            }).then(res=>{
                if(!res.ok){
                    throw new Error('something went wrong')
                }else{
                    return res.json()
                }
            })
        },
    createMonthlyExpens:(token,monethlyObj)=>{
            return fetch(`${URL_PREFIX}/api/monthexpens`,{
                method:"POST",
                body:JSON.stringify(monethlyObj),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot create")
                }
                return res.json()
              })
        },
    editMonthlyExpens:(token,monethluId,monethlyObj)=>{
            return fetch(`${URL_PREFIX}/api/monthexpens/${monethluId}`,{
                method:"PUT",
                body:JSON.stringify(monethlyObj),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot edit")
                }
                return res.json()
              })
        },
    deleteMonthlyExpens:(token,monethluId)=>{
            return fetch(`${URL_PREFIX}/api/monthexpens/${monethluId}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot delete")
                }
                return res.json()
              })
        },
    getAllOneTimeExpense:()=>{
            return fetch(`${URL_PREFIX}/api/onetime`,{
                method:"GET",
            }).then(res=>{
                if(!res.ok){
                    console.log(Error)
                 throw new Error("invalid token")
                }
                return res.json()
              })
        },
    getOneOneTimeExpense: (oneTimeId)=>{
            return fetch(`${URL_PREFIX}/api/onetime/${oneTimeId}`, {
                method: 'GET',
            }).then(res=>{
                if(!res.ok){
                    throw new Error('something went wrong')
                }else{
                    return res.json()
                }
            })
        },
    createOneTimeExpense:(token,OneTimeObj)=>{
            return fetch(`${URL_PREFIX}/api/onetime`,{
                method:"POST",
                body:JSON.stringify(OneTimeObj),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot create")
                }
                return res.json()
              })
        },
    editOneTimeExpense:(token,oneTimeId,OneTimeObj)=>{
            return fetch(`${URL_PREFIX}/api/onetime/${oneTimeId}`,{
                method:"PUT",
                body:JSON.stringify(OneTimeObj),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot edit")
                }
                return res.json()
              })
        },
    deleteOneTimeExpense:(token,oneTimeId)=>{
            return fetch(`${URL_PREFIX}/api/onetime/${oneTimeId}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot delete")
                }
                return res.json()
              })
        },
    getAllExpense:()=>{
            return fetch(`${URL_PREFIX}/api/expense`,{
                method:"GET",
            }).then(res=>{
                if(!res.ok){
                    console.log(Error)
                 throw new Error("invalid token")
                }
                return res.json()
              })
        },
    getOneExpense: (expenseId)=>{
            return fetch(`${URL_PREFIX}/api/expense/${expenseId}`, {
                method: 'GET',
            }).then(res=>{
                if(!res.ok){
                    throw new Error('something went wrong')
                }else{
                    return res.json()
                }
            })
        },
    getMonthExpense: (monthId)=>{
            return fetch(`${URL_PREFIX}/api/expense/month/${monthId}`, {
                method: 'GET',
            }).then(res=>{
                if(!res.ok){
                    throw new Error('something went wrong')
                }else{
                    return res.json()
                }
            })
        },
    createExpense:(token,expenseObj)=>{
            return fetch(`${URL_PREFIX}/api/expense`,{
                method:"POST",
                body:JSON.stringify(expenseObj),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot create")
                }
                return res.json()
              })
        },
    editExpense:(token,expenseId,expenseObj)=>{
            return fetch(`${URL_PREFIX}/api/expense/${expenseId}`,{
                method:"PUT",
                body:JSON.stringify(expenseObj),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot edit")
                }
                return res.json()
              })
        },
    deleteExpense:(token,expenseId)=>{
            return fetch(`${URL_PREFIX}/api/expense/${expenseId}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot delete")
                }
                return res.json()
              })
        },
    getAllBalance:()=>{
            return fetch(`${URL_PREFIX}/api/balance`,{
                method:"GET",
            }).then(res=>{
                if(!res.ok){
                    console.log(Error)
                 throw new Error("invalid token")
                }
                return res.json()
              })
        },
    getOneBalance: (balanceId)=>{
            return fetch(`${URL_PREFIX}/api/balance/${balanceId}`, {
                method: 'GET',
            }).then(res=>{
                if(!res.ok){
                    throw new Error('something went wrong')
                }else{
                    return res.json()
                }
            })
        },
    createBalance:(token,balanceObj)=>{
            return fetch(`${URL_PREFIX}/api/balance`,{
                method:"POST",
                body:JSON.stringify(balanceObj),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot create")
                }
                return res.json()
              })
        },
    editBalance:(token,balanceId,balanceObj)=>{
            return fetch(`${URL_PREFIX}/api/balance/${balanceId}`,{
                method:"PUT",
                body:JSON.stringify(balanceObj),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot edit")
                }
                return res.json()
              })
        },
    deleteBalance:(token,balanceId)=>{
            return fetch(`${URL_PREFIX}/api/balance/${balanceId}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>{
                if(!res.ok){
                 throw new Error("cannot delete")
                }
                return res.json()
              })
        },
    getMonthBalance: (monthId)=>{
            return fetch(`${URL_PREFIX}/api/balance/month/${monthId}`, {
                method: 'GET',
            }).then(res=>{
                if(!res.ok){
                    throw new Error('something went wrong')
                }else{
                    return res.json()
                }
            })
        },
}

export default API