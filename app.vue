<template>
  <div>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
console.log("---------------------------");
const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig);

const appConfig = useAppConfig();
console.log(appConfig.title);
console.log("---------------------------");
</script>
