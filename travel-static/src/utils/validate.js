import Vue from 'vue';
import zh_CN from 'vee-validate/dist/locale/zh_CN';
import VeeValidate, { Validator } from 'vee-validate';

Validator.addLocale(zh_CN);

const config = {
  errorBagName: 'errors',
  fieldsBagName: 'fields',
  delay: 100,
  locale: 'zh_CN',
  strict: true,
  enableAutoClasses: true,
  events: 'blur',
  inject: true
};

Vue.use(VeeValidate, config);

const dictionary = {
  zh_CN: {
    attributes: {
      email: '邮箱',
      password: '密码',
      validateCode: '验证码',
      nickname: '昵称'
    }
  }
};

Validator.updateDictionary(dictionary);
