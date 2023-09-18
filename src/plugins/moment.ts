import moment from 'moment'
import 'moment/dist/locale/tr'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      moment
    }
  }
})
