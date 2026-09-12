import { View, Text, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';
import FokusButton from '../../components/FokusButton/FokusButton';
import FokusFooter from '../../components/Footer/FokusFooter';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInner}>
        <Image
          resizeMode='contain'
          source={require('@/assets/Logo_e_Favicons/Logo.png')}
        />
        <View style={styles.inner}>
          <Text style={styles.title}>
            Otimize sua {'\n'}produtividade,{'\n'}
            <Text style={styles.bold}>mergulhe no que{'\n'} importa</Text>
          </Text>

          <Image
            resizeMode='contain'
            source={require('@/assets/images/Imagem_tela_inicial.png')}
          />
          <FokusButton
            title={'Quero iniciar!'}
            onPress={() => router.navigate('/pomodoro')}
          />
        </View>
        <FokusFooter />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021123',
  },
  containerInner: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    gap: 40,
  },
  inner: {
    gap: 16,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
});
