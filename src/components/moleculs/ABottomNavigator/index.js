import React from 'react';
import {LogBox, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';
import {AlumniTabItems} from '../../atoms';
LogBox.ignoreAllLogs();

const ABottomNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <AlumniTabItems
            title={label}
            active={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </View>
  );
};

export default ABottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 13,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 5.7,
    shadowRadius: 0,
    elevation: 10,
  },
});
