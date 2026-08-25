import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
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
        name='tasks/ddTasks'
        options={{
          drawerItemStyle: { display: 'none' },
        }}
      />
    </Drawer>
  );
}
