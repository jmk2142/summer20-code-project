<template>
  <v-app>
    <v-row>
      <v-col cols="3">
    <Sidebar />
      </v-col>
      <v-col cols="8">
    <v-content>
      <router-view></router-view>
    </v-content>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar";

export default {
  name: "App",

  components: {
    Sidebar
  },

  data: () => ({
    //
  })
};
</script>
