import http from '@/services/api'
import type { Beer } from '@/services/beers/types'

async function getBeers(page = 1, perPage = 10) {
  return http.get<Beer[]>(`/beers?page=${page}&per_page=${perPage}`)
}

async function getBeer(id: number) {
  return http.get<Beer[]>(`/beers/${id}`)
}

export default {
  getBeers,
  getBeer
}
