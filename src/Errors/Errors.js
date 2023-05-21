import React from "react";
import '../Errors/Errors.css'

const Errors = ({ errorMessage }) => {
    return (
      <div>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </div>
    );
  };
  
  export default Errors;