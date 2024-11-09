export const useStylishStore = defineStore("stylish", () => {
  const count = ref(0);
  const _isLogin = ref(false);
  const token = useCookie("token");

  const isLogin = computed({
    get(): boolean {
      if (token.value || _isLogin.value) {
        return true;
      }
      return false;
    },
    set(value: boolean) {
      _isLogin.value = value;
    },
  });

  function getLoginState(): boolean {
    if (token.value || _isLogin.value) {
      return true;
    }
    return false;
  }

  function setLoginState(flag: boolean): void {
    _isLogin.value = flag;
  }

  return { count, isLogin, setLoginState, getLoginState };
});
