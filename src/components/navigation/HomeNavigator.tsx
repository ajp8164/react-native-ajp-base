import { HomeNavigatorParamList } from 'types/navigation';
import HomeScreen from 'components/HomeScreen';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'theme';

const HomeStack = createNativeStackNavigator<HomeNavigatorParamList>();

const HomeNavigator = () => {
  const theme = useTheme();

  return (
    <HomeStack.Navigator
    initialRouteName='Home'
    screenOptions={{
      headerStyle: { backgroundColor: theme.colors.screenHeaderBackground },
      headerTitleStyle: { color: theme.colors.screenHeaderTitle },
      headerTintColor: theme.colors.screenHeaderButtonText,
    }}>
      <HomeStack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
