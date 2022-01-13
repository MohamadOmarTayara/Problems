
  import { useState, useEffect} from "react";

  const MinElement = ({input1, input2, n1 , n2}) => {
  
    var [result, setResult] = useState();

    
    //----------------------------------------------------------------------------------------------------------------------
    //6: Given two Strings A and B. Find the length of the Longest Common Subsequence of the given Strings
    useEffect(() => {
        console.log(input1);
        console.log(input2);
        var matrix = {};

        for (let i = 0; i <= n1; i++) {
            matrix[i] = [];
        }
        
        console.log(matrix);
        for (let i = 0; i <= n1; i++) {
            for (let j = 0; j <= n2; j++) {
                
                if (i === 0 || j === 0) {
                    matrix[i][j] = 0;
                }
                else if (input1[i - 1] === input2[j - 1]) {
                    matrix[i][j] = matrix[i - 1][j - 1] + 1;
                } else {
                    matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1])
                }
            }
        }

        console.log(matrix);
        return setResult(matrix[n1][n2]);
    }, [input1, input2, n1, n2])
  
      return(
          <div className="sub-LCS">
            The length of the Longest Common subsequence is '{result}'
          </div>
      )
  }
  
  export default MinElement;