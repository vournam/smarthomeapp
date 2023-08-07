import React, { useEffect, useState } from "react";
import "./style.css";

const Progress = (props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        goToNextPage();
      }
    }, 15); // Adjust the interval for smoother progress animation

    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  const goToNextPage = () => {
    props.nextStep();
  };

  return (
    <div className="progress-background">
      <p className="progress-text">Το προσαρμοσμένο πρόγραμμά σας βρίσκεται σε εξέλιξη...</p>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Progress;
