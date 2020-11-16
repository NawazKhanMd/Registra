import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
export const Header = ({icon}) => {
    const [path, setpath] = useState('/');
    const history = useHistory();
    useEffect(() => {
        setpath(history.location.pathname);
    }, [history.location.pathname])
    return (
        <div className="header">
            <div className="display-flex align-items-center">
                <span className="main-link">{path == '/' ? "Personal Info" : path == '/Office' ? 'Office Details' : 'Confimation'}</span>
            </div>
            <div className="actions">
                <span className="sub-link">{path == '/' ? "User" : 'ARC'}</span>
                {icon}
            </div>
        </div>
    );
}
