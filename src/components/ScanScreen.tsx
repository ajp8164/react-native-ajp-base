import { AppTheme, useTheme } from 'theme';
import { Text, View } from 'react-native';

import CircleButton from 'components/atoms/CircleButton';
import React from 'react';
import { ScannerView } from '@react-native-ajp-elements/ui';
import { makeStyles } from '@rneui/themed';

const ScanScreen = () => {
  const theme = useTheme();
  const s = useStyles(theme);

  const onScan = (data: string) => {
    console.log(`scan data ${data}`);
  };

  const actionA = () => {};

  const actionB = () => {};

  const actionC = () => {};

  return (
    <ScannerView
      onScan={onScan}
      OverlayComponent={
        <View style={s.overlay}>
          <Text style={[s.text, s.title]}>
            {'Scan a QR code'}
          </Text>
          <Text style={[s.text, s.scannedNames]}>
            {'Perform some action'}
          </Text>
          <View style={s.buttonContainer}>
            <CircleButton icon={'a'} text={'Action A'} onPress={actionA}/>
            <CircleButton icon={'b'} text={'Action B'} onPress={actionB}/>
            <CircleButton icon={'c'} text={'Action C'} onPress={actionC}/>
          </View>
        </View>
      }/>
  );
};

const useStyles = makeStyles((_theme, theme: AppTheme) => ({
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    bottom: 40,
    justifyContent: 'space-around',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  scannedNames: {
    position: 'absolute',
    width: '100%',
    bottom: 120,
  },
  text: {
    ...theme.styles.textNormal,
    color: theme.colors.stickyWhite,
    textAlign: 'center',
  },
  title: {
    top: 150,
  },
}));

export default ScanScreen;
