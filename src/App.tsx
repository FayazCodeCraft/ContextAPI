import Counter from './Components/Counter'
import CounterContextProvider from './context/CounterContextProvider'
import './index.css'
function App() {
  return (
    <CounterContextProvider>
      <Counter/>
    </CounterContextProvider>
  )
}

export default App
