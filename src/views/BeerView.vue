<template>
  <BeerItem :beer="state.currentBeer" />
</template>
<script setup lang="ts">
import { useBeerStore } from '@/stores/beers'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import BeerItem from '@/components/BeerItem/BeerItem.vue'

const { state, dispatchGetBeer } = useBeerStore()

const params = useRoute().params

onMounted(() => {
  dispatchGetBeer(+params.id)
})
</script>
