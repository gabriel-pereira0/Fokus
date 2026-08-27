import { Text, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskItem from '../../../components/TaskItem/taskItem';
import FokusButton from '../../../components/FokusButton/FokusButton';
import { IconPlus } from '../../../components/Icons/Icons';
import FokusFooter from '../../../components/Footer/FokusFooter';

const Tasks = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.containerTasks}>
          <Text style={styles.text}>Lista de Tarefas:</Text>
          <View style={styles.tasks}>
            <TaskItem completed text='estudar react' />
            <TaskItem text='estudar typescript' />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <FokusButton
            title={'Adicionar nova tarefa'}
            icon={<IconPlus outline />}
            outline
            onPress={() => router.navigate('/tasks/addTasks')}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <FokusFooter />
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
  },
  tasks: {
    gap: 8,
  },
  buttonContainer: {
    width: '90%',
    alignItems: 'stretch',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
});
