import { View, Text, StyleSheet } from 'react-native';

const FokusFooter = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Projeto fictício e sem fins comerciais.{' '}
      </Text>
      <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
    </View>
  );
};

export default FokusFooter;

const styles = StyleSheet.create({
  footer: {
    width: '80%',
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5,
  },
});
