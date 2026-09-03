import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import TaskProvider from '../../components/context/TaskProvider';

export default function Layout() {
  return (
    <TaskProvider>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: '#021123',
          },
          headerShadowVisible: false,
          headerTintColor: '#fff',
          drawerStyle: {
            backgroundColor: '#021123',
          },
          drawerLabelStyle: {
            color: '#fff',
          },
        }}
      >
        <Drawer.Screen
          name='index'
          options={{
            drawerLabel: 'Home',
            title: 'overview',
            headerShown: false,
            drawerItemStyle: { display: 'none' },
          }}
        />
        <Drawer.Screen
          name='pomodoro'
          options={{
            drawerLabel: 'Timer',
            title: '',
          }}
        />
        <Drawer.Screen
          name='tasks/tasks'
          options={{
            drawerLabel: 'Lista de Tarefas',
            title: '',
          }}
        />
        <Drawer.Screen
          name='tasks/addTasks'
          options={{
            drawerItemStyle: { display: 'none' },
            title: '',
            headerLeft: () => {
              return (
                <Ionicons
                  name='arrow-back'
                  size={24}
                  color='#fff'
                  style={{ marginLeft: 16 }}
                  onPress={() => router.navigate('/tasks/tasks')}
                />
              );
            },
          }}
        />
        <Drawer.Screen
          name='tasks/[id]'
          options={{
            drawerLabel: 'Edit Task',
            title: 'Editar Tarefa',
            headerShown: false,
            drawerItemStyle: { display: 'none' },
          }}
        />
      </Drawer>
    </TaskProvider>
  );
}
