import {StyleSheet, Switch, SwitchProps} from 'react-native';
import React from 'react';
import COLORS from 'values/colors';

const Switcher = ({...props}: SwitchProps) => {
  return (
    <Switch
      {...props}
      trackColor={{
        false: COLORS.secondery,
        true: COLORS.secondery,
      }}
      ios_backgroundColor={COLORS.secondery}
    />
  );
};

export default Switcher;

const styles = StyleSheet.create({});
