import jss, { StyleSheet } from 'jss';

import { IStoryProps } from './props';

let sheet: StyleSheet;

export default () => {
  const styles = {
    story: {
    },
    display: {
      width: 'calc(100% - 350px)',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      padding: 20,
      position: 'absolute' as 'absolute',
      top: 20,
      left: 20,
      bottom: 20,
    },
    controller: {
      position: 'absolute' as 'absolute',
      top: 20,
      right: 20,
      bottom: 20,
      display: 'flex',
      flexDirection: 'column' as 'column',
      width: 250,
      borderRadius: 6,
      backgroundColor: '#F7F7F7',
      padding: 20,
      textAlign: 'left' as 'left',
    },
    text: {
      fontWeight: 600,
      textTransform: 'uppercase' as 'uppercase',
      lineHeight: 1.5,
      margin: '25px 0px',
      color: '#525f7f',
      borderBottom: '1px solid #525f7f',
      paddingBottom: 10,
      fontSize: '80%',
    },
  };

  const createSheet = () => {
    if (sheet && sheet.classes) {
      removeSheet();
    }
    sheet = jss
      .createStyleSheet(styles);
    sheet.attach();
    return sheet.classes;
  };

  const removeSheet = () => {
    sheet.detach();
    jss.removeStyleSheet(sheet);
  };

  return {
    createSheet,
    removeSheet,
  };
};
