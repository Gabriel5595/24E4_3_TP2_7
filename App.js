import { View, StyleSheet, FlatList } from 'react-native';
import Item from './components/Item';

const App = () => {

  return (
    <View style={styles.container}>
      <Item title="Item A" />
      <Item title="Item B" />
      <Item title="Item C" />
      <Item title="Item D" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',

    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
});

export default App;
