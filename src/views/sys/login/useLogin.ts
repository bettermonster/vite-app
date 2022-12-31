import { Ref, reactive, unref } from 'vue';
export function useFormRules() {
  const getUsernameFormRules = createRule('请输入您的用户名');
  const getPasswordFormRules = createRule('请输入您的密码');
  const getImageCodeFormRules = createRule('请输入验证码');

  const getFormRules = reactive({
    username: getUsernameFormRules,
    password: getPasswordFormRules,
    imageCode: getImageCodeFormRules,
  });

  return { getFormRules };
}

export function useFormValid(formRef: Ref<any>) {
  async function valiForm() {
    const form = unref(formRef);
    const data = form.validate();
    return data as any;
  }
  return { valiForm };
}

function createRule(message: string) {
  return [
    {
      required: true,
      message,
      trigger: 'change',
    },
  ];
}
