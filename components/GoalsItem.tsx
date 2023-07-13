import React, {FC} from 'react';
import {FlatList, View, Text, StyleSheet, Pressable} from 'react-native';

interface IGoalList {
  text: string;
  key: string;
}
interface IGoalsItem {
  goalsList: IGoalList[];
  onDeleteAction: (key: string) => void;
}

const GoalsItem: FC<IGoalsItem> = ({
  goalsList,
  onDeleteAction,
}): JSX.Element => {
  return (
    <FlatList
      data={goalsList}
      renderItem={itemData => (
        <Pressable
          onPress={() => onDeleteAction(itemData.item.key)}
          style={({pressed}) => pressed && styles.pressedItem}
          android_ripple={{color: '#cccccc'}}>
          <View style={styles.goalItems} key={itemData.index}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
          </View>
        </Pressable>
      )}
      keyExtractor={item => item.key}
      alwaysBounceVertical={false}
    />
  );
};

const styles = StyleSheet.create({
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
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalsItem;
