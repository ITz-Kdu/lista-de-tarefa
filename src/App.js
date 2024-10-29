// src/App.js

import React, { useState } from 'react';
import './App.css'; // Adicione estilos conforme necessário

const App = () => {
  const [task, setTask] = useState('');
  const [wish, setWish] = useState('');
  const [email, setEmail] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [wishList, setWishList] = useState([]);

  const handleAddTask = () => {
    if (task) {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };

  const handleAddWish = () => {
    if (wish) {
      setWishList([...wishList, wish]);
      setWish('');
    }
  };

  const handleRemoveTask = (index) => {
    const newTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(newTaskList);
  };

  const handleRemoveWish = (index) => {
    const newWishList = wishList.filter((_, i) => i !== index);
    setWishList(newWishList);
  };

  const handleSendInvitation = () => {
    if (email) {
      alert(`Convite enviado para ${email}!`);
    } else {
      alert('Por favor, insira um email válido.');
    }
  };

  return (
    <div className="container">
      <h2>Tarefas</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button onClick={handleAddTask}>Adicionar Tarefa</button>
      <ul>
        {taskList.map((t, index) => (
          <li key={index}>
            {t} <button onClick={() => handleRemoveTask(index)}>Remover</button>
          </li>
        ))}
      </ul>

      <h2>Desejos</h2>
      <input
        type="text"
        value={wish}
        onChange={(e) => setWish(e.target.value)}
        placeholder="Adicionar item à lista de desejos"
      />
      <button onClick={handleAddWish}>Adicionar Desejo</button>
      <ul>
        {wishList.map((w, index) => (
          <li key={index}>
            {w} <button onClick={() => handleRemoveWish(index)}>Remover</button>
          </li>
        ))}
      </ul>

      <h2>Enviar Convite</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu email"
      />
      <p>Venha celebrar com a gente! Haverá música, comida deliciosa e muita diversão. Traga seu melhor sorriso e venha se divertir!</p>
      <p><strong>DATA</strong>: 25/10/2025</p>
      <p><strong>Local</strong>: Neo Quimica Arena</p>
      <p><strong>Horário</strong>: 16:00 horas</p>
      <button onClick={handleSendInvitation}>Enviar Convite</button>
    </div>
  );
};

export default App;
