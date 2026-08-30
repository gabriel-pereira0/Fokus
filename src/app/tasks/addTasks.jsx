import {
  Pressable,
  Text,
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { router } from 'expo-router';
import { IconSave } from '../../../components/Icons/Icons';
import useTaskContext from '../../../components/context/useTaskContext';
import { useState } from 'react';

export default function AddTasks() {
  const [description, setDescription] = useState();
  const { addTasks } = useTaskContext();

  const submitTask = () => {
    if (!description) {
      return;
    }
    addTasks(description);
    setDescription('');
    router.navigate('/tasks/tasks');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.inner}>
        <Text style={styles.text}>Adicionar uma tarefa:</Text>
        <Text style={styles.label}>Em que você está trabalhando?</Text>
        <TextInput
          style={styles.input}
          numberOfLines={10}
          multiline={true}
          value={description}
          onChangeText={setDescription}
        />
        <View style={styles.actions}>
          <Pressable style={styles.button} onPress={submitTask}>
            <IconSave />
            <Text> Salvar</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021123',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 26,
  },
  inner: {
    backgroundColor: '#98A0A8',
    width: '90%',
    borderRadius: 8,
    padding: 16,
    gap: 32,
  },
  label: {
    fontWeight: 600,
    fontSize: 18,
  },
  input: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    height: 100,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
