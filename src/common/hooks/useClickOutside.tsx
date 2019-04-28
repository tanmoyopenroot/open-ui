import * as React from 'react';

const useClickOutside = <T extends HTMLDivElement>(clickHandler: () => void) => {
  const node = React.useRef<T>(null);

  const handleClickOutside = (event: Event) => {
    if (node.current && !node.current.contains(event.target as Node)) {
      clickHandler();
    }
  };

  React.useEffect(
    () => {
      document.addEventListener('click', handleClickOutside, true);
      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    },
    [],
  );

  return [node];
};

export default useClickOutside;
