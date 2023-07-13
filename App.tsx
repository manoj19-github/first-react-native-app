/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  // ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';

import {
  Colors,
  // DebugInstructions,
  // Header,
  // LearnMoreLinks,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {useState} from 'react';
import GoalsItem from './components/GoalsItem';
// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

interface IGoalList {
  text: string;
  key: string;
}

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  const [enteredText, setEnteredText] = useState<string>('');
  const [goalList, setGoalList] = useState<IGoalList[]>([]);
  const addGoalHandler = (): void => {
    setGoalList(prev => [
      ...prev,
      {text: enteredText, key: new Date().getTime().toString()},
    ]);
    setEnteredText('');
  };
  const goalInputHandler = (enteredText: string): void => {
    console.log('ENTERED text : ', enteredText);
    setEnteredText(enteredText);
  };

  const onDeleteGoal = (key: string): void => {
    setGoalList(prev => prev.filter(self => self.key !== key));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredText}
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.goalTitle}>List of Goals ....</Text>
        <GoalsItem goalsList={goalList} onDeleteAction={onDeleteGoal} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 8,
    paddingHorizontal: 15,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '75%',
    marginRight: 8,
    borderRadius: 4,
    padding: 5,
  },
  title: {
    fontSize: 20,
    marginHorizontal: 15,
    color: 'green',
    borderWidth: 2,
  },
  goalTitle: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#3385ff',
  },
  goalsContainer: {
    flex: 4,
    flexDirection: 'column',
  },
  goalText: {
    color: '#fff',
  },
  goalItems: {
    backgroundColor: '#3385ff',
    paddingVertical: 7,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
  },
});

export default App;
