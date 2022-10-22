import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { Label } from 'reactstrap';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value

        })
    }
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value

        })
    }
    handleLogin = () => {
        console.log("user name: " + this.state.username, "password: " + this.state.password)
        console.log("all state", this.state)
    }
    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content'>
                        <div className='col-12 text-login'>Login</div>
                        <div className="col-12 frorm-group login-input">
                            <Label>Username</Label>
                            <input type='text' className='form-control'
                                placeholder='Enter your username'
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUsername(event)}
                            />
                        </div>
                        <div className="col-12 frorm-group login-input">
                            <Label>Password: </Label>
                            <div className='custom-input-password'>
                                <input
                                    className='form-control'
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    placeholder='Enter your password'
                                    onChange={(event) => { this.handleOnChangePassword(event) }}
                                />
                                <span
                                    onClick={() => { this.handleShowHidePassword() }}
                                ><i className={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i></span>

                            </div>

                        </div>
                        <div className='col-12 '>
                            <button className='btn-login' onClick={() => { this.handleLogin() }}>Login</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-other'>or Login with</span>

                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        language: state.app.language
    }
}

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
