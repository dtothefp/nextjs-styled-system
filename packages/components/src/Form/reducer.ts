/* eslint-disable default-case, no-case-declarations, no-console  */
import { SET_FORM_VALUE } from './constants';
import { ReducerState, ReducerAction } from './types.ts';

export const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
  const { name, value, error, type } = action;
  let updatedState;

  switch (type) {
    case SET_FORM_VALUE:
      const updatedValues = {
        ...state.values,
        [name]: value,
      };
      const updatedErrors = {
        ...state.errors,
        [name]: error,
      };

      updatedState = {
        ...state,
        values: updatedValues,
        errors: updatedErrors,
      };
      break;
  }

  if (process.env.NODE_ENV === `development`) {
    console.log(`***UPDATED_STATE***`, updatedState);
  }

  return updatedState ?? state;
};
