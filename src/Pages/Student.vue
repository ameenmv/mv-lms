<template>
  <Navbar2 />
  <div class="dash">
    <div class="flex gap-6 h-[100%]">
      <div class="left h-[100%] w-[100%] pt-4">
        <div
          @click="goToLesson(lesson)"
          v-for="(lesson, index) in lessons"
          :key="index"
          class="box"
        >
          <img class="w-[100%]" :src="lesson?.imageUrl" alt="" />
          <h1 class="break-words whitespace-normal max-w-[300px]">
            {{ lesson?.name }}
          </h1>
          <p class="break-words whitespace-normal max-w-[300px]">
            {{ lesson.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar2 from "../components/Navbar2.vue";
import axios from "axios";

export default {
  name: "Student",
  data() {
    return {
      teachers: [],
      lessons: [],
      students: [],
    };
  },
  components: { Navbar2 },

  methods: {
    goToLesson(lesson) {
      this.$router.push({
        name: "LessonDetails",
        query: {
          name: lesson.name,
          description: lesson.description,
          imageUrl: lesson.imageUrl,
          videoUrl: lesson.videoUrl,
        },
      });
    },
  },

  mounted() {
    axios
      .get("https://6878e7b563f24f1fdc9ff4cf.mockapi.io/api/teacherlogin")
      .then((response) => {
        this.teachers = response.data;
        this.lessons = response.data.flatMap((teacher) => teacher.lessons);
      })
      .catch((error) => {
        console.error("Error fetching lessons:", error);
      });
    axios
      .get("https://6878e7b563f24f1fdc9ff4cf.mockapi.io/api/studentLogin")
      .then((response) => {
        this.teachers = response.data;
        this.lessons = response.data.flatMap((teacher) => teacher.lessons);
      })
      .catch((error) => {
        console.error("Error fetching lessons:", error);
      });
  },
};
</script>

<style lang="scss" scoped>
.dash {
  background-color: var(--bg);
  min-height: 100vh;
  color: white;
  background-color: #2d2249;
  padding-left: 100px;
  padding-right: 100px;
}
.left {
  min-height: 100vh;
  padding-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
}
.box {
  background-color: #3b2a5c;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  width: 100%;
  height: 350px;
  color: white;
  transition: transform 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  img {
    border-radius: 10px;
    width: 100%;
    height: auto;
  }
  h1 {
    font-size: 20px;
    margin: 10px 0;
  }
  p {
    font-size: 16px;
    margin: 10px 0;
  }
}
</style>
