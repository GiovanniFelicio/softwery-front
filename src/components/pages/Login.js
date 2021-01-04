import React, {Component} from 'react';

class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
        }

    }
    

    render(){
        return(
            <div className="container">
                <div className="login-wrap customscroll d-flex align-items-center flex-wrap justify-content-center pd-20">
                    <div className="login-box bg-white box-shadow pd-30 border-radius-5">
                        <img src="" alt="login" className="login-img"/>
                        <h2 className="text-center mb-30">LogIn</h2>
                        <form method="POST">
                            <div className="input-group custom input-group-lg">
                                <input type="text" className="form-control" name="username" placeholder="Login"/>
                                <div className="input-group-append custom">
                                    <span className="input-group-text"><i className="fa fa-user" aria-hidden="true"></i></span>
                                </div>
                            </div>
                            <div className="input-group custom input-group-lg">
                                <input type="password" className="form-control" name="password" placeholder="**********"/>
                                <div className="input-group-append custom">
                                    <span className="input-group-text"><i className="fa fa-lock" aria-hidden="true"></i></span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="input-group">
                                        <input className="btn btn-outline-primary btn-lg btn-block" type="submit" value="Sign In"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="forgot-password padding-top-10"><a href="#">Forgot Password</a></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;