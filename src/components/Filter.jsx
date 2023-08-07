import PropTypes from 'prop-types';
  
  const Filter = ({filter, setFilter, setSort})=>{
    return (
        <div className="filter">
            <h2>Filtrar</h2>
            <div className="filter-options">
                <div>
                    <p>Status</p>
                    <select name="" value={filter} onChange={(e)=> setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incompletede">incompletas</option>
                    </select>
                    </div>
                    <div>
                        <p>Ordem alfabética:</p>
                        <button onClick={()=>setSort('Asc')}>Asc</button>
                        <button onClick={()=>setSort('Des')}>Des</button>
                    </div>
                </div>
            </div>
    );
  };
  Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
    setSort: PropTypes.func.isRequired,
  };
  
  export default Filter