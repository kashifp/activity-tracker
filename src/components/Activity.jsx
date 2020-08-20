import React, { useState } from 'react';
import ReactDom from 'react-dom';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

function Activity(props) {

    const [hours, changeHours] = useState(0);
    const [minutes, changeMin] = useState(0);
    const [seconds, changeSec] = useState(0);
    const [run, changeRun] = useState(false);




    function startTime() {


        let watch = null;

        if (run == false) {



            let hr = hours;
            let min = minutes;
            let sec = seconds;

            watch = setInterval(() => {
                if (run == false) {
                    if (sec != 59) {
                        changeSec((seconds) => (seconds + 1));
                        sec += 1;
                    } else {
                        if (min != 59) {
                            changeMin((minutes) => (minutes + 1));
                            min += 1
                        } else {

                            changeHours((hours) => (hours + 1));
                            changeMin((minutes) => 0);
                            hr += 1;
                            min = 0;
                        }
                        changeSec((seconds) => 0);
                        sec = 0;
                    }
                }
                if (run == true) {
                    clearInterval(watch);
                    changeRun(false);
                }
            }, 100);
        }
    }


    function stopTime() {
        changeRun(true);
    }

    function aler() {
        alert("how are you");
        changeRun(!run);
    }

    return (<div className="activity-block">
        <h2>{props.activity} Time: {hours <= 9 ? 0 : null}{hours}:{minutes <= 9 ? 0 : null}{minutes}:{seconds <= 9 ? 0 : null}{seconds}</h2>
        <button onClick={startTime}><PlayArrowIcon /></button>
        <button onClick={stopTime}><PauseIcon /></button>
        <button onClick={aler}>Reset</button>
    </div>);
}

export default Activity;