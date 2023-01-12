<template>
  <div :class="prefixCls" class="w-full h-full">
    <div :class="`${prefixCls}-box`">
      <div v-if="logoinfo" :class="`${prefixCls}-logo`" class="flex justify-between">
        <img :src="props.logoinfo.url" />
        <span>典当服务系统</span>
      </div>
      <el-form
        ref="formRef"
        :model="loginForm"
        :class="`${prefixCls}-form`"
        class="mt-16"
        :rules="getFormRules"
        @keyup.enter="loginFn"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            :prefix-icon="User"
            class="els-inputNoBorder"
            size="large"
            type="text"
            placeholder="请输入您的用户名"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            :prefix-icon="Unlock"
            class="els-inputNoBorder"
            type="password"
            size="large"
            placeholder="请输入您的密码"
            show-password
          />
        </el-form-item>
        <el-form-item prop="imageCode">
          <el-input
            v-model="loginForm.imageCode"
            class="els-inputNoBorder"
            size="large"
            :prefix-icon="Search"
            placeholder="请输入验证码"
          >
            <template #append>
              <img
                class="yu-login-code cursor-pointer"
                title="点击刷新"
                :src="imageCodePicture"
                @click="freshImageCodeFn"
              />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item class="mt-10">
          <el-button class="block w-full" round :loading="loading" type="primary" @click="loginFn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div :class="`${prefixCls}-footer`">Copyright &copy; 银丰典当</div>
  </div>
</template>

<script setup>
  import { reactive, ref, onMounted } from 'vue';
  import { buildUUID } from '/@/utils/uuid.ts';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { User, Unlock, Search } from '@element-plus/icons-vue';
  import { useAppProviderContext } from '/@/components/Appliction/src/useAppContext';
  import { useFormRules, useFormValid } from './useLogin.ts';
  import { useUserStore } from '/@/store/modules/user';
  import { RsaEncrypt } from '/@/utils/encipher/jsencrypt';
  import { RSA_PUBLIC_KEY } from '/@/settings/encryptSetting';

  const { prefixCls } = useDesign('login');
  const { projectServer } = useAppProviderContext();
  const userStore = useUserStore();

  const { getFormRules } = useFormRules();

  const props = defineProps({
    logoinfo: {
      type: Object,
      default() {
        return {
          url: new URL('/src/assets/images/logo.png', import.meta.url),
        };
      },
    },
  });

  const loginForm = reactive({
    username: 'chengjinhuan',
    password: '123456',
    imageCode: null,
    clientId: buildUUID(),
    grant_type: 'password',
    passwordType: '2',
    // sysLogicId: '',
  });

  const formRef = ref();
  const imageCodePicture = ref('');
  const loading = ref(false);

  const { valiForm } = useFormValid(formRef);

  onMounted(() => {
    freshImageCodeFn();
  });

  function freshImageCodeFn() {
    imageCodePicture.value =
      '/api' + projectServer.uaaService + '/api/codeImage/' + loginForm.clientId + '?t=' + new Date().getTime();
    loginForm.imageCode === '' ? '' : loginForm.imageCode === '';
    return imageCodePicture.value;
  }

  async function loginFn() {
    // console.log("跳过登录步骤")
    // userStore.afterLoginAction();

    // 验证
    const data = await valiForm();
    if (!data) return;
    // 请求 密码加密
    const pwdRsaEncrypt = new RsaEncrypt({ pubkey: RSA_PUBLIC_KEY });
    let { password, ...newLoginForm } = loginForm;
    password = pwdRsaEncrypt.encryptByRsa(loginForm.password);
    try {
      loading.value = true;

      console.log(userStore.token);
      const loginData = await userStore.login({
        ...newLoginForm,
        password,
      });
      // 处理不同返回时的登录(之后统一错误码之后，进行axios 统一处理)
      const { code, message } = loginData;
      if (code === '10000001') {
        ElMessage.error(message);
        freshImageCodeFn();
      }
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  }
</script>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-login';

  .@{prefix-cls} {
    background: url(/@/assets/images/login-bg-one.png) no-repeat #5557b9 center center;
    background-size: cover;

    &-logo {
      width: 100%;
      height: 38px;
      line-height: 38px;
      white-space: nowrap;

      span {
        font-size: 24px;
        color: #333333;
        font-weight: 400;
      }

      img {
        height: 100%;
        margin: 0 12px 0 10px;
        vertical-align: middle;
        line-height: 1;
      }
    }

    &-box {
      width: 380px;
      padding: 0 54px;
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      text-align: center;
      transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      right: calc(35% - 214px);
      width: 428px;
      height: 380px;
      z-index: 3;

      .yu-login-submitBtn {
        margin-top: 30px;
        width: 100%;
      }
    }

    &-footer {
      position: absolute;
      bottom: 48px;
      font-size: 14px;
      text-align: center;
      color: rgba(255, 255, 255, 0.5);
      right: calc(50% - 100px);
      font-weight: 400;
      width: 200px;
      opacity: 0.5;
    }

    .els-inputNoBorder {
      :deep(.el-input__wrapper) {
        box-shadow: 0 -1px 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
      }

      :deep(.el-input-group__append) {
        box-shadow: 0 -1px 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
        background-color: white;
      }
    }

    :deep(.el-form-item__error) {
      margin-left: 36px;
      line-height: 20px;
    }
  }
</style>
