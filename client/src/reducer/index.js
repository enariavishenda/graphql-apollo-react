import logIn from "./login";

const reducer = (state, action) => {
    return {
        login: logIn(state, action)
    }
}

export default reducer