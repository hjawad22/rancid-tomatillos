import React, { Component } from 'react';
import '../handleErrors/Errors.css'

const NewComponent = ({ errorMessage }) => {
    return (
      <div>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </div>
    );
  };
  
  export default NewComponent;