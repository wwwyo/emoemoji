<template>
  <v-col cols="3">
    <v-card class="pa-2 d-flex" align="center" outlined tile>
      <v-img :src="src" height="80px" cover></v-img>
      <v-card-title>
        <v-row align="center" class="mx-0"> aaaaaaaa</v-row>
      </v-card-title>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    src: String,
  },
};
</script>
