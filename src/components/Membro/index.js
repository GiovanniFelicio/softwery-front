import React, {Component} from 'react';
import SimpleForm from '../Forms/SimpleForm'

class Membro extends Component{

    constructor(props){
        super(props)
        this.state = {
            feed:[
                {id:1, name:'Teste1', likes:10, comments:1},
                {id:2, name:'Teste2', likes:1, comments:2},
                {id:3, name:'Teste3', likes:30, comments:3},
                {id:4, name:'Teste4', likes:40, comments:4}
            ]
        }
    }

    render(){
        return(
            <div>
                <SimpleForm/>
            </div>
        );
    }
}

export default Membro;