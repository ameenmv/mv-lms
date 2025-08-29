<template>
  <div
    :class="{ scrolled: scrolled }"
    class="fixed pt-1 pb-1 top-0 left-0 right-0 z-50 bg-white"
  >
    <div class="pl-6 pr-6 flex justify-between">
      <router-link to="/">
        <div class="logo">
          <h1 class="font-bold">MV LMS</h1>
        </div></router-link
      >
      <ul class="links flex justify-center items-center gap-5">
        <li @click="logout" class="btn">Log out</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
export default {
  name: "Navbar2",
  data() {},
  methods: {
    logout() {
      localStorage.removeItem("userId");
      this.$router.push("/Login");
    },
  },

  setup() {
    const scrolled = ref(false);

    const checkScroll = () => {
      scrolled.value = window.scrollY > 40;
    };

    onMounted(() => {
      window.addEventListener("scroll", checkScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", checkScroll);
    });

    return {
      scrolled,
    };
  },
};
</script>

<style lang="scss" scoped>
.z-50 {
  background: transparent;
  transition: background-color 0.3s;
}
.logo {
  color: #ffffff;
}
.z-50.scrolled {
  background-color: #150b2ea5;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
</style>
