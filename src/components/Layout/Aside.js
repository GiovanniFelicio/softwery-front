import React, {Component} from 'react';

class Aside extends Component{

    constructor(props){
        super(props)
        this.state = {
            nutri:[]
        }
    }
    
    componentDidMount(){
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

        fetch(url)
            .then((r)=> r.json())
            .then((json)=>{
                let state = this.state;
                state.nutri = json;
                this.setState(state)
            })
    }

    render(){
        return(
            <div className="container">

                {this.state.nutri.map((item)=>{
                    return(
                        <article key={item.id} className="text-center">
                            <strong>{item.titulo}</strong>
                            <img className="img-fluid" src={item.capa}/>
                            <p>{item.subtitulo}</p>
                            <a className="btn btn-light">Acessar</a>
                            <hr/>
                        </article>

                    );
                })}

            </div>
        );
    }
}

export default Aside;
//https://sujeitoprogramador.com/rn-api/?api=posts