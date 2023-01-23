<template>
  <Notice />
  <Hero />
  <List />
</template>
<script lang="ts">
import { sheetMixin } from '@/stores/imports/SheetMixin'
export default {
  mixins: [sheetMixin]
}
</script>
