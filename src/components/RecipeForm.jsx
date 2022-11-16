function RecipeForm({handleFormSubmit}){
    return(
        <form className="recipe-form" onSubmit={handleFormSubmit}>
            <div className="input-group">
                <label htmlFor="title">Nadpis</label>
                <input type="text" placeholder='Zadejte nadpis receptu...' />
            </div>
            <div className="input-group">
                <label htmlFor="description">Nadpis</label>
                <textarea placeholder="Zadejte popis receptu..." name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button className="btn">Potvrdit</button>
        </form>
    )
}


export default RecipeForm