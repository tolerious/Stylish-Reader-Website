<template>
  <header
    class="h-[64px] w-full bg-white shadow-sm shadow-slate-200"
    v-if="isVisible"
  >
    <div
      class="max-w-screen-xl px-5 py-3 m-auto grid top-0 grid-rows-1 lg:grid-cols-[150px_1fr_150px] h-full grid-cols-3"
    >
      <div class="lg:hidden"></div>
      <div
        @click="navigateTo('/')"
        class="cursor-pointer flex flex-row justify-start items-center mx-auto"
      >
        <img src="/images/logo.svg" alt="" srcset="" class="h-full" />
      </div>
      <div class="hidden lg:block">
        <ul
          class="flex justify-center flex-row h-full items-center text-gray-950"
        >
          <li class="px-6 cursor-pointer hover:text-pink-600">
            <a href="#about">简介</a>
          </li>
          <li class="px-6 cursor-pointer hover:text-pink-600">
            <a href="#feature">功能</a>
          </li>
          <li class="px-6 cursor-pointer hover:text-pink-600">
            <a href="#pricing">支持与鼓励</a>
          </li>
          <li class="px-6 cursor-pointer hover:text-pink-600">
            <a href="https://doc.stylishreader.com">查看文档</a>
          </li>
          <li class="px-6 cursor-pointer hover:text-pink-600">
            <a href="#testimonial">联系我吧</a>
          </li>
        </ul>
      </div>
      <div class="hidden bg--300 lg:flex justify-end items-center">
        <button
          v-if="isLogin"
          @click="logout"
          class="px-4 py-1 border-pink-600 border-2 rounded-md text-pink-600 active:shadow-sm active:shadow-slate-400"
        >
          退出登录
        </button>
        <button
          v-else
          @click="goToPersonalCenter"
          class="px-4 py-1 border-pink-600 border-2 rounded-md text-pink-600 active:shadow-sm active:shadow-slate-400"
        >
          免费使用
        </button>
      </div>
      <div class="lg:hidden"></div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useStylishStore } from "@/stores/stylish";
import { computed, onMounted } from "vue";

const token = useCookie("token");

defineProps({
  isVisible: { type: Boolean, default: true },
});

const { setLoginState, getLoginState } = useStylishStore();

const isLogin = computed(() => getLoginState());

function goToPersonalCenter() {
  if (isLogin.value) {
    navigateTo("/personalcenter");
  } else {
    navigateTo("/login");
  }
}

function logout() {
  token.value = null;
  setLoginState(false);
  navigateTo("/");
  setTimeout(() => {
    window.location.reload();
  }, 500);
}

onMounted(() => {
  if (token.value) {
    setLoginState(true);
  }
});
</script>
