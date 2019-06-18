import * as React from 'react';

const useFocus = (node: React.RefObject<Element | any>): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  const [focus, setFocus] = React.useState(false);

  React.useEffect(
    () => {
      node.current.addEventListener('focus', () => setFocus(true), true);
      return () => {
        node.current.removeEventListener('focus', () => setFocus(true), true);
      };
    },
    [],
  );

  return [focus, setFocus];
};

export default useFocus;
