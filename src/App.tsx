import './App.css'
import Buttons from './components/Buttons'
import DisplayNumber from './components/DisplayNumber'
import React, { useState } from 'react'

function App() {

    const [selectedNumbers, setSelectedNumbers] = useState<string>("");


    const handleClick = (value: number) => {
      setSelectedNumbers((prev) => prev ? prev + value.toString() : value.toString());//prida hodnotu na konec
    };

    const handleDelete = () => {
      setSelectedNumbers((prev) => prev.slice(0, -1));//odstrani posledni hodnotu
    }
    const handleClear = () => {
      setSelectedNumbers("");//vycisti vse
    }
    
    const handleEqual = () => {
      try {
        const result = eval(selectedNumbers);//vyhodnoti vyraz
        setSelectedNumbers(result.toString());//nastavi vysledek
      } catch (error) {
        setSelectedNumbers("Error");
      }
    }




  return (

    <div className='calculator'>

      <div className='display'>
        <DisplayNumber display={selectedNumbers}/>
      </div>
      <div className="operators">
        <Buttons onClick={handleClick} lable={"+"} />
        <Buttons onClick={handleClick} lable={"-"} />
        <Buttons onClick={handleClick} lable={"*"} />
        <Buttons onClick={handleDelete} lable={"<"} />


      </div>

      <div><Buttons onClick={handleClick} lable={7} /><Buttons onClick={handleClick} lable={8} /><Buttons onClick={handleClick} lable={9} />
      <Buttons onClick={handleClick} lable={"/"} />
      </div>
      <div><Buttons onClick={handleClick} lable={4} /><Buttons onClick={handleClick} lable={5} /><Buttons onClick={handleClick} lable={6} />
      <Buttons onClick={handleClick} lable={"("} />
      </div>
      <div><Buttons onClick={handleClick} lable={1} /><Buttons onClick={handleClick} lable={2} /><Buttons onClick={handleClick} lable={3} />
      <Buttons onClick={handleClick} lable={")"} />
      </div>
      <div>
        <Buttons onClick={handleClear} lable={"C"} />
        <Buttons onClick={handleClick} lable={0} />
        <Buttons onClick={handleClick} lable={"."} />
        <Buttons onClick={handleEqual} lable={"="} />
      </div>
    </div>

  )
}

export default App
