import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { Beer } from '@/services/beers/types'
import { API } from '@/services'

type Pagination = {
  page: number
  perPage: number
  totalBeers: number
}

type BeerState = {
  beers: Beer[]
  pagination: Pagination
  currentBeer: Beer | null
}

const PAGE = 1
const PER_PAGE = 10

export const useBeerStore = defineStore('beer', () => {
  const state = reactive<BeerState>({
    beers: [],
    pagination: {
      page: PAGE,
      perPage: PER_PAGE,
      totalBeers: 0
    },
    currentBeer: null
  })

  const setBeers = (beers: Beer[]) => {
    state.beers = beers
  }

  const setTotalBeers = (totalBeers: number) => {
    state.pagination.totalBeers = totalBeers
  }

  const setCurrentBeer = (beer: Beer) => {
    state.currentBeer = beer
  }

  const dispatchGetBeers = async () => {
    const { data, status } = await API.beers.getBeers(
      state.pagination.page,
      state.pagination.perPage
    )
    if (status !== 200) {
      console.error('Error fetching beers')
      return
    }

    setBeers(data)
    setTotalBeers(data.length)
  }

  const dispatchGetBeer = async (id: number) => {
    if (state.currentBeer && state.currentBeer.id === id) return
    state.currentBeer = null
    const { data, status } = await API.beers.getBeer(id)
    if (status !== 200) {
      console.error('Error fetching beer')
      return
    }
    setCurrentBeer(data[0])
  }

  return { state, dispatchGetBeers, dispatchGetBeer }
})
