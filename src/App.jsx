import { useState } from 'react';

import Tarefa from './components/Tarefa';
import TarefaForm from './components/TarefasForm';
import Search from './components/Search';
import Filter from './components/Filter';

import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      text: "Criar funcionalidade no sistema de cadastro",
      category: "Trabalho",
      isCompleted: false
    },
    {
      id: 2,
      text: "Ir ao mercado",
      category: "Pessoal",
      isCompleted: false
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false
    },
    {
      id: 4,
      text: "Aula de inglês",
      category: "Estudos",
      isCompleted: false
    }
  ]);

const [search, setSearch] = useState("");

const [filter, setFilter]= useState("All");
const [sort, setSort]= useState("Asc");

const addTarefa = (text, category)=>{

  const newTarefas = [...tarefas,{
    id: Math.floor(Math.random()*10000),
    text,
    category,
    isCompleted: false
  } ]
  setTarefas(newTarefas);
}
const removeTarefa= (id) =>{
  const newTarefas = [...tarefas]
  const filterTarefas = newTarefas.filter(tarefa =>
    tarefa.id != id ? tarefa: null
    );
    setTarefas(filterTarefas);

};
const completeTarefa = (id)=>{
const newTarefas=[...tarefas]
newTarefas.map((tarefa)=>tarefa.id === id? tarefa.isCompleted= !tarefa.isCompleted: tarefa)
setTarefas(newTarefas)
};
  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter  filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className='lista-tarefas'>
        {tarefas
        .filter((tarefa)=>filter==='All' ? true: filter === 'Completed' ? tarefa.isCompleted: !tarefa.isCompleted)
        .filter((tarefa)=>tarefa.text.toLowerCase().includes(search.toLowerCase()) )
        .sort((a,b)=> sort === 'Asc' 
        ? a.text.localeCompare(b.text)
         : b.text.localeCompare(a.text) )
        .map((tarefa) => (
        <Tarefa tarefa={tarefa} key={tarefa.id} removeTarefa={removeTarefa} completeTarefa={completeTarefa}/>
        ))}
      </div>
      <TarefaForm addTarefa={addTarefa} />
    </div>
  );
  
}

export default App
