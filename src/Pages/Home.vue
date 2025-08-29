<template>
  <div class="home">
    <Landing />
  </div>
</template>

<script>
import Landing from "../components/landing.vue";

export default {
  name: "Home",
  components: {
    Landing,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: var(--bg);
  color: var(--white);
}
</style>
