<template>
  <v-col cols="3">
    <a :href="src" class="text-decoration-none" download>
      <v-card class="pa-3 ma-1 d-flex" align="center" height="80" outlined tile>
        <v-img :src="src" align="center" max-height="60" max-width="60"></v-img>
        <v-card-title class="ml-4">
          <v-row align="center" class="text-center">:{{ img_name }}:</v-row>
        </v-card-title>
      </v-card>
    </a>
  </v-col>
</template>

<script>
export default {
  props: {
    src: String,
  },

  setup(props) {
    const src = props.src;
    const img_name_last = src.split('/').pop();
    const img_name = img_name_last.split('.')[0];

    return {
      img_name,
      src,
    };
  },
};
</script>
