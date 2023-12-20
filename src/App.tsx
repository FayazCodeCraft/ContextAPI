import Family from './Components/Family'
import FamilyContextProvider from './context/FamilyContextProvider'

function App() {

  return (
    <FamilyContextProvider>
      <Family />
    </FamilyContextProvider>
  )
}

export default App
