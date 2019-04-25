import * as React from 'react';

import {
  createTheme,
  ITheme,
  IThemeOptions,
} from './createTheme';

type TSetters = React.Dispatch<React.SetStateAction<ITheme>>;

interface IStore {
  state: ITheme;
  setThemeState: (value: ITheme) => void;
  setters: TSetters[];
}

let store: IStore;

export const createThemeStore = (options?: IThemeOptions) => {
  const theme = createTheme(options);

  store = {
    state: theme,
    setThemeState(value: ITheme) {
      this.state = value;
      this.setters.forEach(setter => setter(this.state));
    },
    setters: [],
  };

  store.setThemeState = store.setThemeState.bind(store);
};

export const useThemeStore = (): [
  ITheme,
  (value: ITheme) => void,
] => {
  const [state, set] = React.useState(store.state);

  if (!store.setters.includes(set)) {
    store.setters.push(set);
  }

  React.useEffect(
    () => () => {
      store.setters = store.setters.filter(setter => setter !== set);
    },
    [],
  );

  return [state, store.setThemeState];
};
