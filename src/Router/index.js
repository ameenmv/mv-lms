import { createRouter, createWebHistory } from "vue-router";
import Home from "../Pages/Home.vue";
import Login from "../Pages/Login.vue";
import Signup from "../Pages/Signup.vue";
import Student from "../Pages/Student.vue";
import Teacher from "../Pages/Teacher.vue";
import Lesson from "../Pages/Lesson.vue";
import Admin from "../Pages/Admin.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/Student/:id",
    name: "Student",
    component: Student,
    props: true,
  },
  {
    path: "/Teacher/:id",
    name: "Teacher",
    component: Teacher,
    props: true,
  },
  {
    path: "/lesson",
    name: "LessonDetails",
    component: Lesson,
    props: true,
  },
  {
    path: "/Admin",
    name: "Admin",
    component: Admin,
  },
];

const router = createRouter({
  history: createWebHistory(), // دي مهمة جداً عشان ال URL يتغير بشكل طبيعي
  routes,
});

export default router;
