import './App.css';
import Unique from './functions/Unique';
import ScndLargest from './functions/ScndLargest';
import MinElement from './functions/MinElement';
import Consecutive from './functions/Consecutive';
import PairedElements from './functions/PairedElements';
import LCS from './functions/LCS';
import {useState} from "react";

function App() {
  const [strInput, setstrInput] = useState('');

  const [intInput, setIntInput] = useState('');
  const [sumInput, setSumInput] = useState();

  const [stringA, setStringA] = useState('');
  const [stringB, setStringB] = useState('');

  const [uniqueResults, setuniqueResults] = useState(false);
  const [minResults, setminResults] = useState(false);
  const [showLCS, setLCSResults] = useState(false);  

  //replacing all white space found with nothing (using regex) then spliting to get each character of the strings 
  var splitedStr = strInput.replace(/\s+/g, '').split('');
  
  var strA = stringA.replace(/\s+/g, '').split('');

  var strB = stringB.replace(/\s+/g, '').split('');

//handle form submit
  const StrSubmit = (e) => {
    e.preventDefault();

    setuniqueResults(true)
    return;
  }
//handle form submit
  const LCSSubmit = (e) => {
    e.preventDefault();

    setLCSResults(true);
    return;
  }


//-----------------------------------------------
  var sum, arr;
  //replacing al extra white space with only one white space plus removing the space in the start and end
  // then parsing the strings into floats
  arr = intInput.replace(/\s+/g, ' ').trim().split(' ').map(function(nb) {
    if(isNaN(parseFloat(nb))){
        
        return null;
    }else{
      return parseFloat(nb);
    }
  });

  sum = parseFloat(sumInput);
//sorts numbers ascending order inclusind negative numbers
  function sortNumber(a, b) {
    return a - b;
  }
  arr = arr.sort(sortNumber);

  //hndle submit form
  const IntSubmit = (e) => {
    e.preventDefault();

    setminResults(true)
    return;
  }

  return (
      <section className="App">
      <h1 className='title'>Interview Problems</h1>
      <div className='top'>
        <form onSubmit={StrSubmit}>
        <h2 >Unique</h2>
        <p className='nb'>white spaces are not taken into consideration</p>

        <input placeholder="Insert String" autoComplete="off" onChange={(e) => setstrInput(e.target.value)} />
        <button onClick={() => {setuniqueResults(true)}}>Submit</button>

        <h4 className='text'>Does the string "{strInput}" contain only unique characters?</h4>
         
         <p className = 'answer'>Answer:</p>
        { uniqueResults ? 
            <div>
              <Unique input = {splitedStr} n = {splitedStr.length} /> 
            </div>: 
          null 
        }
        </form>
      </div>

      <div className='mid'>
        <form onSubmit={IntSubmit}>
          <h2 className='subTitle'>Integers input here</h2> 
          <p className='mid-err'>Cannot input other than numbers!</p>
          <input placeholder="Insert multiple numbers" autoComplete="off" onChange={(e) => setIntInput(e.target.value)} />

          {/* <label> */}
          sum =
          <input placeholder="Insert one number" onChange={(e)=> setSumInput(e.target.value)}></input>
          {/* </label> */}
          <button type="submit">Submit</button>

          {minResults ?
            <div className='result'>
              <MinElement input = {arr} />
              <ScndLargest input = {arr} n= {arr.length}/>
              <PairedElements input = {arr} n= {arr.length} k = {sum}/>
              <Consecutive input = {arr} n= {arr.length} />
            </div>
            : null 
          }
        </form>
      </div>

      <div className='bot'>
        <form onSubmit={LCSSubmit}>

          <h2 className='subTitle'>Longest Common Subsequence</h2>
          <p className='nb'>white spaces are not taken into consideration</p>
          <input placeholder="String A" onChange={(e) => setStringA(e.target.value)} />
          <input placeholder="String B" onChange={(e) => setStringB(e.target.value)} />
          <button type="submit">Submit</button>

          {showLCS ?
          <div className='LCS'>
            <LCS
              input1 = {strA} 
              input2 = {strB} 
              n1 = {strA.length}  
              n2= {strB.length}
              />
          </div>
          : null }
          </form>



      </div>
    
      </section>
  );
}





export default App;
