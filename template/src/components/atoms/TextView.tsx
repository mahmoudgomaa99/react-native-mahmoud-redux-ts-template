import {Platform, StyleSheet, Text} from 'react-native';
import React from 'react';

const TextView = ({title, ...props}: any) => {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {title}
    </Text>
  );
};

export default TextView;

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
  },
});
