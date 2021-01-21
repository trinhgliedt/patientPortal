import * as actions from "../actions/actionTypes";

const initialState = {
  error: null,
  loading: false,
  deleteContact: {
    error: null,
    loading: false,
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.ADD_CONTACT_START:
      return { ...state, loading: true };

    case actions.ADD_CONTACT_SUCCESS:
      return { ...state, loading: false, error: false };

    case actions.ADD_CONTACT_FAIL:
      return { ...state, loading: false, error: payload };

    case actions.DELETE_CONTACT_START:
      return {
        ...state,
        deleteContact: { ...state.deleteContact, loading: true },
      };

    case actions.DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        deleteContact: { ...state.deleteContact, loading: false, error: false },
      };

    case actions.DELETE_CONTACT_FAIL:
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};
