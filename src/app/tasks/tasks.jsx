import { Text, StyleSheet, View, FlatList } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskItem from '../../../components/TaskItem/taskItem';
import FokusButton from '../../../components/FokusButton/FokusButton';
import { IconPlus } from '../../../components/Icons/Icons';
import FokusFooter from '../../../components/Footer/FokusFooter';
import useTaskContext from '../../../components/context/useTaskContext';

const Tasks = () => {
  const { tasks, deleteTask, toggleTaskCompleted } = useTaskContext();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.containerTasks}>
          <View style={styles.tasks}>
            <FlatList
              data={tasks}
              renderItem={({ item }) => (
                <TaskItem
                  key={item.id}
                  text={item.description}
                  completed={item.completed}
                  onPressDelete={() => deleteTask(item.id)}
                  onToggleComplete={() => toggleTaskCompleted(item.id)}
                  onPressEdit={() => router.navigate(`/tasks/${item.id}`)}
                />
              )}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
              ListHeaderComponent={
                <Text style={styles.text}>Lista de Tarefas:</Text>
              }
              ListFooterComponent={
                <View style={styles.buttonContainer}>
                  <FokusButton
                    title={'Adicionar nova tarefa'}
                    icon={<IconPlus outline />}
                    outline
                    onPress={() => router.navigate('/tasks/addTasks')}
                  />
                </View>
              }
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  safeArea: { backgroundColor: '#021123', flex: 1 },
  container: {
    flex: 1,
    gap: 40,
    alignItems: 'center',
    paddingTop: 40,
  },
  containerTasks: { gap: 24, width: '90%' },
  text: {
    textAlign: 'center',
    fontSize: 26,
    color: '#fff',
    marginBottom: 16,
  },
  tasks: {
    gap: 8,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
});
