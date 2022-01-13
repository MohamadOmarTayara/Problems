
  import { useState, useEffect} from "react";

  const ScndLargest = ({input, n}) => {
  
    var [scnd, setScnd] = useState();
    var [error, setError] = useState(true);
    //3: Find the  second largest number in an array of integers           EASIER IF ARRAY SORTED
     useEffect(() => {
      setError(true);
        
     var i = n-1;
        while(i > 0){
          if(input[i] === input[i-1]){ // checking if last two or more numbers are the same
            i--; 
          }else{    // if not then its the second largest number
            setError(false)
            return setScnd(input[i-1]);
          }
        }
        
     return setScnd(input[i]); // array contains the same number (to be handled with input)
          
        
    }, [input, n])

    //in total time complexity is O(nlog(n)) ( this function is O(1) and sorting is O(nlog(n)
    //we could have a better performance if its not sorted (single loop). 
    //However we will anyways sort the array for the upcoming problems for better performance so this would be a better choice

  
      return(
          <div className="results">
            -  {error? 'There is no second largest element in the array' : ('The second largest element in the array is ' + scnd)}
          </div>
      )
  }
  
  export default ScndLargest;