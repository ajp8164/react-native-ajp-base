import { ContentView } from 'types/content';
import { NavigatorScreenParams } from '@react-navigation/core';
import { UserProfile } from 'types/user';

export enum StartupScreen {
  None = 'None',
  Home = 'Home',
  Welcome = 'Welcome',
}

export type MainNavigatorParamList = {
  Startup: NavigatorScreenParams<StartupNavigatorParamList>;
  Tabs: NavigatorScreenParams<TabNavigatorParamList>;
};

export type HomeNavigatorParamList = {
  Home: undefined;
};

export type SetupNavigatorParamList = {
  About: undefined;
  AppSettings: undefined;
  Content: {
    content: ContentView;
  };
  Setup: {
    subNav?: string;
  };
  UserAccount: undefined;
  UserProfile: {
    userProfile: UserProfile;
  };
};

export type ScanNavigatorParamList = {
  Scan: undefined;
};

export type StartupNavigatorParamList = {
  Welcome: undefined;
};

export type TabNavigatorParamList = {
  HomeTab: undefined;
  ScanTab: undefined;
  SetupTab: {
    screen: string;
    params: object;
  };
};
