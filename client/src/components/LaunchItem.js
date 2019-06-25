import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';

export default function LaunchItem({
  launch: { flight_number, mission_name, launch_date_local, launch_success }
}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h3>
            Mission:{' '}
            <span
              className={classNames({
                'text-success': launch_success,
                'text-danger': !launch_success
              })}
            >
              {mission_name}
            </span>
          </h3>
          <p>
            Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
          </p>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary">Launch Details</button>
        </div>
      </div>
    </div>
  );
}
