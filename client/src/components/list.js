import React, {Component, Fragment} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {Link} from 'react-router-dom';


const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export class Launch extends Component {
    render() {
        let {flight_number} = this.props.match.params;
        flight_number = parseInt(flight_number);
        return (
            <Fragment>
                <Query query={LAUNCH_QUERY} variables={{flight_number}}>
                    {({loading, error, data}) => {
                        if (loading) return <h4 className="text-center">Загрузка...</h4>;
                        if (error) console.log(error);

                        const {
                            mission_name,
                            flight_number,
                            launch_year,
                            launch_success,
                            rocket: {rocket_id, rocket_name, rocket_type}
                        } = data.launch;

                        return (
                            <div>
                                <h1>
                                    <span>Миссия:</span> {mission_name}
                                </h1>
                                <h4>Подробности запуска</h4>
                                <ul>
                                    <li>
                                        Номер запуска: {flight_number}
                                    </li>
                                    <li>
                                        Год запуска: {launch_year}
                                    </li>
                                    <li>
                                        Состояние запуска:{' '}
                                        <span>
                                            {launch_success ? 'Успешно' : 'Провалено'}
                                        </span>
                                    </li>
                                </ul>

                                <h4>Детали ракеты</h4>
                                <ul>
                                    <li>Идентификатор ракеты: {rocket_id}</li>
                                    <li>
                                        Название ракеты: {rocket_name}
                                    </li>
                                    <li>
                                        Тип ракеты: {rocket_type}
                                    </li>
                                </ul>
                                <hr/>
                                <Link to="/" className="button">
                                    Назад
                                </Link>
                            </div>
                        );
                    }}
                </Query>
            </Fragment>
        );
    }
}

export default Launch;