import React from 'react';
import {Link} from 'react-router-dom';

export default function LaunchItem({launch: {flight_number, mission_name, launch_date_local, details, links}}) {
    console.log(links.mission_patch)
    return (
        <Link className="service" to={`/launch/${flight_number}`}>
            <img src={links.mission_patch}/>
            <div className="service">
                <div>
                    <h4>
                        Миссия:{' '}
                        <span>
                            {mission_name}
                        </span>
                    </h4>
                    <div>
                        Дата запуска: {launch_date_local}
                    </div>
                    <div>
                        Подробности: {details}
                    </div>
                </div>
            </div>
        </Link>
    );
}