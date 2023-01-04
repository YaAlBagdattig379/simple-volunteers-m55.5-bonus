import React,{useState,useEffect} from 'react';
import Activity from '../Activity/Activity';
import './Main.css'

const Main = () => {
    const [volunteers,setVolunteers] = useState([]);
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setVolunteers(data));
    },[])
    console.log(volunteers.length)
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