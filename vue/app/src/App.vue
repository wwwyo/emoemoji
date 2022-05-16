<template>
  <v-app>
    <v-layout>
      <Header />
      <v-main>
        <v-container>
          <v-row
            dense
            v-for="(name, dir) in directoryDict"
            :key="dir"
            class="pa-5"
          >
            <h3
              :id="dir"
              class="text-h3 v-col-12 mb-1 d-flex justify-center"
              v-html="name"
            ></h3>
            <Card v-for="path in paths[dir]" :src="path" :key="path" cols="3" />
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import { provide } from 'vue';
import Header from '@/components/Header.vue';
import Card from '@/components/Card.vue';
import paths from '@/paths.json';

export default {
  components: {
    Header,
    Card,
  },

  setup() {
    const displayDirNames = [
      'greeting',
      'reply',
      'joy',
      'anger',
      'pathos',
      'humor',
      'develop',
      'event',
      'business',
      'club',
      'food',
      'task',
      'team',
      'gaya',
    ];
    const translator = {
      anger:
        '<p class="rotate">&#129324;</p> おこ <p class="rotate-r">&#129324;</p>',
      business:
        '<p class="rotate">&#128526;</p> 横文字 <p class="rotate">&#128526;</p>',
      club: '<p class="rotate">&#128572;</p> クラブ <p class="rotate-r">&#128572;</p>',
      develop:
        '<p class="rotate">&#128187;</p> 開発 <p class="rotate-r">&#128187;</p>',
      event:
        '<p class="rotate">&#127881;</p> イベント <p class="rotate-r">&#127881;</p>',
      food: '<p class="rotate">&#129316;</p> たべもの <p class="rotate-r">&#129316;</p>',
      gaya: '<p class="rotate">&#128125;</p> ガヤ <p class="rotate-r">&#128125;</p>',
      greeting:
        '<p class="rotate">&#128515;</p> あいさつ <p class="rotate-r">&#128515;</p>',
      humor:
        '<p class="rotate">&#128518;</p> ユーモア <p class="rotate-r">&#128518;</p>',
      joy: '<p class="rotate">&#128525;</p> いいね <p class="rotate-r">&#128525;</p>',
      others:
        '<p class="rotate">&#127773;</p> <p class="rotate-r">&#127773;</p> <p class="rotate">&#127773;</p>',
      pathos:
        '<p class="rotate">&#128557;</p> ぴえん <p class="rotate-r">&#128557;</p>',
      reply:
        '<p class="rotate">&#129303;</p> レスポンス <p class="rotate-r">&#129303;</p>',
      task: '<p class="rotate">&#9997;</p> タスク <p class="rotate-r">&#9997;</p>',
      team: '<p class="rotate">&#128170;</p> チーム <p class="rotate-r">&#128170;</p>',
    };

    const directoryDict = displayDirNames.reduce((dict, dir) => {
      dict[dir] = translator[dir] || translator['other'];
      return dict;
    }, {});

    provide('directoryDict', directoryDict);

    return {
      directoryDict,
      paths,
    };
  },
};
</script>

<style lang="scss">
.rotate {
  animation: rotate-animation 1s linear infinite;
}
.rotate-r {
  animation: rotate-animation 1s linear infinite;
  animation-direction: reverse;
}
@keyframes rotate-animation {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
