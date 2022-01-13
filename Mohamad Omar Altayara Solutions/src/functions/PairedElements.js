import '../App.css'
  import { useState, useEffect} from "react";

  const PairedElements = ({input, n, k}) => {
  
    const [result, setResult] = useState('')
    //----------------------------------------------------------------------------------------------------------------------
    //4: Find all pairs of elements from an array whose sum is equal to a given number  EASIER AND BETTER PERFORMANCE IF ARRAY SORTED  
     useEffect(() => {
        //array should be sorted first for this to work
        setResult('');
        var output ='';
        var low = 0;
        var high = n - 1;    
        //to print: the pairs are: 
        while (low < high) {
            if (input[low] + input[high] === k) {
                output += input[low] + " + " + input[high] + " / ";
            }
            if (input[low] + input[high] > k) { // condition suggests that arr[high] will no longer be used
                high--;
            }
            else { // condition suggests that arr[low] will no longer be used
                low++;
            }
        }
        setResult(output);
        //in total time complexity is O(nlog(n)) ( this function is O(n) and sorting is O(nlog(n))     
    }, [input, n, k])
  
      return(
          <div className="results">
            {(result === '')? <p> - There are no paired elements equal to {k} </p> : <p>- The pairs are: {result}</p>}
          </div>
      )
  }
  
  export default PairedElements;