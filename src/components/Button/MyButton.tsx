import React, {FC} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

interface MyButtonProps {
  text: string;
  color: string;
  action: (event: GestureResponderEvent) => void;
}

const MyButton: FC<MyButtonProps> = ({text, color, action}) => {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: color,
        borderRadius: 8,
      }}
      activeOpacity={0.8}
      onPress={action}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'purple',
    borderRadius: 8,
  },
  text: {color: 'white'},
});

export default MyButton;
