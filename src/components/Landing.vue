<template>
  <div>
    <Navbar />
    <div class="landing">
      <div class="containerr gap-10 h-[100%] flex items-center">
        <div class="left w-[60%] mt-40">
          <h1 class="flex font-thin text-[50px] mb-10 items-center">
            Welcome to the Student and Teacher Management System
          </h1>
          <p class="text-[20px] mb-6">
            This system helps schools easily manage their lessons and track
            student performance.
          </p>
          <p class="text-[20px] mb-20">
            It also allows schools to track lessons, submit assignments, and
            keep track of students' progress in real-time.
          </p>
          <a href="#landing2">
            <div class="learn flex">
              <svg
                width="15px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z"
                />
              </svg>
              <p>Learn More</p>
            </div>
          </a>
        </div>
        <div class="right w-[40%] h-[100%]">
          <img class="h-[100%]" src="../assets/landing.webp" alt="" />
        </div>
      </div>
    </div>
    <div id="landing2" class="landing2 pt-40">
      <div class="containerr flex gap-10 items-center">
        <div class="left w-[50%]">
          <p class="tracking-[4px]">SCALABLE E-LEARNING PLATFORMS</p>
          <h1 class="mt-5 mb-5 text-[34px] font-bold">
            Does your LMS keep throwing obstacles in your path?
          </h1>
          <p class="text-[20px] mb-10">
            Building an LMS without a solid strategy is a financial and
            operational disaster. What starts as a bold move quickly spirals
            into delays, runaway costs, and a platform that falls apart.
          </p>
          <p class="text-[20px] mb-9">
            What follows is a cascade of issues that stall growth:
          </p>
          <p class="flex mb-4 text-[20px]">
            <img
              class="mr-3 opacity-[1]"
              src="https://cdn.prod.website-files.com/654e1f5b23eb486177f30f14/68344b12437e8106199fe0de_growth.svg"
              alt=""
            />
            Poor Engagement They stop engaging
          </p>
          <p class="flex mb-4 text-[20px]">
            <img
              class="mr-3 opacity-[1]"
              src="https://cdn.prod.website-files.com/654e1f5b23eb486177f30f14/68344accb7764966d3d4d60e_browser-delete--app-code-apps-fail-delete-window-remove-cross.svg"
              alt=""
            />
            Limited control leaves your business vulnerable
          </p>
          <p class="flex mb-4 items-start text-[20px]">
            <img
              class="mr-3 mt-1 opacity-[1]"
              src="https://cdn.prod.website-files.com/654e1f5b23eb486177f30f14/68344aba6f6cb66a17239563_tinder.svg"
              alt=""
            />
            Scalability bottlenecks like manual workflows, missing features and
            unreliable tech
          </p>
        </div>
        <div class="right w-[50%]">
          <img src="../assets/landing2.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  name: "Landing",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
.landing {
  height: 110vh;
}
p {
  opacity: 0.8;
  line-height: 1.5;
}
.learn {
  color: var(--blue);
  fill: var(--blue);
  cursor: pointer;
  width: fit-content;
}
.learn:hover {
  p {
    transform: translateY(-2px);
    opacity: 0.5;
  }
  svg {
    transform: translateY(2px);
    opacity: 0.5;
  }
}
.learn p {
  margin-left: 10px;
  font-weight: 600;
  font-size: 17px;
  text-transform: uppercase;
  transition: var(--transition);
}
.learn svg {
  transition: var(--transition);
}
// landing2
.landing2 {
  height: 100vh;
}
</style>
