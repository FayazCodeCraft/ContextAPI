import Family from './Components/Family'

function App() {
  const familySecret={
    familyName:"xyz",
    onlyParentCanSee:()=>{
      return `The xyz are the best!`;
    },
    onlyGrandChildrenShouldKnow: () => {
      return `They are the best!`;
    }
  }
  return (
   <Family secret={familySecret}/>
  )
}

export default App
