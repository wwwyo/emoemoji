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
              class="text-h3 v-col-12 text-center mb-1"
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
      anger: '&#129324; おこ &#129324;',
      business: '&#128526; 横文字 &#128526;',
      club: '&#128572; クラブ &#128572;',
      develop: '&#128187; 開発 &#128187;',
      event: '&#127881; イベント &#127881;',
      food: '&#129316; たべもの &#129316;',
      gaya: '&#128125; ガヤ &#128125;',
      greeting: '&#128515; あいさつ &#128515;',
      humor: '&#128518; ユーモア &#128518;',
      joy: '&#128525; いいね &#128525;',
      others: '&#127773; &#127773; &#127773;',
      pathos: '&#128557; ぴえん &#128557;',
      reply: '&#129303; レスポンス &#129303;',
      task: '&#9997; タスク &#9997;',
      team: '&#128170; チーム &#128170;',
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
