<template>
  <v-app-bar color="primary" density="compact">
    <v-app-bar-title>
      <div class="d-flex flex-row">
        &#x1F618;&#x1F928;&#x1F60E;
        <v-img :src="logo" width="90" height="35"></v-img>
        &#x1F618;&#x1F928;&#x1F60E;
      </div>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script>
export default {
  setup() {
    const logo = require('@/assets/img/logo_w.png');
    return {
      logo,
    };
  },
};
</script>
