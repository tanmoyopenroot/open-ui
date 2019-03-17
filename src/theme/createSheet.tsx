import * as React from 'react';
import jss, { Styles, Classes } from 'jss';

export const useJSS = (intialData: () => Styles): [Classes, (updatedStyles: any) => void] => {
  const [sheet, setSheet] = React.useState(() => {
    return jss
      .createStyleSheet(intialData(), { link: true })
      .attach();
  });

  const removeSheet = () => {
    if (sheet) {
      sheet.detach();
      jss.removeStyleSheet(sheet);
    }
  };

  const updateSheet = (updatedStyles: Styles) => {
    if (sheet) {
      sheet.update(updatedStyles);
    }
  };

  React.useEffect(
    () => () => {
      removeSheet();
    },
    [],
  );

  return [
    sheet.classes,
    updateSheet,
  ];
};
