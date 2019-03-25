import * as React from 'react';
import jss, { Styles, Classes } from 'jss';

interface IStyleObject {
  initialStyles: Styles;
  updatedStyles: Styles;
}

export const useJSS = (
  styleObject: IStyleObject,
  inputs: any[],
): [Classes, (updatedStyles: any) => void] => {
  const [sheet, setSheet] = React.useState(() => {
    const { initialStyles, updatedStyles } = styleObject;
    const sheet = jss
      .createStyleSheet(initialStyles, { link: true })
      .attach();

    sheet.update(updatedStyles);

    return sheet;
  });

  const removeSheet = () => {
    if (sheet) {
      sheet.detach();
      jss.removeStyleSheet(sheet);
    }
  };

  const updateSheet = (updatedStyles: Styles) => {
    if (sheet) {
      console.log('update');
      sheet.update(updatedStyles);
    }
  };

  React.useEffect(
    () => () => {
      console.log('remove');
      removeSheet();
    },
    [],
  );

  React.useEffect(
    () => {
      const { updatedStyles } = styleObject;
      updateSheet(updatedStyles);
    },
    inputs,
  );

  return [
    sheet.classes,
    updateSheet,
  ];
};
