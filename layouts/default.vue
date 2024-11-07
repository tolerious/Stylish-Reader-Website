<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
useSeoMeta({
  title: `Stylish Reader | ${route.meta.title}`,
  ogTitle: `Stylish Reader | ${route.meta.title}`,
  description:
    "免费英语学习工具，提供划词翻译，Youtube中英双语字幕收藏观看，单词收藏，单词背诵，单词复习功能。雅思，托福，托业，四六级，BEC，商务英语备考的不二之选",
  ogDescription:
    "免费英语学习工具，提供划词翻译，Youtube中英双语字幕收藏观看，单词收藏，单词背诵，单词复习功能。雅思，托福，托业，四六级，BEC，商务英语备考的不二之选",
  ogImage: "1",
  twitterCard: "summary_large_image",
  keywords:
    "英语学习,划词翻译,英语字幕,单词收藏,单词背诵,单词复习,雅思,托福,托业,四六级,BEC,商务英语",
});
</script>
