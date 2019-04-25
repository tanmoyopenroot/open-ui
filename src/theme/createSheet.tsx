import * as React from 'react';

const useJSS = <T extends {}>(styles: T, inputs: object[]): [T] => {
  const [sheet, setSheet] = React.useState(() => {
    console.log('create');
    return styles;
  });

  const updateSheet = () => {
    setSheet(styles);
  };

  React.useEffect(
    () => {
      console.log('update');
      updateSheet();
    },
    inputs,
  );

  return [
    sheet,
  ];
};

export {
  useJSS,
};
