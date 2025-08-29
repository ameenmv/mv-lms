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
          >Manage Users
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
          >Manage Lessons
        </h1>
      </div>
      <div class="right h-[100%] w-[80%]">
        <div class="" v-if="active === 'one'">
          <div class="p-5">
            <h1 class="font-bold text-2xl mb-4">Students List</h1>
            <table class="min-w-full rounded-lg shadow">
              <thead class="">
                <tr>
                  <th class="p-3 text-left font-semibold">#</th>
                  <th class="p-3 text-left font-semibold">Student Name</th>
                  <th class="p-3 text-left font-semibold">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-t"
                  v-for="(student, index) in students"
                  :key="index"
                >
                  <td class="p-3">{{ index + 1 }}</td>
                  <td class="p-3">{{ student.userName }}</td>
                  <td class="p-3">{{ student.email }}</td>
                  <button
                    class="btn"
                    @click="deleteUser(student.id, 'student')"
                  >
                    Delete Student
                  </button>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="p-5">
            <h1 class="font-bold text-2xl mb-4">Teachers List</h1>
            <table class="min-w-full rounded-lg shadow">
              <thead class="">
                <tr>
                  <th class="p-3 text-left font-semibold">#</th>
                  <th class="p-3 text-left font-semibold">Teacher Name</th>
                  <th class="p-3 text-left font-semibold">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-t"
                  v-for="(teacher, index) in teachers"
                  :key="index"
                >
                  <td class="p-3">{{ index + 1 }}</td>
                  <td class="p-3">{{ teacher.userName }}</td>
                  <td class="p-3">{{ teacher.email }}</td>
                  <button
                    class="btn"
                    @click="deleteUser(teacher.id, 'teacher')"
                  >
                    Delete Teacher
                  </button>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <section
          v-if="lessons.length > 0 && active === 'two'"
          class="pl-8 pr-8 flex-wrap"
        >
          <div class="manage-lessons">
            <div
              v-for="(lesson, index) in lessons"
              :key="index"
              class="mb-5 p-4 border rounded w-[100%]"
            >
              <img
                :src="lesson.imageUrl"
                alt="Lesson Image"
                class="w-[700px] h-auto my-3 rounded-lg"
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
              <button class="btn mt-2" @click="deleteLesson(lesson)">
                Delete Lesson
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar2 from "../components/Navbar2.vue";
export default {
  name: "Admin",
  data() {
    return {
      active: "one",
      teachers: [],
      lessons: [],
      students: [],
    };
  },
  components: {
    Navbar2,
  },
  methods: {
    deleteLesson(lessonToDelete) {
      if (confirm("Are you sure you want to delete this lesson?")) {
        // حدد المدرس الصحيح
        const teacher = this.teachers.find(
          (t) => t.id === lessonToDelete.teacherId
        );

        if (!teacher) {
          alert("Teacher not found for this lesson!");
          return;
        }

        // احذف الدرس من teacher.lessons
        teacher.lessons = (teacher.lessons || []).filter((lesson) => {
          return lesson.name !== lessonToDelete.name;
        });

        // ابعت التحديث للـ API
        axios
          .put(
            `https://6878e7b563f24f1fdc9ff4cf.mockapi.io/api/teacherlogin/${teacher.id}`,
            teacher
          )
          .then(() => {
            alert("Lesson deleted successfully.");

            // حدث الدروس المعروضة
            this.lessons = this.lessons.filter((l) => l !== lessonToDelete);
          })
          .catch((error) => {
            console.error("Error deleting lesson:", error);
          });
      }
    },
    deleteUser(userId, type) {
      const apiUrl =
        type === "teacher"
          ? `https://6878e7b563f24f1fdc9ff4cf.mockapi.io/api/teacherlogin/${userId}`
          : `https://6878e7b563f24f1fdc9ff4cf.mockapi.io/api/studentLogin/${userId}`;

      axios
        .delete(apiUrl)
        .then(() => {
          alert(`${type} deleted successfully.`);

          // حذف من الليست اللي معروضة
          if (type === "teacher") {
            this.teachers = this.teachers.filter((user) => user.id !== userId);
          } else {
            this.students = this.students.filter((user) => user.id !== userId);
          }
        })
        .catch((error) => {
          console.error(`Error deleting ${type}:`, error);
        });
    },
  },
  mounted() {
    axios
      .get("https://6878e7b563f24f1fdc9ff4cf.mockapi.io/api/teacherlogin")
      .then((response) => {
        this.teachers = response.data;
        this.lessons = response.data.flatMap((teacher) => {
          return (teacher.lessons || []).map((lesson) => {
            return {
              ...lesson,
              teacherId: teacher.id, // ضف ID المدرس للدرس
            };
          });
        });
      })
      .catch((error) => {
        console.error("Error fetching teachers or lessons:", error);
      });

    axios
      .get("https://6878e7b563f24f1fdc9ff4cf.mockapi.io/api/studentLogin")
      .then((response) => {
        this.students = response.data;
        console.log(this.students);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });

    console.log(this.teachers);
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

.btn {
  background-color: rgba(255, 0, 0, 0.839);
  color: white;
}
</style>
