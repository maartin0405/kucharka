import './App.css'
import { useState } from 'react'
import RecipeList from './components/RecipeList'
import RecipeForm from './components/RecipeForm'

function App() {

  const [recipes, setRecipes] = useState([])

  function handleFormSubmit(event) {
    event.preventDefault()
    console.log(event.target, "EVENT")

    const input = event.target[0]
    const textarea = event.target[1]
    

    const obj = {
      title: input.value,
      description: textarea.value,
    }

    setRecipes((prevRecipes) => [...prevRecipes, obj])

    console.log(input.value, textarea.value, "INPUT AND TEXTAREA")
  }



  

  return (
    <div className="container">
        <h1>Nejlepší kuchařka na světe a ve vesmíru!</h1>
        <RecipeForm handleFormSubmit={handleFormSubmit}/>
        <RecipeList recipes={recipes}/>
    </div>
  )
} 

export default App
