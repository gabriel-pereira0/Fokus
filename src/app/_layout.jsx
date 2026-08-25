import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: '#021123',
        },
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
        }}
      />
      <Drawer.Screen
        name='pomodoro'
        options={{
          drawerLabel: 'User',
          title: 'overview',
        }}
      />
      <Drawer.Screen
        name='tasks'
        options={{
          drawerLabel: 'Tasks',
          title: 'Tasks',
        }}
      />
      <Drawer.Screen
        name='addTasks'
        options={{
          drawerLabel: 'addTasks',
          title: 'addTasks',
        }}
      />
    </Drawer>
  );
}
