
import PropTypes from "prop-types";
const Tarefa = ({ tarefa, removeTarefa, completeTarefa }) => {
  return (
    <div
      className="tarefa"
      style={{ textDecoration: tarefa.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{tarefa.text}</p>
        <p className='category'>({tarefa.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completeTarefa(tarefa.id)}>
          Completar
        </button>
        <button className="remove" onClick={() => removeTarefa(tarefa.id)}>
          Excluir
        </button>
      </div>
    </div>
  );
};
Tarefa.propTypes = {
  tarefa: PropTypes.object.isRequired,
  removeTarefa: PropTypes.func.isRequired,
  completeTarefa: PropTypes.func.isRequired,
};


export default Tarefa;
