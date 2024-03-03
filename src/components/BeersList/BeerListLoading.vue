<template>
  <div class="mt-2 w-full">
    <div class="flex items-center justify-between border-b-2 py-2">
      <Skeleton class="h-6 w-1/4" />
      <Skeleton class="h-6 w-1/4" />
      <Skeleton class="h-6 w-1/6" />
      <Skeleton class="h-6 w-1/12" />
    </div>
    <div v-for="i in 10" :key="i" class="flex items-center justify-between border-b py-2">
      <Skeleton class="h-6 w-1/4" />
      <Skeleton class="h-6 w-1/4" />
      <Skeleton class="h-6 w-1/6" />
      <Skeleton class="h-6 w-1/12" />
    </div>
    <div class="flex flex-col items-center justify-center gap-4 py-4">
      <Skeleton class="h-6 w-20" />
      <div class="flex gap-2">
        <Skeleton class="h-10 w-8" />
        <Skeleton class="h-10 w-8" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>
