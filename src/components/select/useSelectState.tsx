import * as React from 'react';

import {
  ISelectOption,
} from './props';

interface IState {
  focus: boolean;
  selectedValues: ISelectOption[];
}

interface IAction {
  type: string;
  payload: object;
}

const enum Type {
  SET_FOCUS = 'SET_FOCUS',
  ADD_VALUE = 'ADD_VALUE',
}

const intialState: IState = {
  focus: false,
  selectedValues: [],
};

const selectReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case Type.SET_FOCUS:
      return {
        ...state,
        ...action.payload,
      };

    case Type.ADD_VALUE:
      return {
        ...state,
        selectedValues: [
          ...state.selectedValues,
          action.payload as ISelectOption,
        ],
      };

    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
};

const useSelectState = (intial: IState = intialState) => {
  const [state, dispatch] = React.useReducer(selectReducer, intial);

  const setFocus = (focus: boolean) => () => dispatch({
    type: Type.SET_FOCUS,
    payload: {
      focus,
    },
  });

  const setSelectedValues = (data: ISelectOption) => () => dispatch({
    type: Type.ADD_VALUE,
    payload: {
      data,
    },
  });

  return {
    ...state,
    setFocus,
    setSelectedValues,
  };
};

export default useSelectState;
