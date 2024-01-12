// eslint-disable-next-line no-unused-vars
import * as React from "react"
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";


const GoBack = () => {
  const history = useNavigate();

  const handleMoveBack = () => {
    history(-1);
  };
  
    return (
      <div >
        <button className="gobackbutton" type="button" id="goback" onClick={handleMoveBack}><IoMdArrowRoundBack spacing={0} fontSize={30} /></button>
        </div>
    );
  };
  
  export default GoBack;