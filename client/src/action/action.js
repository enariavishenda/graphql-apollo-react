
const logIn = () => {
    return {
        type: 'LOGIN'
    }
}

const logOut = () => {
    return {
        type: 'LOGOUT'
    }
}

const loginUser = (user) => {
    return {
        type: 'LOGIN_USER',
        payload: user
    }
}

export {
    logIn,
    logOut,
    loginUser
}