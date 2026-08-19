import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        resizeMode='contain'
        source={require('@/assets/imagens/Imagem_foco.png')}
      />
      <View style={styles.actions}>
        <View style={styles.context}>
          <Pressable style={styles.contextButtonActive}>
            <Text style={styles.contextButtonText}>Foco</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.contextButtonText}>Pausa curta</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.contextButtonText}>Pausa Longa</Text>
          </Pressable>
        </View>
        <Text style={styles.timer}>25:00</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.{' '}
        </Text>
        <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#021123',
    gap: 40,
  },
  imagem: {
    width: '90%',
  },
  actions: {
    padding: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32,
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  contextButtonText: {
    fontSize: 12.5,
    color: '#fff',
    padding: 8,
  },
  contextButtonActive: {
    backgroundColor: '#144480',
    borderRadius: 8,
  },
  timer: {
    textAlign: 'center',
    fontSize: 54,
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#021123',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    width: '80%',
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5,
  },
});
