
import React, {useState, useEffect} from "react";
import Header from "./components/Header/Header";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";
import EditTable from "./components/EditTable/EditTable";
import EditAccount from "./components/EditAccount/EditAccount";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
 
    const [accounts, setAccounts] = useState(getInitialAccounts())

    const addNewAccountToState=(acc)=>{
      setAccounts([...accounts,acc])
    }

    const deleteAccount =(id)=>{      
      const newCopyAccounts = accounts.filter(account=>account.id !== id);
      setAccounts(newCopyAccounts)
    }

    const editAccount = (acc) => {
          
      let accountPossition = accounts.map(account => account.id).indexOf(acc.id);  
      
      accounts[accountPossition] = acc;
      setAccounts(accounts);
    }


    useEffect(() => {
      console.log("test run")
    
      // getting stored items
      const temp = localStorage.getItem("accounts")
      const loadedAccounts = JSON.parse(temp)
    
      if (loadedAccounts) {
        setAccounts(loadedAccounts)
      }
    }, [])
  
    function getInitialAccounts() {
      // getting stored items
      const temp = localStorage.getItem("accounts")
      const savedAccounts = JSON.parse(temp)
      return savedAccounts || []
    }
  
    useEffect(() => {
      // storing todos items
      const temp = JSON.stringify(accounts)
      localStorage.setItem("accounts", temp)
    }, [accounts])

    
        return (
          
          <>
              <Header />
              
             <Switch>
               <Route path="/home">
                 <Home />
               </Route>
               <Route path="/about">
                 <About />
               </Route>
                <Route exact path="/">
                  <AccountsTable accounts={accounts}/>
                </Route>
                <Route path="/add">
                  <AddAccount addNewAccountToState={addNewAccountToState}/>
                </Route>
                <Route path="/edit/:id">
                  <EditAccount accounts={accounts} editAccount={editAccount}/>                  
                </Route>  
                <Route path="/edit">
                  <EditTable accounts = {accounts} deleteAccount={deleteAccount}/>                  
                </Route>
            
               
             </Switch>       
            
             
             </>
            
        )
    
}

export default App;
