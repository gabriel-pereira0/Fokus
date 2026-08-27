import { Text, StyleSheet, Pressable } from 'react-native';

const FokusButton = ({ onPress, icon, title, outline }) => {
  return (
    <Pressable
      style={[styles.button, outline && styles.outlineButton]}
      onPress={onPress}
    >
      {icon}
      <Text style={[styles.buttonText, outline && styles.outlineText]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default FokusButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 8,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineButton: {
    backgroundColor: 'trasparent',
    borderColor: '#B872FF',
    borderWidth: 2,
  },
  buttonText: {
    textAlign: 'center',
    color: '#021123',
    fontSize: 18,
    fontWeight: 'bold',
  },
  outlineText: {
    color: '#B872FF',
  },
});
