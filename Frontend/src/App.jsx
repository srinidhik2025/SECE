import Students from './components/Students'
import Count from './hooks/Count'
import {Button} from '@/components/UI/button'

const App = () => {
  let name="Srinidhi"
  return (
    <>
    <div className="text-center text-cyan-300 bg-blue-700">App</div>
    <div className=" ">App</div>
    <button variant="destructive">Delete</button>
    <button variant="outline">Outline</button>
    <button variant="secondary">Secondary</button>
    <button variant="ghost">Ghost</button>

    <Button>Click me</Button>
    <div>App</div>
    <h1>Welcome {name}!</h1>
    <Students name="user" age={20} />
    <Count />
    </>
  )
}

export default App
