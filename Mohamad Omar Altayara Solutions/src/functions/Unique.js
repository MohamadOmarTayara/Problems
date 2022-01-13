import { useState, useEffect} from "react";




const Unique = ({input, n}) => {

  var [bool, setBool] = useState(true)

  //----------------------------------------------------------------------------------------------------------------------
  //1: Check if a string has all unique characters or not
  useEffect(() => {
    var sorted = input.sort();
    //.sort() is a built in method that uses quick sort  O(nlog(n))
    var i = 0;

    setBool(true);
    while(i < n-1){
      if(sorted[i] === sorted[i+1]){
        //if we find two characters equal than the string is not unique we set the answer to false and break to save time
        setBool(false);
        break;
      }
      i++;
    }
  }, [input, n])

    return(
        <div>
          The string is {bool ? 'unique' : 'not unique'}
        </div>
    )
}

export default Unique;