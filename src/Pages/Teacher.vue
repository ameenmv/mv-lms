<template>
  <Navbar2 />
  <div class="dash">
    <div class="flex gap-6 h-[100%]">
      <div class="left h-[100%] w-[20%] pt-4">
        <h1
          @click="active = 'one'"
          :class="{ active: active === 'one' }"
          class="font-bold text-[20px] p-5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 384l0-128 16 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-288 56 0 64 0 16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-64 192 0 0 192-192 0 0-32-64 0 0 48c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48L368 0c-26.5 0-48 21.5-48 48l0 80-76.9 0-65.9 0c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L120 256.9 120 480c0 17.7 14.3 32 32 32s32-14.3 32-32z"
            /></svg
          >Manage Lessons
        </h1>
        <h1
          @click="active = 'two'"
          :class="{ active: active === 'two' }"
          class="font-bold text-[20px] p-5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
            /></svg
          >Add Lesson
        </h1>
      </div>
      <div class="right h-[100%] w-[80%]">
        <section
          v-if="teacherLessons.length > 0 && active === 'one'"
          class="pl-8 pr-8 flex-wrap"
        >
          <h2 class="font-bold text-[24px] mb-4">
            Welcome MR {{ teacherData.firstName }}
          </h2>
          <div class="manage-lessons">
            <div
              v-for="(lesson, index) in teacherLessons"
              :key="index"
              class="mb-5 p-4 border rounded w-[550px]"
            >
              <img
                :src="lesson.imageUrl"
                alt="Lesson Image"
                class="w-[450px] h-auto my-3 rounded-lg"
              />
              <h3
                class="font-semibold text-[20px] mb-2 break-words whitespace-normal max-w-full"
              >
                lesson Name : {{ lesson.name }}
              </h3>
              <p class="mb-2 break-words whitespace-normal max-w-full">
                Description : {{ lesson.description }}
              </p>
              <p class="mb-2 break-words whitespace-normal max-w-full">
                Video URL : {{ lesson.videoUrl }}
              </p>

              <!-- <iframe
                v-if="extractYouTubeID(lesson.videoUrl)"
                :src="
                  'https://www.youtube.com/embed/' +
                  extractYouTubeID(lesson.videoUrl)
                "
                frameborder="0"
                allowfullscreen
                class="w-[100%] h-64 rounded-lg"
              ></iframe> -->
            </div>
          </div>
        </section>

        <p
          v-if="!teacherLessons.length && active === 'one'"
          class="text-center font-bold text-[20px]"
        >
          No lessons found. Go to Add Lesson section to create your first
          lesson.
        </p>
        <div class="pl-8 pr-8 two" v-if="active === 'two'">
          <div class="mb-10">
            <label class="font-semibold" for="">Lesson Name</label>
            <input v-model="lessonName" type="text" class="" />
          </div>
          <div class="mb-10">
            <label class="font-semibold" for="">Description</label>
            <textarea
              v-model="Description"
              type="text"
              class="max-h-[150px] h-[150px]"
            />
          </div>
          <div class="flex justify-between gap-5">
            <div class="w-[50%]">
              <label class="font-semibold" for="">Cover Image</label>
              <textarea
                placeholder="Enter Image URL"
                v-model="imageUrl"
                class="min-h-[150px]"
              />
            </div>
            <div class="w-[50%]">
              <label class="font-semibold" for="">Video</label>
              <textarea
                placeholder="Enter YouTube Video URL"
                v-model="videoUrl"
                class="min-h-[150px]"
              />
            </div>
          </div>
          <div class="w-[100%] mt-7 flex justify-center items-center">
            <button @click="submit" class="btn items-center">Add Lesson</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar2 from "../components/Navbar2.vue";

export default {
  name: "Teacher",
  components: { Navbar2 },
  data() {
    return {
      imageUrl: "",
      videoUrl: "",
      lessonName: "",
      Description: "",
      active: "one",
      teacherLessons: [],
      teacherId: localStorage.getItem("teacherId"),
      students: [
        { name: "John Doe", email: "john@example.com", status: "Active" },
        { name: "Sarah Smith", email: "sarah@domain.com", status: "Inactive" },
      ],
      usersTeacher: [],
    };
  },
  computed: {
    teacherData() {
      return this.usersTeacher.find((user) => user.id == this.teacherId);
    },
  },
  methods: {
    extractYouTubeID(url) {
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      return match && match[2].length === 11 ? match[2] : null;
    },
    async submit() {
      if (
        ![
          this.imageUrl,
          this.videoUrl,
          this.lessonName,
          this.Description,
        ].every(Boolean)
      ) {
        alert("Please fill all fields and upload image and video.");
        return;
      }

      try {
        const { data: teacher } = await axios.get(
          `https://6878e7b563f24f1fdc9ff4cf.mockapi.io/api/teacherlogin/${this.teacherId}`
        );
        const updatedLessons = [
          ...(teacher.lessons || []),
          {
            name: this.lessonName,
            description: this.Description,
            imageUrl: this.imageUrl,
            videoUrl: this.videoUrl,
          },
        ];

        await axios.put(
          `https://6878e7b563f24f1fdc9ff4cf.mockapi.io/api/teacherlogin/${this.teacherId}`,
          {
            ...teacher,
            lessons: updatedLessons,
          }
        );

        alert("Lesson added successfully!");
        Object.assign(this, {
          lessonName: "",
          Description: "",
          imageUrl: "",
          videoUrl: "",
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
  async mounted() {
    try {
      const [{ data: users }, { data: teacher }] = await Promise.all([
        axios.get(
          "https://6878e7b563f24f1fdc9ff4cf.mockapi.io/api/teacherlogin"
        ),
        axios.get(
          `https://6878e7b563f24f1fdc9ff4cf.mockapi.io/api/teacherlogin/${this.teacherId}`
        ),
      ]);

      this.usersTeacher = users;
      this.teacherLessons = teacher.lessons || [];
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.dash {
  background-color: var(--bg);
  min-height: 100vh;
  color: white;
}
.left,
.right {
  background-color: #2d2249;
  min-height: 100vh;
  padding-top: 100px;
}
.left h1 {
  cursor: pointer;
  border-radius: 10px;
  transition: 0.2s;
  display: flex;
}
.left h1 svg {
  widows: 20px;
  height: 20px;
  margin-right: 15px;
  fill: white;
}
.active {
  background: #0091ff;
}

.right .no {
  border: 1px solid #ffffff23;
  margin: 20px;
}
.right .two input,
.right .two textarea {
  border: 1px solid #ffffff41;
  width: 100%;

  padding: 10px;
  margin-top: 10px;
}
input#file-upload-button {
  margin-right: 20px;
}

.manage-lessons {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
