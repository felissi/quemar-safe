<template>
  <Header />
  <NuxtPage></NuxtPage>
  <Footer />
</template>
<script setup>
import { useTagMeta, useHead } from '@unhead/vue'
useHead({
  title: 'Quemar'
})
useTagMeta([{
  property: 'og:title',
  content: 'Quemar'
},
{
  property: 'og:description',
  content: 'When it comes to outdoor barbecues during the covid pandemic, many people across the country have been staying home to prevent the spread of the virus. A great way to prevent the spread of germs during a barbecue is to avoid physical contact with the meat while it is cooking. Using condoms would help separate the raw meat and food.'
},
{
  property: 'og:image',
  content: '/og.png'
}])
</script>
