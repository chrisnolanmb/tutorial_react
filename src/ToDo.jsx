// import React, { useState } from "react";

// const TodoList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   const addTask = () => {
//     if (newTask.trim() !== "") {
//       setTasks([...tasks, newTask]);
//       setNewTask("");
//     }
//   };

//   const deleteTask = (index) => {
//     const newTasks = [...tasks];
//     newTasks.splice(index, 1);
//     setTasks(newTasks);
//   };

//   return (
//     <div>
//       <h2>Lista de Tareas</h2>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             {task}
//             <button onClick={() => deleteTask(index)}>Eliminar</button>
//           </li>
//         ))}
//       </ul>
//       <div>
//         <input
//           type="text"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//           placeholder="Nueva tarea"
//         />
//         <button onClick={addTask}>Agregar</button>
//       </div>
//     </div>
//   );
// };

// export default TodoList;

import React, { useState } from "react";
import { ListGroup, Form, Button } from "react-bootstrap";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ListGroup>
        {tasks.map((task, index) => (
          <ListGroup.Item key={index}>
            {task}
            <Button
              variant="danger"
              style={{ padding: "10px", marginLeft: "20px" }}
              onClick={() => deleteTask(index)}
            >
              Eliminar
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Nueva tarea"
          />
        </Form.Group>
        <Button variant="primary" onClick={addTask}>
          Agregar
        </Button>
      </Form>
    </div>
  );
};

/*
El código es una lista de tareas simple escrita en React utilizando la biblioteca react-bootstrap. A continuación se detallan las funciones y variables que se utilizan en el código:

useState: es un hook de React que permite agregar estado a un componente funcional. En este caso, se utilizan dos estados: tasks y newTask. tasks es un array que contiene las tareas actuales, mientras que newTask es una cadena que representa la nueva tarea que se está agregando.

addTask: es una función que se llama cuando se hace clic en el botón "Agregar". Verifica que newTask no esté vacío y luego agrega la nueva tarea al array tasks utilizando el operador spread.

deleteTask: es una función que se llama cuando se hace clic en el botón "Eliminar" de una tarea. Recibe el índice de la tarea que se va a eliminar y crea una copia del array tasks utilizando el operador spread. Luego, elimina la tarea correspondiente utilizando el método splice y actualiza el estado de tasks.

return: es la función que devuelve el JSX que se renderiza en la página. Primero, se muestra una lista de tareas utilizando el componente ListGroup de react-bootstrap. Cada tarea se muestra en un ListGroup.Item y se le asigna un botón "Eliminar" que llama a la función deleteTask. Luego, se muestra un formulario que permite agregar una nueva tarea utilizando el componente Form de react-bootstrap. Cuando se hace clic en el botón "Agregar", se llama a la función addTask.

export default TodoList: exporta el componente TodoList para que pueda ser utilizado en otros archivos.
*/

export default TodoList;
