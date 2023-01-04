import React, { useEffect } from 'react';
import {useState} from 'react';
import useVolunteers from '../../Hooks/useVolunteers';
import Activity from '../Activity/Activity';

const Volunteers = () => {
    // const [volunteers, setVolunteers] = useVolunteers();
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
    return (
        <div>
            <h2>All Volunteers</h2>
            <div style={{'margin': '20px','padding':'5px'}}>
                  <input onChange={handleSearchChange} type="text"placeholder='search'style={{'padding':'5px','borderRadius'
                  :'7px'}} />
            </div>
            <div className="activity-container">
                {
                    // volunteers.map(activity => <Activity
                    // searchResults.map(activity => <Activity
                    searchResults.map(activity => <Activity
                        key ={activity._id}
                        activity ={activity}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Volunteers;