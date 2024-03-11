import { AppTheme, useTheme } from 'theme';
import React, { useContext } from 'react';
import {
  SetupNavigatorParamList,
  TabNavigatorParamList,
} from 'types/navigation';

import { AuthContext } from 'lib/auth';
import { ChatAvatar } from 'components/molecules/ChatAvatar';
import { CompositeScreenProps } from '@react-navigation/core';
import { Divider } from '@react-native-ajp-elements/ui';
import { ListItem } from 'components/atoms/List';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';
import { appConfig } from 'config';
import { makeStyles } from '@rneui/themed';
import { selectUserProfile } from 'store/selectors/userSelectors';
import { useSelector } from 'react-redux';

export type Props = CompositeScreenProps<
  NativeStackScreenProps<SetupNavigatorParamList, 'Setup'>,
  NativeStackScreenProps<TabNavigatorParamList>
>;

const SetupScreen = ({ navigation, route: _route }: Props) => {
  const theme = useTheme();
  const s = useStyles(theme);
 
  const auth = useContext(AuthContext);
  const userProfile = useSelector(selectUserProfile);
 
  return (
    <ScrollView
      style={theme.styles.view}
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior={'automatic'}>
      <Divider text={'ACCOUNT'}/>
      {userProfile ? (
        <ListItem
          title={userProfile.name || userProfile.email || 'My Account'}
          leftImage={
            <ChatAvatar userProfile={userProfile} avatarStyle={s.avatar} />
          }
          position={['first', 'last']}
          onPress={() => navigation.navigate('UserAccount')}
        />
      ) : (
        <ListItem
          title={'Sign In or Sign Up'}
          leftImage={'account-circle-outline'}
          leftImageType={'material-community'}
          position={['first', 'last']}
          onPress={() => auth.presentSignInModal()}
        />
      )}
      <Divider text={'MISCELLANEOUS'}/>
      <ListItem
        title={'App Settings'}
        position={['first']}
        leftImage={'cog-outline'}
        leftImageType={'material-community'}
        onPress={() => navigation.navigate('AppSettings')}
      />
      <ListItem
        title={`About ${appConfig.appName}`}
        position={['last']}
        leftImage={'information-outline'}
        leftImageType={'material-community'}
        onPress={() => navigation.navigate('About')}
      />
      <Divider/>
    </ScrollView>
  );
};

const useStyles = makeStyles((_theme, __theme: AppTheme) => ({
  avatar: {
    left: -3,
    top: 1,
  },
}));

export default SetupScreen;
