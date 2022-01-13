
  import { useState, useEffect} from "react";

  const Consecutive = ({input, n}) => {
  
    var [bool, setBool] = useState(false);
    var [err, setErr] = useState('');
    
    
    //5: Check if Array Elements are Consecutive        EASIER IF ARRAY SORTED  
    useEffect(() => {
        
        var i = 0;
        while(i < n-1){

          if(input[i]+1 !== input[i+1])
            return setBool(false);
            
          i++;
        }
        setBool(true);
    }, [input, n])
  
    
      return(
          <div className="results">
            {bool ? '- Elements of the array are consecutive': '- Elements of the array are not consecutive'}
          </div>
      )
  }
  
  export default Consecutive;