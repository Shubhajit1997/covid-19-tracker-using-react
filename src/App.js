import React from "react";
import {Cards} from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {  
    state = {
        data: {},

    }
    async componentDidMount(){
         const fetchedData = await fetchData();
         this.setState({ data: fetchedData})
     }

    render(){  
        const { data }= this.state;
       return(  
       <div className={styles.container}>
           <h1>Covid 19 Tracker Using React JS</h1>
           <Cards data={data} />
           <h3>Developed By Shubhajit Roy</h3>
       </div> 
    );
}  
}  
  
export default App; 