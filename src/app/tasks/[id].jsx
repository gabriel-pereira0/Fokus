import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

const EditTask = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Precisamos editar essa tarefa com id: {id}</Text>
    </View>
  );
};

export default EditTask;
