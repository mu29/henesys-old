export function makeFetchActionTypes(actionPrefix) {
  return {
    REQUEST: `${actionPrefix}_REQUEST`,
    SUCCESS: `${actionPrefix}_SUCCESS`,
    FAILURE: `${actionPrefix}_FAILURE`,
  };
}

export function actionCreator(type, data) {
  return {
    type,
    ...data,
  };
}

export function makeFetchActionCreators(actions) {
  return {
    request: args => actionCreator(actions.REQUEST, { ...args }),
    success: data => actionCreator(actions.SUCCESS, { ...data }),
    failure: error => actionCreator(actions.FAILURE, { error }),
  };
}
