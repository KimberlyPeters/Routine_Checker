import React from "react";
import logo from "../../public/logo.svg";


const dashboard = () => {
  return (
    <>
     <div className="navbox">
      <div className="navigation">
        <div className="group">
          <div className="samantha">Projects</div>
          <div className="text-wrapper">Settings</div>
          <div className="div">Help</div>
        </div>
        <div className="group-2">
          <div className="samantha-2">TASK</div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="samantha-3">T</div>
            </div>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="samantha-4">Search everything</div>
            <img className="img" alt="Group" src="group-2.png" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default dashboard;
