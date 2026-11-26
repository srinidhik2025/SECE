import { Button } from "@/components/UI/button"
import { useEffect,useState } from 'react'

const Count = () => {
  const [count, setCount] = useState(0)
  const [isCountVisible, setIsCountVisible] = useState(true)
  useEffect(() => {
    console.log("From useEffect");
  }, [])

  return (
    <div>
      {isCountVisible && <h2>Count: {count}</h2>}
      <Button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increase
      </Button>
      <Button variant="destructive" onClick={() => {
        setCount(0)
        setIsCountVisible(true)
      }}>
        Reset
      </Button>
      <Button
        variant="secondary"
        aria-pressed={!isCountVisible}
        onClick={() => setIsCountVisible((isVisible) => !isVisible)}
      >
        {isCountVisible ? 'Hide Count' : 'Show Count'}
      </Button>
    </div>
  )
}

export default Count