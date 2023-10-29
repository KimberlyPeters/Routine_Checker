import React from "react";
import logo from "../../public/logo.svg";


const dashboard = () => {
  return (
    <>
     <div className="navbox">
      <div className="navigation">
        <div className="navgroup">
          <div className="navsamantha">Projects</div>
          <div className="navtext-wrapper">Settings</div>
          <div className="navdiv">Help</div>
        </div>
        <div className="navgroup-2">
          <div className="navsamantha-2">TASK</div>
          <div className="navoverlap-group-wrapper">
            <div className="navoverlap-group">
              <div className="navsamantha-3">T</div>
            </div>
          </div>
        </div>
        <div className="navoverlap-wrapper">
          <div className="navoverlap">
            <div className="navsamantha-4">Search everything</div>
            <img className="navimg" alt="Group" src="logo.svg" />
          </div>
        </div>
      </div>
      </div>
      <div className="assignbox">
      <div className="create-new-card">
        <img className="line" alt="Line" src="line-3.svg" />
        <div className="group">
          <div className="rectangle-copy">
            <div className="overlap-group">
              <div className="homepage-design">+</div>
            </div>
          </div>
          {/* <Tag className="basic-tag" /> */}
          <div className="overlap-wrapper">
            <div className="overlap">
              <div className="rectangle" />
              <div className="text-wrapper">UI Design</div>
            </div>
          </div>
        </div>
        <div className="div">
          <div className="vector-wrapper">
            <img className="vector" alt="Vector" src="vector.svg" />
          </div>
          <img className="img" alt="Rectangle copy" src="rectangle-2-copy-8.png" />
          <div className="homepage-design-2">Samantha</div>
          <div className="overlap-group-wrapper">
            <div className="homepage-design-wrapper">
              <div className="homepage-design">+</div>
            </div>
          </div>
        </div>
        <div className="overlap-2">
          <img className="menu-close-small" alt="Menu close small" src="close-small.svg" />
          <div className="group-2">
            <div className="homepage-design-3">Create New Card</div>
            <div className="div-wrapper">
              <div className="homepage-design-4">What is the task?</div>
            </div>
          </div>
        </div>
        <div className="group-3">
          <div className="overlap-3">
            <div className="homepage-design-5">Done</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default dashboard;
