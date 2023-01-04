export function useMessage() {
  return {
    createMessage: {
      error: 'createMessage',
    },
    createErrorModal: function (val: any) {
      return 'createErrorModal' + val;
    },
  };
}
