import React from "react";
import compose from "../hoc/compose";
import {connect} from "react-redux";
import withHome from "../hoc/hoc-with-home";

const HomePage = ({...props}) => {

    const { name } = props
    return (
        <div>
            <h1 className="text-center">Привет, { name ? `${name}!` : 'Гость!'}</h1>
        </div>
    )
}

const mapStateToProps = ({login: { auth, user:{name}}}) => {
    return {name, auth}
}

export default compose(
    connect(mapStateToProps),
    withHome)(HomePage)