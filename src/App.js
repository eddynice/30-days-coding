import React, {Component} from 'react';
import './App.css';
import {Header} from './component/Header';
import { Balance } from './component/Balance';
import { IncomeExpenses } from './component/IncomeExpenses';
import { TransactionList } from './component/TransactionList';
import { AddTransaction } from './component/AddTransaction';


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="row">
            <div className=" ">
            <Header/>
            
            <Balance/> 
            <IncomeExpenses/>  
            <TransactionList/>
            <AddTransaction/>
                   
            </div> 
               
                    </div>
        
                        </div>
                    
        )
    }
}

export default App
