<template>
  <v-app>
    <v-layout>
      <Header />
      <v-main>
        <v-container>
          <v-row dense v-for="dir in displayDirNames" :key="dir" class="pa-5">
            <h3
              class="text-h3"
              v-html="translator[dir] || translator['others']"
            ></h3>
            <Card v-for="path in paths[dir]" :src="path" :key="path" cols="3" />
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import Card from '@/components/Card.vue';
import paths from '@/paths.json';
import { ref } from 'vue';

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
      'club',
      'food',
      'task',
      'team',
      'gaya',
    ];
    const translator = {
      anger: 'Oko&#129324;',
      club: '',
      develop: '',
      event: '',
      food: '',
      gaya: '',
      greeting: 'Aisatu&#128515;',
      humor: 'Tanosi&#128518;',
      joy: 'Ureshi&#128525;',
      others: '&#127773;',
      pathos: 'Kanashi&#128557;',
      reply: 'Hengi&#129303;',
      task: 'Hengi&#129303;',
      team: '',
    };
    return {
      displayDirNames,
      paths,
      translator,
    };
  },
};
</script>
