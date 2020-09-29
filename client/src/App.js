import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Launches from "./components/lists";
import Launch from "./components/list";
import Header from "./components/header";
import HomePage from "./components/home";
import LoginPage from "./components/login";
import Error from "./components/error";
import compose from "./hoc/compose";
import {connect} from "react-redux";



const client = new ApolloClient({uri: '/graphql'});

class App extends Component {
    render() {
        const {auth} = this.props
        return (
            <ApolloProvider client={client}>
                <Router>
                    <div className="container">
                        <div className="header">
                            <Header/>
                        </div>
                        <div className="services">
                        <Switch>
                                <Route exact path="/" component={HomePage}/>
                                <Route exact path="/login" component={LoginPage}/>
                                <Route exact path="/launch" component={auth ? Launches : HomePage}/>
                                <Route exact path="/launch/:flight_number" component={auth ? Launch : HomePage}/>
                                <Route component={Error}/>
                        </Switch>
                        </div>
                    </div>
                </Router>
            </ApolloProvider>
        );
    }
}

const mapStateToProps = ({login: {auth}}) => {
    return {auth}
}

export default compose(connect(mapStateToProps))(App)
