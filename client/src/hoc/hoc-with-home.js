import React, {Component} from 'react';

const withHome = (View) => {
    return class extends Component {

        componentDidMount() {
            if (this.props.auth) {
                this.props.history.push('/launch')
            }
        }

        UNSAFE_componentWillReceiveProps(nextProps) {
            if (nextProps.auth) {
                this.props.history.push('/')
            }
        }

        render() {
            const {name} = this.props
            return <View name={name}/>
        }
    }
}

export default withHome