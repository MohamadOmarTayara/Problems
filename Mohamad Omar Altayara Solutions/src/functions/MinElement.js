import '../App.css'
  import { useState, useEffect} from "react";

  const MinElement = ({input}) => {
  
    var [min, setMin] = useState();

    //2: Find the minimum element in an array of integers          EASIER IF ARRAY SORTED
    useEffect(() => {
        return setMin(input[0]);
    }, [input])

    //in total time complexity is O(nlog(n)) ( this function is O(1) and sorting is O(nlog(n)
    //we could have a better performance if its not sorted (single loop). 
    //However we will anyways sort the array for the upcoming problems for better performance so this would be a better choice

  
      return(
          <div  className="results">
            <p>- The smallest element in the array is {min}</p>
          </div>
      )
  }
  
  export default MinElement;