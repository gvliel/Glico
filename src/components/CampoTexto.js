import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function CampoTexto({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  multiline = false,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, multiline && styles.multiline]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#8E7D9B"
        keyboardType={keyboardType}
        multiline={multiline}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    color: '#E7DDF0',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#261B31',
    borderColor: '#65447D',
    borderRadius: 8,
    borderWidth: 1,
    color: '#FFFFFF',
    fontSize: 16,
    padding: 12,
  },
  multiline: {
    height: 90,
    textAlignVertical: 'top',
  },
});
