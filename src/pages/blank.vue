<template>
  <div class="mt-12 flex gap-2">
    <ProjectCard
      :data="{
        title: 'Kabal\'s Discord Bot',
        // music bot and in 100k servers
        description:
          'A Discord bot that plays music and has over 100k servers.',
        images: ['projects/uxddh4cks4sklrg6jtou'],
        url: 'https://kabals.app'
      }"
    />
    <ProjectCard
      :data="{
        title: 'Masterscore',
        description:
          'A website where you can rate movies and tv shows with a better rating system.',
        images: ['projects/s96czd9axf1afttwdtyd'],
        url: 'https://masterscore.org'
      }"
    />
  </div>
</template>
