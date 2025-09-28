import type React from "react"

type NumberProps = {
  lable: any//muze byt jak cislo tak string
  onClick: (value: number) => void//funkce co prijima cislo a nic nevraci
}

const Number: React.FC<NumberProps> = ({lable, onClick}) => {


  return (
    <>
      <button onClick={() => onClick(lable)}>
        {lable}
      </button>
    </>
  )
}

export default Number
