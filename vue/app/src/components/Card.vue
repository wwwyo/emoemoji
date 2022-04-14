<template>
  <v-col cols="3">
    <v-card class="pa-2 d-flex" align="center" outlined tile>
      <v-img :src="src" height="80" width="80" cover></v-img>
      <v-card-title>
        <v-row align="center" class="mx-0">: {{ img_name }} :</v-row>
      </v-card-title>
    </v-card>
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
