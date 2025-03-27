import { useState } from "react"

export default function Calculator() {
  const buttonStyle = "bg-main-primary hover:bg-main-secondary text-dark-primary cursor-pointer font-bold py-2 px-4 rounded"

  interface dataProps {
    number1: string;
    operand: string;
    number2: string;
  }

  const [data, setData] = useState<dataProps>({number1: "0", operand: "", number2: "0"})

  const numberFormatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 8
  })
  //Adds a digit, decimal point, or operand to the equation
  function addEquationUnit(event: React.MouseEvent<HTMLButtonElement>) {
    const unit = event.currentTarget.innerText
    const whichNumber = data.operand ? "number2" : "number1"
    if (unit === "." && data[whichNumber]?.includes(".")) return //only allow up to 1 decimal point

    if (unit === "+" || unit === "-" || unit === "*" || unit === "/") {
      //if already have number1, operand, and number2, calculate and then add current operand
      if (data.number2) {
        calculate()
      }
      setData(data => {
        return {
          ...data,
          operand: unit
        }
      })
      return
    }

    setData(data => {
      return {
        ...data,
        [whichNumber]: data[whichNumber] === "0" && unit !== "." ? unit : data[whichNumber] + unit
      }
    })
  }

  function calculate() {
    if (data.number1 === "0" || data.operand === "" || data.number2 === "0") return
    setData(data => {
      let result;
      if (data.operand === "+") {
        result = parseFloat(data.number1) + parseFloat(data.number2)
      }else if (data.operand === "-") {
        result = parseFloat(data.number1) - parseFloat(data.number2)
      }else if (data.operand === "*") {
        result = parseFloat(data.number1) * parseFloat(data.number2)
      }else if (data.operand === "/") {
        result = parseFloat(data.number1) / parseFloat(data.number2)
      }
      return {
        number1: result!.toString(),
        operand: "",
        number2: "0"
      }
    })
  }

  function clear() {
    setData({number1: "0", operand: "", number2: "0"})
  }

  return (
    <div className="bg-light-secondary dark:bg-dark-secondary grid grid-cols-4 max-w-64 gap-2 m-auto p-2">
      <div className="col-span-3 py-3 rounded text-right text-2xl dark:text-light-primary">
        {
          data.number2 !== "0" ? numberFormatter.format(parseFloat(data.number2)) :
          data.operand ? data.operand :
          numberFormatter.format(parseFloat(data.number1))
        }
      </div>
      <div className="col-span-1 p-4 rounded"></div>
      <button className={`col-span-1 ${buttonStyle}`} onClick={addEquationUnit}>+</button>
      <button className={`col-span-1 ${buttonStyle}`} onClick={addEquationUnit}>-</button>
      <button className={`col-span-1 ${buttonStyle}`} onClick={addEquationUnit}>/</button>
      <button className={`col-span-1 ${buttonStyle}`} onClick={addEquationUnit}>*</button>
      <button className={`col-span-1 ${buttonStyle}`} onClick={addEquationUnit}>7</button>
      <button className={`col-span-1 ${buttonStyle}`} onClick={addEquationUnit}>8</button>
      <button className={`col-span-1 ${buttonStyle}`} onClick={addEquationUnit}>9</button>
      <button className={`col-span1 row-span-4 ${buttonStyle}`} onClick={calculate}>=</button>
      <button className={`col-span-1 ${buttonStyle}`} onClick={addEquationUnit}>4</button>
      <button className={`col-span-1 ${buttonStyle}`} onClick={addEquationUnit}>5</button>
      <button className={`col-span-1 ${buttonStyle}`} onClick={addEquationUnit}>6</button>
      <button className={`col-span-1 ${buttonStyle}`} onClick={addEquationUnit}>1</button>
      <button className={`col-span-1 ${buttonStyle}`} onClick={addEquationUnit}>2</button>
      <button className={`col-span-1 ${buttonStyle}`} onClick={addEquationUnit}>3</button>
      <button className={`col-span-1 ${buttonStyle}`} onClick={addEquationUnit}>0</button>
      <button className={`col-span-1 ${buttonStyle}`} onClick={addEquationUnit}>.</button>
      <button className={`col-span-1 ${buttonStyle}`} onClick={clear}>C</button>
    </div>
  )
}