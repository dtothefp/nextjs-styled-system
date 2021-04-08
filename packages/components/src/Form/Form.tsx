import React, { FC, Dispatch, FormEvent, createContext, useReducer, useCallback } from 'react';
import { reducer } from './reducer';
import { ReducerAction, ReducerState, FormProps } from './types';
import { Box } from '../Box';

export const FormContext = createContext<{
  state: ReducerState;
  dispatch: Dispatch<ReducerAction>;
}>({});

export const Form: FC<FormProps> = ({ onSubmit, children }) => {
  const [state, dispatch] = useReducer(reducer, {});
  const onSubmitFn = useCallback(
    (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      // check validations and group data

      onSubmit();
    },
    [onSubmit]
  );

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <Box as="form" onSubmit={onSubmitFn}>
        {children}
      </Box>
    </FormContext.Provider>
  );
};
