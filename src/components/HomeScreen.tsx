import { AppTheme, useTheme } from 'theme';

import { EmptyView } from 'components/molecules/EmptyView';
import { HomeNavigatorParamList } from 'types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { makeStyles } from '@rneui/themed';

export type Props = NativeStackScreenProps<HomeNavigatorParamList, 'Home'>;

const HomeScreen = ({ navigation: _navigation, route: _route }: Props) => {
  const theme = useTheme();
  const s = useStyles(theme);

  return (
    <View style={theme.styles.view}>
      <EmptyView info message={'Home'} details={'This is the Home screen.'} />
    </View>
  );
};

const useStyles = makeStyles((_theme, __theme: AppTheme) => ({
  // Place screen styles here
}));

export default HomeScreen;
