import * as React from 'react';

const useClasses = <T extends {}>(styles: T, inputs: any[]) => {
  const [classes] = React.useState(() => {
    console.log('create');
    return styles;
  });

  // console.log(inputs);
  // const updateSheet = () => {
  //   setSheet(styles);
  // };

  // React.useEffect(
  //   () => {
  //     console.log('update');
  //     updateSheet();
  //   },
  //   inputs,
  // );

  return {
    classes,
  };
};

export default useClasses;
