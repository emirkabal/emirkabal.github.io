interface Post {
  title: string
  _path: string
  createdAt: string
  short_description: string
  tags: string[]
  image?: string
}

interface Repository {
  owner: string
  repo: string
  link: string
  description: string
  image: string
  website: string
  language: string
  languageColor: string
  stars: string
  forks: string
}
