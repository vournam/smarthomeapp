import React, { useEffect } from "react";
import "./style.css";

const Progress = (props) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            goToNextPage();
        }, 1500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const goToNextPage = () => {
        props.nextStep();
    };

    return (
        <div className="progress-background">
            <p className="progress-text">Το προσαρμοσμένο πρόγραμμά σας βρίσκεται σε εξέλιξη...</p>
        </div>
    );
};

export default Progress;
