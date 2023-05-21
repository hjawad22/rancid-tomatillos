import '../handleErrors/Errors.css'

const handleError = ({ errorMessage }) => {
    return (
      <div>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </div>
    );
  };
  
  export default handleError;