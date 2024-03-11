import { Platform, StatusBar } from 'react-native';
import React, { useEffect } from 'react';

import HomeNavigator from './HomeNavigator';
import Icon from 'react-native-vector-icons/FontAwesome6';
import ScanNavigator from './ScanNavigator';
import SetupNavigator from './SetupNavigator';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import { TabNavigatorParamList } from 'types/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'theme';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const TabNavigator = () => {
  const theme = useTheme();

  useEffect(() => {
    StatusBar.setBarStyle(
      theme.mode === 'light' ? 'dark-content' : 'light-content',
    );

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(theme.colors.white);
      SystemNavigationBar.setNavigationColor(
        theme.colors.hintGray,
        theme.mode === 'light' ? 'dark' : 'light',
        'navigation',
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme.mode]);

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.brandSecondary,
        tabBarInactiveTintColor: theme.colors.lightGray,
        tabBarActiveBackgroundColor: theme.colors.activeTabBackground,
        tabBarInactiveBackgroundColor: theme.colors.inactiveTabBackground,
        tabBarStyle: {
          backgroundColor: theme.colors.inactiveTabBackground,
          borderTopColor: theme.colors.tabBarBorder,
        },
        tabBarIconStyle: { top: 3 },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <Icon
              name={'house'}
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SetupTab"
        component={SetupNavigator}
        options={{
          tabBarLabel: 'Setup',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <Icon
              name={'gear'}
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ScanTab"
        component={ScanNavigator}
        options={{
          tabBarLabel: 'Scan',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <Icon
              name={'qrcode'}
              color={color}
              size={28}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
