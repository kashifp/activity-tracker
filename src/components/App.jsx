import React, { useState } from 'react';
import ReactDom from 'react-dom';
import Header from "./Header"
import Activity from './Activity';
import ActivitySpace from "./ActivitySpace"

function App() {

    const [list, changeList] = useState([]);

    // Adds activities taken from ActivitySpace form to list
    function addActivity(newActivity) {
        changeList(prev => {
            return [...prev, newActivity];
        });
    }


    return <div><Header /><ActivitySpace addAct={addActivity} />
        <div>{list.map((theActivity, index) => {
            return (<Activity activity={theActivity} key={index} />);
        })}</div>
    </div>;
}

export default App;

