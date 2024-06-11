import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, ScrollView, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([
    { key: '1', name: 'Item 1' },
    { key: '2', name: 'Item 2' },
    { key: '3', name: 'Item 3' },
    { key: '4', name: 'Item 4' },
    { key: '5', name: 'Item 5' }
  ]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Hello, React Native!</Text>
      </View>
      <View style={styles.section}>
        <TextInput
          style={styles.input}
          placeholder="Type something..."
          value={text}
          onChangeText={setText}
        />
        <Text>You typed: {text}</Text>
      </View>
      <View style={styles.section}>
        <Image
          style={styles.image}
          source={{ uri: 'https://seeklogo.com/images/R/react-native-logo-221C671C70-seeklogo.com.png' }}
        />
      </View>
      <View style={styles.section}>
        <Button
          title="Press me"
          onPress={() => alert('Button pressed!')}
        />
      </View>
      <View style={styles.section}>
        <FlatList
          data={items}
          renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
          keyExtractor={item => item.key}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;