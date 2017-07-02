export type InitialState = {
    isFetching: boolean,
    error: boolean,
    errorResponse: ?Array | ?{},
    loaded: boolean,
    response: Array | {},
};

export const request = {
  next(state, action) {
    return {
      ...state,
      isFetching: true,
      error: false,
      searchIndex: action.payload,
    };
  },
};

export const error = {
  next(state, action) {
    return {
      ...state,
      isFetching: false,
      error: true,
      errorResponse: action.payload,
    };
  },
};

/**
 * In some stores the name may vary - therefore the function
 * @param responseStoreName
 * @returns {*}
 */
export const success = (responseStoreName: string = 'response') => ({

  next(state, action) {
    const responeBody = {};
    if (action.payload) {
      responeBody[responseStoreName] = action.payload;
    }
    return {
      ...state,
      isFetching: false,
      error: false,
      loaded: true,
      ...responeBody,
    };
  },
});

/**
 * Use this when someone clicks on a popover with error to be closed
 * @type {{next: ((state))}}
 */
export const clearError = {
  next(state) {
    return {
      ...state,
      error: false,
    };
  },
};

/**
 * Restore state to its base form
 *
 * @param initialState
 * @returns {*}
 */
export const reset = (initialState: {} = {}) => ({
  next() {
    return {
      ...initialState,
    };
  },
});

export const baseInitialState: InitialState = (withResponse = true, optional: {} = {}) => {
  const base = {
    isFetching: false,
    error: false,
    errorResponse: null,
    loaded: false,
    ...optional,
  };

  const reponse = {
    response: {},
  };

  return withResponse ? { ...base, ...reponse } : base;
};

export const constants = (baseName) => {
  const caps = baseName.toUpperCase();
  return {
    request: `${caps}_REQUEST`,
    success: `${caps}_SUCCESS`,
    error: `${caps}_ERROR`,
    loadMore: `${caps}_LOAD_MORE`,
    reset: `${caps}_RESET`,
    clearError: `${caps}_CLEAR_ERROR`,
  };
};

export const createStandardReducer = (baseName) => {
  const consts = constants(baseName);

  return {
    [consts.request]: request,
    [consts.success]: success(),
    [consts.error]: error,
    [consts.reset]: reset,
    [consts.clearError]: clearError,
  };
};
