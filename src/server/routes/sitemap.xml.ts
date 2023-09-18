import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event, 'blog').find()
  const sitemap = new SitemapStream({
    hostname: 'https://emirkabal.com'
  })

  sitemap.write({
    url: '/',
    changefreq: 'monthly'
  })

  sitemap.write({
    url: '/blog',
    changefreq: 'monthly'
  })

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly'
    })
  }

  sitemap.write({
    url: '/branding',
    changefreq: 'monthly'
  })

  sitemap.end()

  return streamToPromise(sitemap)
})
