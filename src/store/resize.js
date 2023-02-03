import { defineStore } from 'pinia'

export const useResizeStore = defineStore('resize', {
  state: () => ({
    indicesTable: 500,
    modalLoaderCodeViewer: 600,
    restForm: 500
  }),
  persist: true
})
