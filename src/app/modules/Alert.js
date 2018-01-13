export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

const initialState = {
  modal: {
    show: false,
    element: null,
    props: {},
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modal: {
          show: true,
          element: action.element,
          props: action.props,
        },
      }
    case HIDE_MODAL:
      return {
        ...state,
        modal: {
          show: false,
          element: null,
          props: {},
        },
      }
    default:
      return state;
  }
}

export function showModal(element, props) {
  return {
    type: SHOW_MODAL,
    element,
    props,
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  };
}
