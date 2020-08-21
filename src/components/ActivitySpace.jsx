import React, { useState } from 'react';
import ReactDom from 'react-dom';
import Activity from './Activity'

function ActivitySpace(props) {

    const [act, changeAct] = useState("");

    // Updates the value of "act", (the activity to be added)
    function updateField(event) {
        const val = event.target.value;
        changeAct(val);
    }

    // Sends the activity in the form of a String to App.jsx,
    // where it is to be added to list.
    function sendAct(event) {
        event.preventDefault();
        props.addAct(act);;
        changeAct(""); 
    }

    return (<div>
        <form>
            <input
                onChange={updateField}
                name="newActivity"
                placeHolder="Activity..."
                autoComplete="off"
                value={act} />


            <button onClick={sendAct}>+</button>
        </form>
    </div>);
}

export default ActivitySpace;