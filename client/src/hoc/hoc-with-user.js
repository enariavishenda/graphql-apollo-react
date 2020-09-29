import React, {Component} from 'react';


const withUsers = (View) => {

    return class extends Component {

        state = {
            name: '',
            password: '',
        }

        componentDidMount() {
            if (this.props.auth) {
                this.props.history.push('/')
            }
        }

        inputChange = (label) => {
            this.setState({
                [label.target.name]: label.target.value
            })
        }

        inputSubmit = (label) => {
            label.preventDefault()
            const user = {
                name: this.state.name,
                password: this.state.password
            }
            this.props.logIn()
            this.props.loginUser(user)
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps.auth) {
                this.props.history.push('/')
            }
        }

        render() {
            return <View state={this.state}
                         inputChange={this.inputChange}
                         inputSubmit={this.inputSubmit}
            />
        }
    }
}
export default withUsers