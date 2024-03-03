<template>
  <template v-if="beer">
    <Card class="text-center">
      <CardHeader>
        <CardTitle>{{ beer.name }}</CardTitle>
        <CardDescription>
          {{ beer.description }}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>ABV: {{ beer.abv }}</p>
        <p>First brewed: {{ beer.first_brewed }}</p>
        <p>Tagline: {{ beer.tagline }}</p>
      </CardContent>
      <CardFooter>
        <img
          :src="beer.image_url"
          :alt="beer.name"
          :width="150"
          class="m-auto object-cover transition-all hover:scale-105"
        />
      </CardFooter>
      <div class="mt-4">
        <Button as-child variant="link" class="mr-2">
          <RouterLink to="/beers">Back to beers</RouterLink>
        </Button>
      </div>
    </Card>
  </template>
  <template v-else>
    <BeerItemLoading />
  </template>
</template>
<script setup lang="ts">
import type { Beer } from '@/services/beers/types'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { Button } from '@/components/ui/button'
import BeerItemLoading from '@/components/BeerItem/BeerItemLoading.vue'

type Props = {
  beer: Beer | null
}
const { beer } = defineProps<Props>()
</script>
