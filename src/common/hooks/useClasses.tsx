import * as React from 'react';

const useClasses = <T extends {}>(createClasses: () => T, deps: any[]) => {
  const [classes, setClasses] = React.useState(() => createClasses());

  React.useEffect(
    () => {
      setClasses(createClasses());
    },
    deps,
  );

  return [
    classes,
  ];
};

export default useClasses;
