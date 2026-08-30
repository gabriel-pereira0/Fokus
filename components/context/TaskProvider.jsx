import { createContext, useState } from 'react';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [task, setTasks] = useState([]);

  const addTasks = (description) => {
    console.log('tarefa vai ser adicionada');
    setTasks((oldState) => {
      return [...oldState, { description, id: oldState.length + 1 }];
    });
  };

  const toggleTaskCompleted = (id) => {
    setTasks((oldState) => {
      return oldState.map((t) => {
        if (t.id == id) {
          t.complete = !t.completed;
        }
        return t;
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((oldState) => {
      return oldState.filter((t) => t.id != id);
    });
  };
  return (
    <TaskContext.Provider
      value={{ task, addTasks, toggleTaskCompleted, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
