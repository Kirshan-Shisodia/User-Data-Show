import './BackButton.css'
import { useNavigate  } from "react-router-dom";


function BackButton(){
    
    const navigate  = useNavigate()
    

    return(
        <div>
            <button className='backButton' onClick={() => navigate('/')}>
            Back
            </button>
        </div>
    );
}

export default BackButton