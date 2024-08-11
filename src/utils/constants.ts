import {
  Discord,
  Github,
  Instagram,
  Linkedin,
  X,
  Youtube
} from '~/components/icons/social'

export const projects = [
  {
    title: "Kabal's Discord Bot",
    description:
      'A discord bot that plays music and has many features and has over 100k servers.',
    images: ['projects/uxddh4cks4sklrg6jtou'],
    url: 'https://kabals.app'
  },
  {
    title: 'Masterscore',
    description:
      'A website where you can rate movies and tv shows with a better rating system.',
    images: ['projects/s96czd9axf1afttwdtyd'],
    url: 'https://masterscore.org'
  },
  {
    title: 'Better Instagram Videos',
    description:
      'A extension that allows you to easily control the volume and playback of videos.',
    images: ['projects/nulbd69p1l49sbd6paz8'],
    url: 'https://chromewebstore.google.com/detail/better-instagram-videos-p/ijgmchfimkocepiapjeoehcicfnhhchp'
  },
  {
    title: 'deprem-api',
    description: 'A simple API that provides earthquake data in Turkey.',
    images: ['projects/avbg3pet8ctuarhhth9j'],
    url: 'https://github.com/emirkabal/deprem-api'
  }
]

export const links = [
  {
    name: 'API Docs',
    url: 'https://api-docs.emirkabal.com',
    external: true
  },
  {
    name: 'Branding',
    url: '/branding',
    external: false
  },
  {
    name: 'Bank Accounts',
    url: '/bank-accounts',
    external: false
  },
  {
    name: 'Repositories',
    url: '/repositories',
    external: false
  }
]

export const social = [
  {
    name: 'github',
    url: 'https://github.com/emirkabal',
    icon: Github
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/emirkabal/',
    icon: Linkedin
  },
  {
    name: 'x',
    url: 'https://x.com/emirkabal',
    icon: X
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/emirkaball',
    icon: Instagram
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/@kabal3345',
    icon: Youtube
  },
  {
    name: 'discord',
    url: 'https://discord.gg/M5ZSEux',
    icon: Discord
  }
]

export const footer = [
  {
    name: 'privacy-policy',
    url: '/privacy-policy'
  }
]
