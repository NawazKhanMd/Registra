import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { updateStage } from '../../ReduxFiles/actions';
export const Steppers = ({ steps, links }) => {

    const [path, setpath] = useState('/');

    const stage = useSelector(state => state.GData.stage)
    const [activeStage, setActiveStage] = useState(stage);
    const history = useHistory();

    useEffect(() => {
        setpath(history.location.pathname);
        switch (history.location.pathname) {
            case '/':
                setActiveStage(0)
                updateStage(0)
                break;
            case '/Office':
                setActiveStage(1)
                updateStage(1)
                break;
            case '/Confirm':
                setActiveStage(2)
                updateStage(2)
                break;
            default:
                break;
        }
    }, [history.location.pathname])

    useEffect(() => {
        setActiveStage(stage)
    }, [stage])

    const handleStepUp = (index) => {
        if (index <= activeStage) {
            history.push(links[index])
            updateStage(index)
            setActiveStage(index)
        }
    }

    return (
        <div className="stepper_container">
            <div className="stepper">
                <ul className="nav">
                    {steps.map((item, index) =>
                        <li key={index} className={activeStage == index ? "active" : activeStage > index ? 'completed' : 'disabled'} onClick={() => handleStepUp(index)}>
                            <a className="cursor-pointer">
                                <span className="round-tab">{index + 1}</span>
                                <span className="tab_title">{item}</span>
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}
