import React, {Component} from 'react';
import img1 from '../../assets/img1.jpeg'
import '../../assets/style.css'

class SimpleForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            form:{
                login:'',
                password:'',
                sexo: '',
                fraseTexto:''
            }
        }

        this.frases = ['frase1', 'frase2', 'frase3', "frase4"]

        this.changeValue = this.changeValue.bind(this)
        this.cadastrar = this.cadastrar.bind(this)
        this.breakCookie = this.breakCookie.bind(this)

    }
    
    changeValue(e){
        let value = e.target.value
        let form = this.state.form
        form[e.target.name] = value
        this.setState({form:form})
    }

    cadastrar(e){
        const {login, password, sexo} = this.state.form;

        if(login !== '' && password !== '' && sexo !== ''){
            this.setState({error: ''})            
            alert(`Login: ${login} \nPassword: ${password} \nSexo: ${sexo}`)
        } else {
            this.setState({error: 'Oopps'})
        }

        e.preventDefault();
    }
    breakCookie(){
        let state = this.state;
        let random = Math.floor(Math.random() * this.frases.length);
        state.fraseTexto = this.frases[random]
        this.setState(state)
    }

    render(){
        return(
            <div className="container">
                <h2>Login</h2>
                <img src={img1} className="img"/>
                <Botao acao={this.breakCookie}/>
                <h5 className="texto">{this.state.fraseTexto}</h5>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.cadastrar}>
                    Login: <input type="text" name="login" value={this.state.form.login} 
                        onChange={this.changeValue}/>
                    <br/>
                    Password: <input type="password" name="password" value={this.state.form.password}
                        onChange={this.changeValue}/>
                    <br/>
                    Sexo: <select name="sexo" value={this.state.form.sexo} 
                        onChange={this.changeValue}>
                        <option value="">Select</option>
                        <option value="m">M</option>
                        <option value="f">F</option>
                    </select>
                    <br/>
                    <input type="submit" value="Logar"/>
                </form>
                
            </div>
        );
    }
}

class Botao extends Component{
    render(){
        return (
            <div>
                <button onClick={this.props.acao}>Abrir Foto</button>
            </div>
        );
    }
}

export default SimpleForm;