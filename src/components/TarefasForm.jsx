import { useState } from "react";
import PropTypes  from "prop-types";


const TarefaForm = ({addTarefa})=>{
    const [value, setValue ] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(value, category)
    if(!value || !category) return;
    //adicionar tarefa
    addTarefa(value, category);
    //limpar os campos
    setValue("");
    setCategory("");
    console.log(value, category);
}
TarefaForm.propTypes = {
    addTarefa: PropTypes.func.isRequired,
  };
 return (<div className="form-tarefa">
        <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit}>      
         <input type="text" name="" id="" placeholder="Digite o título " value={value} 
         onChange={(e)=> setValue(e.target.value)}/>
        <select name="category" id="" value={category}
         onChange={(e)=> setCategory(e.target.value)}>
            <option value="Trabalho" id="">Trabalho</option>
            <option value="Pessoal" id="">Pessoal</option>
            <option value="Estudos" id="">Estudos</option>
        </select>
        <button type="submit">Criar tarefa</button>
        </form>
 
    </div>
    );
};


export default TarefaForm;