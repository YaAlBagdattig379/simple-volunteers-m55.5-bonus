import React from 'react';
import useVolunteers from '../../Hooks/useVolunteers';
import Activity from '../Activity/Activity';

const Volunteers = () => {
    const [volunteers, setVolunteers] = useVolunteers();
    return (
        <div>
            <h2>All Volunteers</h2>
            <div style={{'margin': '20px','padding':'5px'}}>
                  <input type="text"placeholder='search'style={{'padding':'5px','borderRadius'
                  :'7px'}} />
            </div>
            <div className="activity-container">
                {
                    volunteers.map(activity => <Activity
                        key ={activity._id}
                        activity ={activity}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Volunteers;