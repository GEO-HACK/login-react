import { useState } from 'react' 
import LoginRegister from './components/LoginRegister/loginRegister'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <LoginRegister />
    </div>
 

    </>
  )
}

export default App
