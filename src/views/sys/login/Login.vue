<template>
  <div :class="prefixCls" class="w-full h-full">
    <div :class="`${prefixCls}-box`">
      <div v-if="logoinfo" :class="`${prefixCls}-logo`" class="flex justify-between">
        <img :src="props.logoinfo.url" />
        <span>典当服务系统</span>
      </div>
      <el-form :model="loginForm" :class="`${prefixCls}-form`" class="mt-16">
        <el-form-item>
          <el-input
            v-model="loginForm.username"
            :prefix-icon="User"
            class="els-inputNoBorder"
            size="large"
            type="text"
            placeholder="请输入您的用户名"
          />
        </el-form-item>
        <el-form-item>
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
        <el-form-item>
          <el-input
            v-model="loginForm.imageCode"
            class="els-inputNoBorder"
            size="large"
            :prefix-icon="Search"
            placeholder="请输入验证码"
          >
            <template #append>
              <img
                class="yu-login-code"
                title="点击刷新"
                :src="imageCodePicture"
                @click="freshImageCodeFn"
              />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div :class="`${prefixCls}-footer`">Copyright &copy; 银丰典当</div>
  </div>
</template>

<script setup>
  import { reactive, ref } from 'vue';
  import { buildUUID } from '/@/utils/uuid.ts';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { User, Unlock, Search } from '@element-plus/icons-vue';
  import { useAppProviderContext } from '/@/components/Appliction/src/useAppContext';
  const { prefixCls } = useDesign('login');
  const { projectServer } = useAppProviderContext();

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
    username: '',
    password: '',
    imageCode: null,
    clientId: buildUUID(),
  });

  const imageCodePicture = ref(freshImageCodeFn());

  console.log(loginForm.clientId);
  function freshImageCodeFn() {
    const imageCodePicture = "/api" + projectServer.uaaService + '/api/codeImage/' + loginForm.clientId;
    console.log(imageCodePicture)
    loginForm.imageCode = '';
    return imageCodePicture;
  }
</script>

<style lang="less" scoped>
  //  @import '/@/design/login.less';
  //   @import './css/login.less';
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
  }
</style>
