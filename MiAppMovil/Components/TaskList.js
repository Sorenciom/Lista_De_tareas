import React from 'react';
import { View, FlatList } from 'react-native';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, deleteTask }) {
  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <TaskItem task={item} onDelete={() => deleteTask(index)} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
