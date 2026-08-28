import { Pressable, Text, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSave } from '../../../components/Icons/Icons';

export default function AddTasks() {
  return (
    <SafeAreaView>
      <Text>Adicionar uma tarefa:</Text>
      <View>
        <Text>Em que você está trabalhando?</Text>
        <TextInput />
        <Pressable>
          <IconSave />
          <Text> Salvar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
