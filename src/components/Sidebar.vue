<template>
  <v-container>
      <v-navigation-drawer
        v-model="drawer"
        :color="color"
        :src="bg"
        absolute
        dark
      >
        <v-list dense nav class="py-0">
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
              <img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/20229052_1817578591886902_8010008018031528472_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_oc=AQlqBt2YrrFsE7IDPChctHBLAxJ23YhxNdZh8Ii3xziHuz0hQSiUZn0hdLAlhkEmbB8&_nc_ht=scontent-ort2-1.xx&oh=00f26d089c067708aa1fb29fb4525826&oe=5F311BAC" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>User Profile</v-list-item-title>
              <v-list-item-subtitle>Yanning</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item v-for="item in items" :key="item.title" router-link :to="item.route">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      
      </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Tasks", icon: "mdi-view-dashboard", route:"/Tasksets" },
        { title: "Photos", icon: "mdi-image", route:"/Photos"},
        { title: "About", icon: "mdi-help-box", route:"/About" }
      ],
      color: "primary",
      colors: ["primary", "blue", "success", "red", "teal"],
    };
  },
  computed: {
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
