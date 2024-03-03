<template>
  <div class="mt-2 flex flex-col items-center gap-4">
    <Skeleton class="h-10 w-1/4" />
    <Skeleton class="h-10 w-2/3" />
    <Skeleton class="h-10 w-1/5" />
    <Skeleton class="h-10 w-1/5" />
    <Skeleton class="h-10 w-1/5" />
    <Skeleton class="h-96 w-52" />
  </div>
</template>
<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>
