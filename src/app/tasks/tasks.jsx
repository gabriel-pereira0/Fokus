import { Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskItem from '../../../components/TaskItem/taskItem';
import FokusButton from '../../../components/FokusButton/FokusButton';
import { IconPlus } from '../../../components/Icons/Icons';
import FokusFooter from '../../../components/Footer/FokusFooter';

const Tasks = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTasks}>
        <Text style={styles.text}>Lista de Tarefas:</Text>
        <View style={styles.tasks}>
          <TaskItem completed text='estudar react' />
          <TaskItem text='estudar typescript' />
        </View>
      </View>
      <FokusButton
        title={'Adicionar nova tarefa'}
        icon={<IconPlus outline />}
      />
      <FokusFooter />
    </SafeAreaView>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    backgroundColor: '#021123',
    alignItems: 'center',
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
});
