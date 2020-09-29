import React from 'react';
import {connect} from "react-redux";
import compose from "../hoc/compose";
import {bindActionCreators} from "redux";
import {logIn, loginUser} from "../action/action";
import withUsers from "../hoc/hoc-with-user";

import './login.css'


const LoginPage = ({...props}) => {

    const { inputSubmit, inputChange, state } = props

    return (
        <div className="wrapper fadeInDown text-center">
            <h2 className="h2">Пожалуйста войдите</h2>
            <div id="formContent fadeIn first">
                <form onSubmit={inputSubmit}>
                    <input type="text"
                           id="login"
                           className="fadeIn second"
                           placeholder="Name"
                           name="name"
                           onChange={inputChange}
                           value={state.name}/>
                    <input
                        type="password"
                        id="password"
                        className="fadeIn third"
                        placeholder="password"
                        name="password"
                        onChange={inputChange}
                        value={state.password}/>
                    <input type="submit"
                           className="fadeIn fourth"
                           value="Войти"/>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps =
    ({login: {auth, user}}) => {
        return {auth, user}
    }

const mapDispatchToProps = (dispatch) => () => {
    return  bindActionCreators({
        loginUser: loginUser,
        logIn: logIn
    }, dispatch)
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withUsers
)(LoginPage)