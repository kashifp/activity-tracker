import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import ReplayIcon from '@material-ui/icons/Replay';

function Activity(props) {

    const [hours, changeHour] = useState(0);
    const [minutes, changeMin] = useState(0);
    const [seconds, changeSec] = useState(0);
    const [running, changeRun] = useState(false);
    

    useEffect(() => {
        let watch = null;
        if (running) {
            watch = setInterval(() => {
                if (seconds != 59) {
                    changeSec((seconds) => (seconds + 1));
                } else {
                    if (minutes != 59) {
                        changeMin((minutes) => (minutes + 1));
                    } else {
                        changeHour((hours) => (hours + 1));
                        changeMin((minutes) => 0);
                    }
                    changeSec((seconds) => 0);
                }
            }, 1000);
        } else {
            clearInterval(watch);
        }

        return () => clearInterval(watch);
    }, [running, hours, minutes, seconds]);


    function toggleTime() {
        changeRun(!running);
    }

    function reset() {
        changeRun(false);
        changeSec(0);
        changeMin(0);
        changeHour(0);
    }

    return (<div className="activity-block">
        <h2>{props.activity} Time: {hours <= 9 ? 0 : null}{hours}:{minutes <= 9 ? 0 : null}{minutes}:{seconds <= 9 ? 0 : null}{seconds}</h2>
        <button onClick={toggleTime}><PlayArrowIcon /></button>
        <button onClick={toggleTime}><PauseIcon /></button>
        <button onClick={reset}><ReplayIcon /></button>
    </div>);
}

export default Activity;