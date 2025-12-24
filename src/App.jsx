import { useEffect, useState } from "react"
import Page from "./components/flipUnit"
import FlipUnit from "./components/flipUnit"

function App() {
  const [value, setValue] = useState(86400)
  const [isFlipping, setIsFlipping] = useState(false)

   const days = Math.floor((value / 86400)*8)
    const hours = Math.floor((value % 86400) / 3600)
    const minutes = Math.floor((value % 3600) / 60)
    const seconds = value % 60

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFlipping(true)

      setValue(prev => {
        if (prev <= 0) return 0
        return prev - 1
      })
      setTimeout(() => {
        setIsFlipping(false)
      }, 600)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-b 
        from-[hsl(236,21%,26%)] 
        via-[hsl(235,16%,14%)] 
        to-[hsl(234,17%,2%)]
        text-[14px]
        [font-family:'Red Hat Text',sans-serif]
      "
    >
      <div className="min-h-screen bg-[url('src/assets/bg-stars.svg')] bg-cover flex flex-col">

        {/* main */}
        <div className="text-3xl mx-4 sm:mx-8 flex-1 text-center my-8">
          <div className="font-bold text-white py-10 sm:py-20">
            WE'RE  LAUNCHING  SOON 
          </div>

          {/* clock */}
          <div className="flex gap-7 justify-center">
           <FlipUnit value={days} label="Days"/>

            <FlipUnit value={hours} label="HOURS"/>

           <FlipUnit value={minutes} label="MINUTES"/>
            
            <FlipUnit value={seconds} label="SECONDS"/>
          </div>
        </div>

        {/* footer */}
        <footer className="flex bg-[url(src/assets/pattern-hills.svg)] h-25 bg-repeat-round items-center justify-center">
          <div className="flex gap-6">
            <img src="src/assets/icon-facebook.svg" />
            <img src="src/assets/icon-instagram.svg" />
            <img src="src/assets/icon-pinterest.svg" />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
