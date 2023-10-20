import moment from 'moment'
import 'moment/dist/locale/tr'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      moment,
      betterFormat: (date: string) =>
        moment(date)
          .locale('tr')
          .format(
            new Date(date).getFullYear() === new Date().getFullYear()
              ? 'D MMM'
              : 'D MMM YY'
          )
    }
  }
})
