<template>
  <div class="h-[100vh]">
    <div class="h-[100%] flex">
      <div
        class="left w-[50%] relative flex flex-col items-center justify-center"
      >
        <div ref="trueStudent" class="trueStudent">
          Signed Up Successfully as Student ✔️
        </div>
        <div ref="trueTeacher" class="trueTeacher">
          Signed Up Successfully as Teacher ✔️
        </div>
        <h1 v-if="role === 'student'" class="uppercase font-bold text-[34px]">
          Sign Up As Student
        </h1>
        <h1 v-if="role === 'teacher'" class="uppercase font-bold text-[34px]">
          sign up As Teacher
        </h1>
        <p class="mt-2 mb-4">Hey let's go to your control panel ?</p>
        <!-- student -->
        <div v-if="role === 'student'" class="input-group relative">
          <span class="icon user"></span>
          <input
            v-model="firstStudent"
            type="name"
            placeholder="First Name"
            name=""
            id=""
          />
        </div>
        <div v-if="role === 'student'" class="input-group relative">
          <span class="icon user"></span>
          <input
            v-model="lastStudent"
            type="name"
            placeholder="Last Name"
            name=""
            id=""
          />
        </div>
        <div v-if="role === 'student'" class="input-group relative">
          <span class="icon user"></span>
          <input
            v-model="userNameStudent"
            type="name"
            placeholder="User Name"
            name=""
            id=""
          />
        </div>
        <!-- Teacher -->
        <div v-if="role === 'teacher'" class="input-group relative">
          <span class="icon user"></span>
          <input
            v-model="firstTeacher"
            type="name"
            placeholder="First Name"
            name=""
            id=""
          />
        </div>
        <div v-if="role === 'teacher'" class="input-group relative">
          <span class="icon user"></span>
          <input
            v-model="lastTeacher"
            type="name"
            placeholder="Last Name"
            name=""
            id=""
          />
        </div>
        <div v-if="role === 'teacher'" class="input-group relative">
          <span class="icon user"></span>
          <input
            v-model="userNameTeacher"
            type="name"
            placeholder="User Name"
            name=""
            id=""
          />
        </div>
        <!-- student -->
        <div v-if="role === 'student'" class="input-group relative">
          <span class="icon user"></span>
          <input
            v-model="emailStudent"
            type="email"
            placeholder="Email"
            name=""
            id=""
          />
        </div>
        <div v-if="role === 'student'" class="input-group mb-5 relative">
          <span class="icon lock"></span>
          <input
            v-model="passwordStudent"
            type="password"
            placeholder="Password"
            name=""
            id=""
          />
        </div>
        <!-- teacher -->
        <div v-if="role === 'teacher'" class="input-group relative">
          <span class="icon user"></span>
          <input
            v-model="emailTeacher"
            type="email"
            placeholder="Email"
            name=""
            id=""
          />
        </div>
        <div v-if="role === 'teacher'" class="input-group mb-5 relative">
          <span class="icon lock"></span>
          <input
            v-model="passwordTeacher"
            type="password"
            placeholder="Password"
            name=""
            id=""
          />
        </div>
        <button v-if="role === 'student'" @click="studentSignup" class="btn">
          Signup
        </button>
        <button v-if="role === 'teacher'" @click="teacherSignup" class="btn">
          Signup
        </button>
        <p
          v-if="role === 'student'"
          @click="chaneRole"
          class="font-semibold are tracking mt-5"
        >
          Are you a teacher? Click here to sign up
        </p>
        <p
          v-if="role === 'teacher'"
          @click="chaneRole"
          class="font-semibold are tracking mt-5"
        >
          Are you a student? Click here to sign up
        </p>
        <router-link to="/Login"
          ><p class="font-semibold are tracking mt-10">
            You didn't have an account? Click To signup
          </p></router-link
        >
      </div>
      <div
        class="right relative w-[50%] flex flex-col items-center justify-center"
      >
        <div class="image">
          <h1 class="mt-7 ml-7 font-bold text-[32px] color-[#eee]">
            Very good
            <br />
            works are
            <br />
            waiting for
            <br />
            you Login
            <br />
            Now!!!
          </h1>
          <img class="women" src="../assets/women.png" alt="" />
          <div class="volt"><img src="../assets/volt.png" alt="" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Signup",
  data() {
    return {
      role: "student",
      usersStudent: [],
      usersTeacher: [],
      firstStudent: "",
      firstTeacher: "",
      lastStudent: "",
      lastTeacher: "",
      userNameStudent: "",
      userNameTeacher: "",
      emailStudent: "",
      emailTeacher: "",
      passwordStudent: "",
      passwordTeacher: "",
    };
  },
  methods: {
    studentSignup() {
      // تحديث بيانات الطلاب أولًا
      axios
        .get("https://6878e7b563f24f1fdc9ff4cf.mockapi.io/api/studentLogin")
        .then((res) => {
          this.usersStudent = res.data;

          // بعد التحديث.. ابدأ التشييك
          const foundUser = this.usersStudent.find(
            (user) =>
              user.email === this.emailStudent ||
              user.userName === this.userNameStudent
          );

          if (foundUser) {
            alert("البريد الإلكتروني أو اسم المستخدم مستخدم بالفعل.");
          } else {
            // لو مفيش يوزر مشابه.. اعمل التسجيل
            axios
              .post(
                "https://6878e7b563f24f1fdc9ff4cf.mockapi.io/api/studentLogin",
                {
                  firstName: this.firstStudent,
                  lastName: this.lastStudent,
                  userName: this.userNameStudent,
                  email: this.emailStudent,
                  password: this.passwordStudent,
                }
              )
              .then((response) => {
                console.log("Student signed up successfully", response.data);
              })
              .catch((error) => {
                console.error(error);
              });
          }
        })
        .catch((err) => {
          console.error(err);
        });

      const el = this.$refs.trueStudent;

      el.classList.add("block");

      setTimeout(() => {
        el.classList.remove("block");
        this.$router.push("/Login");
      }, 3000); // بعد 3 ثواني
    },

    // teacher signup
    teacherSignup() {
      axios
        .get("https://6878e7b563f24f1fdc9ff4cf.mockapi.io/api/teacherlogin")
        .then((res) => {
          this.usersTeacher = res.data;

          // بعد التحديث.. ابدأ التشييك
          const foundUser = this.usersTeacher.find(
            (user) =>
              user.email === this.emailTeacher ||
              user.userName === this.userNameTeacher
          );

          if (foundUser) {
            alert("البريد الإلكتروني أو اسم المستخدم مستخدم بالفعل.");
          } else {
            // لو مفيش يوزر مشابه.. اعمل التسجيل
            axios
              .post(
                "https://6878e7b563f24f1fdc9ff4cf.mockapi.io/api/teacherlogin",
                {
                  firstName: this.firstTeacher,
                  lastName: this.lastTeacher,
                  userName: this.userNameTeacher,
                  email: this.emailTeacher,
                  password: this.passwordTeacher,
                }
              )
              .then((response) => {
                console.log("Teacher signed up successfully", response.data);
              })
              .catch((error) => {
                console.error(error);
              });
          }
        })
        .catch((err) => {
          console.error(err);
        });

      const el2 = this.$refs.trueTeacher;

      el2.classList.add("block");

      setTimeout(() => {
        el2.classList.remove("block");
        this.$router.push("/Login");
      }, 3000); // بعد 3 ثواني
    },

    // change role
    chaneRole() {
      if (this.role === "teacher") {
        this.role = "student";
      } else {
        this.role = "teacher";
      }
    },
  },
  mounted() {
    axios
      .get("https://6878e7b563f24f1fdc9ff4cf.mockapi.io/api/studentLogin")
      .then((response) => {
        this.usersStudent = response.data;
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("https://6878e7b563f24f1fdc9ff4cf.mockapi.io/api/teacherlogin")
      .then((response2) => {
        this.usersTeacher = response2.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.trueStudent,
.trueTeacher {
  position: absolute;
  right: -200px; /* ابدأ بره الشاشة ناحية الشمال */
  z-index: 45;
  padding: 18px;
  border-radius: 20px;
  background: #0000ff8f;
  font-size: 17px;
  color: white;
  top: 15px;
  opacity: 0;
  transition: right 0.5s ease, opacity 0.5s ease;
}
.block {
  display: block !important;
  right: 50px; /* يتحرك نحية اليمين (مكان الظهور) */
  opacity: 1; /* يظهر تدريجيًا */
}

p {
  letter-spacing: 1.6px;
  opacity: 0.8;
}
.are {
  letter-spacing: 0.8px;
  cursor: pointer;
}
input {
  width: 320px;
  padding: 15px;
  padding-left: 50px;
  margin: 10px 0;
  border: none;
  outline: none;
  border-radius: 15px;
  background-color: var(--purple);
  color: #000000;
  font-size: 16px;
  position: relative;
}
.icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 10px;
  position: absolute;
  z-index: 1;
  left: 18px;
  top: 33%;
}
.input-group .user {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 24 24'%3E%3Cpath d='M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z'/%3E%3C/svg%3E");
}

/* أيقونة القفل */
.input-group .lock {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 24 24'%3E%3Cpath d='M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-6h-1V9c0-3.3-2.7-6-6-6S5 5.7 5 9v2H4c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm-8-2c0-1.7 1.3-3 3-3s3 1.3 3 3v2H10V9zm8 13H6v-9h12v9z'/%3E%3C/svg%3E");
}
.input::before {
  content: "";
}
.btn {
  background: var(--purple2);
  padding: 14px 40px;
  color: white;
}

.right {
  background-image: url(../assets/loginbg.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.image {
  background-image: url(../assets/womenbg.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 412px;
  height: 524px;
  position: relative;
}
.image h1 {
  color: #eee;
  line-height: 1.4;
}
.women {
  position: absolute;
  top: 0px;
  right: -55px;
}
.volt {
  position: absolute;
  bottom: 25%;
  width: 70px;
  height: 70px;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  left: -32px;
}
</style>
