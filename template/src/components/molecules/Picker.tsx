import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';
import MixedText from './MixedText';
import Svg, {TName} from 'atoms/Svg';
import RNPickerSelect, {PickerSelectProps} from 'react-native-picker-select';

type TType = 'primary' | 'secondry' | 'matches';
type TItem = {
  label: string;
  value: any;
};
type TProps = {
  type: TType;
  data: TItem[];
  loading?: boolean;
  touched: any;
  errors: any;
  name: string;
  handleChange: any;
  handleBlur: any;
  title?: string;
  values: any;
  setFieldValue: any;
  modalizeRef?: any;
  required?: boolean;
  stylingProp?: any;
  svgName?: TName;
  placeholder?: any;
  onDonePressed?: any;
};

const Picker = ({
  type,
  data,
  modalizeRef,
  title,
  stylingProp,
  svgName,
  onDonePressed,
  ...props
}: TProps) => {
  return (
    <View style={stylingProp}>
      <View style={styles[`${type}_iosButtonWrapper`]}>
        {type !== 'matches' && (
          <MixedText title={title || ''} required={props.required || false} />
        )}
        {Platform.OS === 'ios' ? (
          <RNPickerSelect
            {...props}
            placeholder={{
              label: props.placeholder || 'Select an Item',
              value: null,
            }}
            value={props.values[props.name]}
            onValueChange={value => props.setFieldValue(props.name, value)}
            items={data}
            onDonePress={() => {
              if (onDonePressed) {
                onDonePressed();
              }
            }}
            style={{
              placeholder: {
                color:
                  type === 'matches' ? COLORS.secondery : COLORS.grey,
              },
              inputIOS: {
                ...styles[`${type}_iosButton`],
                borderColor:
                  props.errors[props.name] && props.touched[props.name]
                    ? COLORS.red
                    : COLORS.secondery,
              },
              inputAndroid: {
                ...styles[`${type}_iosButton`],
                borderColor:
                  props.errors[props.name] && props.touched[props.name]
                    ? COLORS.red
                    : COLORS.secondery,
              },
              modalViewMiddle: styles[`${type}_modalHeader`],
              modalViewBottom: styles[`${type}_modalBody`],
              iconContainer: {top: '42%', right: 10},
            }}
            Icon={() => (svgName ? <Svg name={svgName} size={12} /> : <></>)}
          />
        ) : (
          <View style={styles[`${type}_androidWrapper`]}>
            <RNPickerSelect
              {...props}
              placeholder={{
                label: props.placeholder || 'Select an Item',
                value: null,
              }}
              value={props.values[props.name]}
              onValueChange={value => {
                props.setFieldValue(props.name, value);
                if (Platform.OS === 'android' && onDonePressed) {
                  onDonePressed();
                }
              }}
              items={data}
              onDonePress={() => {
                if (onDonePressed) {
                  onDonePressed();
                }
              }}
              style={{
                placeholder: {
                  color:
                    type === 'matches' ? COLORS.secondery : COLORS.grey,
                },
                inputIOS: {
                  ...styles[`${type}_iosButton`],
                  borderColor:
                    props.errors[props.name] && props.touched[props.name]
                      ? COLORS.red
                      : COLORS.secondery,
                },
                inputAndroid: {
                  ...styles[`${type}_iosButton`],
                  borderColor:
                    props.errors[props.name] && props.touched[props.name]
                      ? COLORS.red
                      : COLORS.secondery,
                },
                modalViewMiddle: styles[`${type}_modalHeader`],
                modalViewBottom: styles[`${type}_modalBody`],
                iconContainer: {top: '42%', right: 10},
              }}
              Icon={() => (svgName ? <Svg name={svgName} size={12} /> : <></>)}
            />
          </View>
        )}
        {props.errors[props.name] && props.touched[props.name] && (
          <Text style={styles.errorText}>{props.errors[props.name]}</Text>
        )}
      </View>
    </View>
  );
};

export default Picker;

type TTstyles = {
  primary_iosButton: TextStyle;
  secondry_iosButton: TextStyle;
  primary_iosButtonWrapper: ViewStyle;
  secondry_iosButtonWrapper: ViewStyle;
  primary_modalHeader: ViewStyle;
  secondry_modalHeader: ViewStyle;
  primary_modalBody: ViewStyle;
  secondry_modalBody: ViewStyle;
  errorText: TextStyle;
  matches_iosButton: TextStyle;
  matches_iosButtonWrapper: ViewStyle;
  matches_modalHeader: ViewStyle;
  matches_modalBody: ViewStyle;
  secondry_androidWrapper: ViewStyle;
  matches_androidWrapper: ViewStyle;
  primary_androidWrapper: ViewStyle;
};

const styles: TTstyles = StyleSheet.create({
  secondry_androidWrapper: { borderRadius: 20, overflow: "hidden" },
  matches_androidWrapper: {
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  primary_androidWrapper: { borderRadius: 20, overflow: "hidden" },
  primary_iosButton: {
    borderColor: COLORS.secondery,
    borderWidth: 1,
    padding: 15,
    height: 60,
    marginTop: 5,
    borderRadius: 15,
    justifyContent: "center",
    color: COLORS.white,
  },
  matches_iosButton:
    Platform.OS === "ios"
      ? {
          color: COLORS.primary,
          fontWeight: "600",
          fontSize: 16,
        }
      : {
          color: COLORS.primary,
          fontWeight: "600",
          fontSize: 16,
          height: 40,
          padding: 15,
          justifyContent: "center",
          alignItems: "center",
        },
  matches_iosButtonWrapper:
    Platform.OS === "ios"
      ? {
          backgroundColor: COLORS.primary,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          paddingHorizontal: 30,
          paddingVertical: 8,
        }
      : {
          width: Dimensions.get("window").width * 0.35,
          backgroundColor: COLORS.primary,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        },
  primary_iosButtonWrapper: { marginHorizontal: 10, marginVertical: 10 },
  secondry_iosButtonWrapper: { marginHorizontal: 10, marginVertical: 10 },
  secondry_iosButton: {
    borderColor: COLORS.secondery,
    backgroundColor: COLORS.secondery,
    borderWidth: 1,
    padding: 15,
    height: Platform.OS === "ios" ? 60 : 50,
    marginTop: 5,
    borderRadius: 15,
    justifyContent: "center",
    color: COLORS.white,
  },
  title: {
    color: COLORS.white,
    marginLeft: 5,
    fontFamily: Fonts.RobotoBold,
    fontSize: 16,
  },
  primary_modalHeader: {
    backgroundColor: COLORS.white,
    height: 50,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  matches_modalHeader: {},
  matches_modalBody: {
    backgroundColor: COLORS.secondery,
    color: COLORS.white,
  },
  secondry_modalHeader: {
    backgroundColor: COLORS.white,
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  primary_modalBody: {},
  secondry_modalBody: {
    backgroundColor: COLORS.secondery,
    color: COLORS.white,
  },
  errorText: {
    color: COLORS.red,
    fontSize: 11.5,
    fontWeight: "800",
    marginLeft: 7,
    marginTop: 5,
  },
});
