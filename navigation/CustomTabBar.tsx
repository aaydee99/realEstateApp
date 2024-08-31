// File: /navigation/CustomTabBar.tsx

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {/* Render each tab button */}
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined
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

        let iconName: string;
        switch (route.name) {
          case 'Account':
            iconName = isFocused ? 'account-circle' : 'account-circle-outline';
            break;
          case 'Search':
            iconName = isFocused ? 'magnify' : 'magnify';
            break;
          case 'Chat':
            iconName = isFocused ? 'chat' : 'chat-outline';
            break;
          case 'Services':
            iconName = isFocused ? 'bell' : 'bell-outline';
            break;
          default:
            iconName = 'circle';
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}
          >
            <MaterialCommunityIcons name={iconName} size={24} color={isFocused ? '#00D6BE' : 'gray'} />
            <Text style={[styles.label, isFocused ? styles.activeLabel : null]}>{`${label}`}</Text>
          </TouchableOpacity>
        );
      })}

      {/* Floating Action Button (FAB) */}
      <TouchableOpacity
        style={styles.fabContainer}
        onPress={() => console.log('FAB Pressed')}
      >
        <View style={styles.fab}>
          <MaterialCommunityIcons name="plus" size={30} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1f1f1f',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: 'gray',
  },
  activeLabel: {
    fontSize: 12,
    color: '#00D6BE',
  },
  fabContainer: {
    position: 'absolute',
    bottom: 30,
    left: '55%',
    transform: [{ translateX: -30 }],
    zIndex: 10, // Ensure FAB is above other elements
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#00D6BE',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
});

export default CustomTabBar;
