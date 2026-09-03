import { router, useLocalSearchParams } from 'expo-router';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import useTaskContext from '../../../components/context/useTaskContext';
import { useEffect, useState } from 'react';
import FokusButton from '../../../components/FokusButton/FokusButton';
import { IconSave } from '../../../components/Icons/Icons';

const EditTask = () => {
  const { id } = useLocalSearchParams();
  const { tasks, updateTask } = useTaskContext();

  const taskToEdit = tasks.find((task) => task.id === Number(id));
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (tasks.length > 0 && taskToEdit) {
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleUpdateTask = () => {
    if (!description.trim()) {
      return;
    }
    updateTask(taskToEdit.id, description);
    router.navigate('/tasks/tasks');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar tarefa:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <FokusButton
        title='Salvar'
        onPress={handleUpdateTask}
        icon={<IconSave />}
      />
    </View>
  );
};

export default EditTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021123',
    padding: 24,
    justifyContent: 'center',
    gap: 16,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    minHeight: 100,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
