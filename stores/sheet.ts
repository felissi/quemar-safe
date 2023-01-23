import { cfg } from '@/config/config'

interface State {
  sheet: string[][]
}

export const useSheetStore = defineStore('sheet', {
  state: (): State => {
    return {
      sheet: []
    }
  },
  actions: {
    fetch() {
      fetch(cfg.apiUrl)
      .then((data) => data.text())
      .then((data) => {
        console.log("🚀 ~ file: index.vue:16 ~ .then ~ data.split('\n')", data.split('\n'))
        return data.split('\n').map((line) => line.split(/"(.*?)"/gm).slice(1, -1).filter(str=>str!==','))
      })
      .then(data => {
        console.log(data)
        this.sheet = [...data]})
    }
  },
  getters: {
    maxCols() : number {
      return Math.max.apply(null,this.sheet.map(row => row.length))
    }
  }
})