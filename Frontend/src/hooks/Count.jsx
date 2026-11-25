import { Button } from "@/components/UI/button"
import { useState } from 'react'

const Count = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count+1)}>
        Increase
        </button>
      <button variant="destructive" onClick={()=>setCount(0)}>
        reset
        </button>
    </div>
  )
}
//const Count = () => {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <Button
//         type="button"
//         onClick={() => setCount((currentCount) => currentCount + 1)}
//       >
//         Increase
//       </Button>
//     </div>
//   )
// }

export default Count