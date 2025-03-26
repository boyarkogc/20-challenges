import { useState, useEffect } from "react"

export default function Stopwatch() {
  const [elapsedTime, setElapsedTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setElapsedTime(elapsedTime => elapsedTime + 10)
      }, 10)
      return () => clearInterval(timer)
    }
  }, [isRunning])

  function handleReset() {
    setIsRunning(false)
    setElapsedTime(0)
  }

  function formatTime(milliseconds: number): string {
    const formattedTime = new Date(milliseconds)
    return `${formattedTime.getMinutes().toString().padStart(2, "0")}:${formattedTime.getSeconds().toString().padStart(2, "0")}:${(formattedTime.getMilliseconds() / 10).toString().padStart(2, "0")}` 
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-light-secondary dark:bg-dark-secondary rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-dark-primary dark:text-light-primary mb-4">Stopwatch</h2>
      <div className="text-5xl font-mono bg-light-primary text-dark-primary dark:bg-dark-primary dark:text-light-primary
      py-6 px-8 rounded-lg shadow-inner w-full text-center mb-6">
        {formatTime(elapsedTime)}
      </div>
      <div className="flex justify-around w-full">
        <button 
          className="min-w-[120px] bg-main-primary hover:bg-main-secondary text-dark-primary cursor-pointer font-bold py-2 px-4 rounded"
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="min-w-[120px] bg-main-primary hover:bg-main-secondary text-dark-primary cursor-pointer font-bold py-2 px-4 rounded" onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}