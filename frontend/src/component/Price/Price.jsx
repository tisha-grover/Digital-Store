import React from "react";
import Slider from "@mui/material/Slider";
function Price() {
   const [range, setRange] = React.useState([5, 30]);
   function handleChanges(event, newValue) {
      setRange(newValue);
   }
   return (
      <div style = {{ width: "32rem", padding: "20px" }}>
         <h3> Select the Price </h3>
         <Slider value = {range} onChange = {handleChanges} valueLabelDisplay="auto"/>
         The selected range is {range[0]} - {range[1]}
      </div>
   );
}
export default Price;