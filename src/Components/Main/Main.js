// import React,{useState,useEffect} from 'react';
import useVolunteers from '../../Hooks/useVolunteers';
import Activity from '../Activity/Activity';
import Volunteers from '../Volunteers/Volunteers';
import './Main.css'

const Main = () => {
    const [volunteers,setVolunteers] = useVolunteers();
    return (
        <div>
            <h3>volunteers activies : {volunteers.length}</h3>
            <div className="activity-container">
              {
                volunteers.map(activity => <Activity
                     key={activity._id} 
                     activity = {activity}
                ></Activity>)
               }
            </div>
            
        </div>
    );
};

export default Main;