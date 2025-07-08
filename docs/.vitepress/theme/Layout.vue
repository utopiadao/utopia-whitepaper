<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <FooterWatermark />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import FooterWatermark from '../components/FooterWatermark.vue'
</script>