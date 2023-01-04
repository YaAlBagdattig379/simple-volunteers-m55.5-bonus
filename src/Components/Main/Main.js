import React,{useState,useEffect} from 'react';
import useVolunteers from '../../Hooks/useVolunteers';
import Activity from '../Activity/Activity';
import Volunteers from '../Volunteers/Volunteers';
import './Main.css'

const Main = () => {
    // const [volunteers,setVolunteers] = useVolunteers();
    const [searchResults, setSearchResults] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect( () =>{
        console.log('inside dependency !')
        fetch('data.json')
        .then(res => res.json())
        .then(data =>{
            const match = data.filter(d => d.title.includes(searchText));
            setSearchResults(match);
        })
    },[searchText])
    const handleSearchChange = event =>{
        setSearchText(event.target.value);
    }
    /*
      const handleSearchChange2 = event =>{
        const searchText = event.target.value;
        const match = volunteers.filter(v => v.title.includes(searchText));
        setSearchResults(match);
    }
    */
    return (
        <div>
            <h3>volunteers activies : {searchResults.length}</h3>
            <div style={{'margin': '20px','padding':'5px'}}>
                  <input onChange={handleSearchChange} type="text"placeholder='search'style={{'padding':'5px','borderRadius'
                  :'7px'}} />
            </div>
            <div className="activity-container">
              {
                searchResults.map(activity => <Activity
                     key={activity._id} 
                     activity = {activity}
                ></Activity>)
               }
            </div>
            
        </div>
    );
};

export default Main;