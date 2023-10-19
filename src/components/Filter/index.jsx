const Filter = ({setFilter}) => {

    function handleFilter(e){
        setFilter(e.target.value)

    }

    return ( 
        <div className="select">
            <label htmlFor='typeFilter'>Filter by type: </label>
            <select  onChange={handleFilter} id="typeFilter">
                <option value="all" className="type">All types</option>
                <option value="fire" className="type">Fire</option>
                <option value="flying" className="type">Flying</option>
                <option value="water" className="type">Water</option>
                <option value="grass" className="type">Grass</option>
                <option value="poison" className="type">Poison</option>
                <option value="bug" className="type">Bug</option>
                <option value="electric" className="type">Electric</option>
                <option value="normal" className="type">Normal</option>
                <option value="fairy" className="type">Fairy</option>
                <option value="ice" className="type">Ice</option>
                <option value="rock" className="type">Rock</option>
                <option value="steel" className="type">Steel</option>
                <option value="dark" className="type">Dark</option>
                <option value="fighting" className="type">Fighting</option>
                <option value="ghost" className="type">Ghost</option>

            </select>
        </div> );
}
 
export default Filter;
