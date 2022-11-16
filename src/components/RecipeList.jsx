function RecipeList({recipes}){


const obj ={
    title: "Recept na špagety",
    rating: "a",
    description: "",
    author: "",
}

const { title: titul = "Recept na mufiny", author: autor = "Jana Nováková"  } = obj



    return(
        <>
        <h2>List receptů</h2>
        <div></div>
        {recipes.length > 0 && recipes.map((recipes, index) => (
            <div key={`recipe-${index}`}>
            <h3>{recipes.title}</h3>
            <p>{recipes.description}</p>
            </div>
            ))}
        </>
     )
}
export default RecipeList