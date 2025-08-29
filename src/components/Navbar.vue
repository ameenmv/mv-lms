<template>
  <div
    :class="{ scrolled: scrolled }"
    class="fixed pt-1 pb-1 top-0 left-0 right-0 z-50 bg-white"
  >
    <div class="containerr flex justify-between">
      <router-link to="/">
        <div class="logo">
          <h1 class="font-bold italic">MV LMS</h1>
        </div></router-link
      >
      <ul class="links flex justify-center items-center gap-5">
        <router-link to="/Login"><li class="btn">Log in</li></router-link>
        <router-link to="/Signup"><li class="btn">Sign up</li></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { Store } from "../Store";
import { ref, onMounted, onUnmounted } from "vue";
export default {
  name: "Navbar",
  data() {},

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
  border-bottom: 1px solid #eeeeee1c;
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
