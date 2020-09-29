import React, {Component} from "react";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {Link} from 'react-router-dom'
import {logOut} from "../action/action";

class Header extends Component {

    onLogout = (u) => {
        u.preventDefault()
        this.props.logOut()
    }

    render() {
        const { login: {auth, user: {name}} } = this.props
        const authLinks = (
            <form>
                <div className="button"
                     onClick={this.onLogout}>
                    Выйти
                </div>
            </form>
        )
        const guestLinks = (
            <form>
                <Link className="button header-text" to="/login">
                    Вход
                </Link>
            </form>
        )
        return (
            <nav className="header-item">
                <h3 className="header-text">Центр управления полетами</h3>
                <div className="header-text">{name ? name : 'Гость'}</div>
                <div>
                    { auth ? authLinks : guestLinks }
                </div>
            </nav>

        )
    }
}

const mapStateToProps = ({login}) => {
    return {
        login
    }
}

const mapDispatchToProps = (dispatch) => () => {
    return bindActionCreators({logOut}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)