import React, {Component} from 'react';
import Login from './components/pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import './static/css/all.min.css'
import './static/css/style.css'

class Softwery extends Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <div>
                <Login/>
            </div>
        );
    }
}



export default Softwery;