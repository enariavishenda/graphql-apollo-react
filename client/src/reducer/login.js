
const logIn = (state, action) => {
    if (state === undefined) {
        return {
            auth: false,
            user: {
                name: '',
                password: ''
            }
        }
    }
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state.login,
                auth: true,
            }
        case 'LOGOUT':
            return {
                auth: false,
                user: {
                    name: '',
                    password: ''
                }
            }
        case 'LOGIN_USER':
            return {
                ...state.login,
                user: action.payload
            }

        default:
            return state.login
    }
}

export default logIn