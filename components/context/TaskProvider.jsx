import AsyncStorage from '@react-native-async-storage/async-storage';

import { createContext, useEffect, useState } from 'react';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const TASK_STORAGE_KEY = 'fokusTasks';

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await AsyncStorage.getItem(TASK_STORAGE_KEY);
        if (data) {
          setTasks(JSON.parse(data));
        }
      } catch (error) {
        console.log('Erro ao carregar tarefas:', error);
      } finally {
        setIsLoaded(true);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const saveTasks = async (tasks) => {
      try {
        await AsyncStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(tasks));
      } catch (error) {
        console.log('Erro ao salvar tarefas:', error);
      }
    };
    if (isLoaded) {
      saveTasks(tasks);
    }
  }, [tasks, isLoaded]);

  const addTasks = (description) => {
    setTasks((oldState) => {
      return [...oldState, { description, id: oldState.length + 1 }];
    });
  };

  const toggleTaskCompleted = (id) => {
    setTasks((oldState) => {
      return oldState.map((t) => {
        if (t.id == id) {
          return { ...t, completed: !t.completed };
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

  const updateTask = (id, newDescription) => {
    setTasks((oldState) => {
      return oldState.map((t) => {
        if (t.id === id) {
          return { ...t, description: newDescription };
        }
        return t;
      });
    });
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTasks, toggleTaskCompleted, deleteTask, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
