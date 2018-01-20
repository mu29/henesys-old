export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const HIDE_MESSAGE = 'HIDE_MESSAGE';

export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';

const initialState = {
  modal: {
    show: false,
    element: null,
    props: {},
  },
  alert: {
    show: false,
    title: '',
    message: '',
    type: 'success',
    onConfirm: () => {},
    onCancel: () => {},
    showCancelButton: false,
  },
  message: '',
  loading: '',
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
      };
    case HIDE_MODAL:
      return {
        ...state,
        modal: {
          show: false,
          element: null,
          props: {},
        },
      };
    case SHOW_ALERT:
      return {
        ...state,
        alert: {
          ...state.alert,
          show: action.show,
          title: action.title,
          message: action.message,
          type: action.alertType,
          onConfirm: action.onConfirm,
          onCance: action.onCancel,
          showCancelButton: action.showCancelButton,
        },
      };
    case HIDE_ALERT:
      return { ...state, alert: { ...state.alert, show: false } };
    case SHOW_MESSAGE:
      return { ...state, message: action.message };
    case HIDE_MESSAGE:
      return { ...state, message: '' };
    case SHOW_LOADING:
      return { ...state, loading: action.loadingType };
    case HIDE_LOADING:
      return { ...state, loading: '' };
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

export function showSuccessAlert({ title, message }) {
  return {
    type: SHOW_ALERT,
    show: true,
    title: title || '성공',
    message,
    alertType: 'success',
    showCancelButton: false,
  };
}

export function showErrorAlert({ title, message }) {
  return {
    type: SHOW_ALERT,
    show: true,
    title: title || '오류',
    message: message || '알 수 없는 오류입니다.',
    alertType: 'error',
    showCancelButton: false,
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

export function showMessage(message) {
  return {
    type: SHOW_MESSAGE,
    message,
  };
}

export function hideMessage() {
  return {
    type: HIDE_MESSAGE,
  };
}

export function showLoading(loadingType) {
  return {
    type: SHOW_LOADING,
    loadingType,
  };
}

export function hideLoading() {
  return {
    type: HIDE_LOADING,
  };
}
