export default defineNuxtPlugin(() => {
  const moment = useMoment()
  return {
    provide: {
      moment,
      formatDate: (date: string, locale = 'en') =>
        moment(date)
          .locale(locale)
          .format(
            new Date(date).getFullYear() === new Date().getFullYear()
              ? 'D MMM'
              : 'D MMM YY'
          )
    }
  }
})
