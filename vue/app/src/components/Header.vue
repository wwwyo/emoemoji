<template>
  <v-app-bar color="primary" density="compact" class="header__bar">
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    <v-container>
      <v-app-bar-title>
        <div class="d-flex flex-row">
          <p v-html="lEmojis.join('')"></p>
          <v-img :src="logo" width="90" height="35"></v-img>
          <p v-html="rEmojis.join('')"></p>
        </div>
      </v-app-bar-title>
    </v-container>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary class="header__drawer">
    <v-list nav dense>
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item
          :key="dir"
          v-for="(name, dir) in directoryDict"
          class="p-3"
        >
          <a :href="'#' + dir" class="text-decoration-none">
            <v-list-item-title
              v-html="name"
              class="text-subtitle-1 d-flex"
            ></v-list-item-title>
          </a>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { ref, inject } from 'vue';
import { Emoji } from '@/models/Emoji';

export default {
  setup() {
    const emoji = new Emoji();
    const lEmojis = ref(emoji.lEmojis);
    const rEmojis = ref(emoji.rEmojis);

    const directoryDict = inject('directoryDict');
    const logo = require('@/assets/img/logo_w.png');
    const drawer = ref(false);

    const emojiTimer = setInterval(() => emoji.transition(), 500);

    return {
      lEmojis,
      rEmojis,
      directoryDict,
      logo,
      drawer,
    };
  },
};
</script>
<style lang="scss">
.header {
  &__bar {
    position: fixed !important;
  }
  &__drawer {
    position: fixed !important;
  }
}
</style>
