<template>
  <template v-if="beers.length">
    <Table>
      <TableCaption>
        Beers -
        <strong>page {{ pagination.page }}</strong>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Tagline</TableHead>
          <TableHead>First Brewed</TableHead>
          <TableHead>ABV</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="beer in beers" :key="beer.id">
          <TableCell>
            <Button as-child variant="link">
              <RouterLink :to="`/beers/${beer.id}`">{{ beer.name }}</RouterLink>
            </Button>
          </TableCell>
          <TableCell>{{ beer.tagline }}</TableCell>
          <TableCell>{{ beer.first_brewed }}</TableCell>
          <TableCell>{{ beer.abv }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <div class="mt-5 flex justify-center">
      <Button
        variant="outline"
        size="icon"
        @click="changePage(-1)"
        :disabled="pagination.page <= 1"
      >
        <ChevronLeft class="size-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        @click="changePage(1)"
        :disabled="pagination.totalBeers < pagination.perPage"
      >
        <ChevronRight class="size-4" />
      </Button>
    </div>
  </template>
  <template v-else>
    <BearListLoading />
  </template>
</template>
<script setup lang="ts">
import { useBeerStore } from '@/stores/beers'
import { ChevronRight, ChevronLeft } from 'lucide-vue-next'
import BearListLoading from './BeerListLoading.vue'

import { onMounted, toRefs } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { RouterLink } from 'vue-router'

const { state, dispatchGetBeers } = useBeerStore()

const { beers, pagination } = toRefs(state)

const changePage = (increment: number) => {
  state.pagination.page += increment
  dispatchGetBeers()
}

onMounted(() => {
  dispatchGetBeers()
})
</script>
