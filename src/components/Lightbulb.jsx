// Import useState
import { useState } from "react";
// let color = "on";

export const Lightbulb = () => {
  // Initialize the state for on/off
  const [theme, setTheme] = useState(true);
  //const [color, setColor] = useState("on");

  
  const toggleLight = () => {
    // Toggle the on/off state
    //alternative 1
    /*if (theme === "on") {
      setTheme("crazy");
    } else if (theme === "crazy") {
      setTheme("off");
    } else {
      setTheme("on");
    }*/
    
//alternative 2
    /*if (theme) {
      setTheme(false);
      setColor("off")
    } else {
      setTheme(true);
      setColor("on")
    }*/

    // Ternary operator alternative 3
    setTheme(theme === "on" ? "off" :  "on" )
    //setTheme(theme ? false : true);
  };
  //console.log(theme);

  return (
    <div className="lightbulb-container">
        <div className={`lightbulb ${theme}`} onClick={toggleLight}>
        <div className="bulb"></div>
      </div>
      <p>{theme}</p>
    </div>
  );
};
