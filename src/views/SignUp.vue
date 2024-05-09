<template>
  <div
    class="header-options flex flex-col md:flex-row md:items-center justify-end gap-2 mb-2"
  >
    <label class="checkbox-container flex items-center gap-2 cursor-pointer">
      <p class="text-[0.9rem] font-light mt-[2px]">
        Are you a service provider?
      </p>
    </label>
    <router-link
      class="link text-[#4991B8] underline-none font-normal"
      :to="{ name: 'index' }"
    >
      Sign up as a professional</router-link
    >
  </div>
  <div class="login-form rounded-lg">
    <div class="content text-left">
      <h1 class="text-3xl font-bold text-[#212227]">Sign up as a customer</h1>
      <p class="text-base font-light mt-1">
        Please enter your details to continue with your account creation.
      </p>
    </div>

    <div class="socials flex items-center justify-center gap-8 my-6">
      <button
        class="h-10 w-10 flex items-center justify-center border rounded-lg"
      >
        <img src="/assets/icons/google.svg" alt="" class="w-3" />
      </button>
      <button
        class="h-10 w-10 flex items-center justify-center border rounded-lg"
      >
        <img src="/assets/icons/fb.svg" alt="" class="w-3.5" />
      </button>
      <button
        class="h-10 w-10 flex items-center justify-center border rounded-lg"
      >
        <img src="/assets/icons/apple.svg" alt="" class="w-3.5" />
      </button>
    </div>

    <p
      class="text-left leading-10 md:leading-7 font-normal text-[#fff] flex items-center gap-3 justify-center"
    >
      <span class="block w-[160px] h-0 border-b"></span>
      <span class="text-[#46474B] text-sm">or</span>
      <span class="block w-[160px] h-0 border-b"></span>
    </p>

    <form class="form-holder" @submit.prevent>
      <div class="form-group mb-5">
        <input
          v-model="credentials.firstName"
          type="text"
          :placeholder="'First name'"
          class="form-control rounded-lg input"
        />
      </div>
      <div class="form-group mb-5">
        <input
          v-model="credentials.lastName"
          type="text"
          :placeholder="'Last name'"
          class="form-control rounded-lg input"
        />
      </div>
      <div class="form-group mb-5">
        <input
          v-model="credentials.email"
          data-testid="email-input"
          type="email"
          :placeholder="'Email address'"
          class="form-control rounded-lg input"
        />
      </div>
      <div class="form-group mb-5">
        <input
          v-model="credentials.phone"
          type="number"
          :placeholder="'Phone number'"
          class="form-control rounded-lg input"
        />
      </div>
      <div class="form-group relative mb-0">
        <input
          v-model="credentials.password"
          data-testid="password-input"
          :placeholder="'Password'"
          class="form-control rounded-lg input"
          :type="showPassword ? 'text' : 'password'"
          @keyup.enter="loginUser"
        />
        <img
          src="/assets/icons/lashes.svg"
          alt="lashes"
          class="icon"
          :class="{ rotate: showPassword }"
          @click="showPassword = !showPassword"
        />
      </div>
      <div class="form-group relative mb-0">
        <input
          v-model="credentials.confirmPassword"
          data-testid="password-input"
          :placeholder="'Confirm password'"
          class="form-control rounded-lg input"
          :type="showConfirmPassword ? 'text' : 'password'"
        />
        <img
          src="/assets/icons/lashes.svg"
          alt="lashes"
          class="icon"
          :class="{ rotate: showConfirmPassword }"
          @click="showConfirmPassword = !showConfirmPassword"
        />
      </div>
    </form>
    <div
      class="login-options flex flex-col md:flex-row md:items-center md:flex-wrap w-full md:w-2/3 gap-2 mt-5"
    >
      <div class="flex items-center gap-1">
        <img
          src="/assets/icons/bx-check-circle-active.svg"
          alt=""
          class="w-4"
          v-if="credentials.password.length >= 8"
        />
        <img
          src="/assets/icons/bx-check-circle.svg"
          alt=""
          class="w-4"
          v-else
        />
        <p class="text-[0.8rem] font-light mt-[2px] text-[#6B6C6F]">
          At least 8 characters long
        </p>
      </div>
      <div class="flex items-center gap-1">
        <img
          src="/assets/icons/bx-check-circle-active.svg"
          alt=""
          class="w-4"
          v-if="pattern.test(credentials.password)"
        />
        <img
          src="/assets/icons/bx-check-circle.svg"
          alt=""
          class="w-4"
          v-else
        />
        <p class="text-[0.8rem] font-light mt-[2px]">
          One lower case character
        </p>
      </div>
      <div class="flex items-center gap-1">
        <img
          src="/assets/icons/bx-check-circle-active.svg"
          alt=""
          class="w-4"
          v-if="pattern.test(credentials.password)"
        />
        <img
          src="/assets/icons/bx-check-circle.svg"
          alt=""
          class="w-4"
          v-else
        />
        <p class="text-[0.8rem] font-light mt-[2px]">One upper case</p>
      </div>
      <div class="flex items-center gap-1">
        <img
          src="/assets/icons/bx-check-circle-active.svg"
          alt=""
          class="w-4"
          v-if="pattern.test(credentials.password)"
        />
        <img
          src="/assets/icons/bx-check-circle.svg"
          alt=""
          class="w-4"
          v-else
        />
        <p class="text-[0.8rem] font-light mt-[2px]">
          A symbol or special character
        </p>
      </div>
    </div>
    <div
      class="login-options flex flex-col md:flex-row md:items-center gap-2 mt-5"
    >
      <label class="checkbox-container flex items-center gap-2 cursor-pointer">
        <input type="checkbox" />
        <p class="text-[0.9rem] font-light mt-[2px]">
          By registering you are agreeing to our
        </p>
      </label>
      <div class="flex items-center gap-2">
        <router-link
          class="link text-[#4991B8] underline-none font-light"
          :to="{ name: 'index' }"
          >Terms of use</router-link
        >
        <span class="text-sm">and</span>
        <router-link
          class="link text-[#4991B8] underline-none font-light"
          :to="{ name: 'login' }"
          >Privacy Policy</router-link
        >
      </div>
    </div>
    <div class="login-button">
      <div class="mt-5">
        <app-button
          text="Sign up"
          type="submit"
          :disabled="true"
          buttonClasses="border h-max p-6 px-6 rounded-lg text-white w-full bg-[#57AEDD] border-[#57AEDD] text-[13px]"
        />
      </div>
    </div>
    <div class="login-options flex items-center justify-center mt-5 gap-2">
      <p class="text-base font-light text-center">Already have an account?</p>
      <router-link class="link text-[#4991B8] underline" :to="{ name: 'login' }"
        >Login</router-link
      >
    </div>
  </div>
</template>
  
  <script>
import { ref, computed, defineComponent } from "vue";

export default defineComponent({
  setup() {},

  data: () => ({
    credentials: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    showPassword: false,
    showConfirmPassword: false,
    pattern: new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    ),
  }),

  mounted() {},
  created() {},
  methods: {
    async loginUser() {
      console.log(900);
    },
  },
});
</script>
  
  <style scoped lang="scss">
@import "@/assets/main.scss";

.header-options {
  margin: 0px auto;
  width: 650px;

  a {
    text-decoration: underline;
  }
  p,
  a {
    font-size: 0.9rem;
  }
}
.login-form {
  margin: 0px auto;
  width: 650px;
  background: #fff;
  border: 1px solid #d3d3d4;
  padding: 2rem 2.5rem;

  .logo {
    margin-bottom: 3rem;

    img {
      width: auto;
      height: 2.55rem;
      margin: 0px auto;
    }
  }

  .form-holder {
    width: 100%;
    margin: 0px auto;
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    .input {
      font-size: 1rem !important;
      border: 1px #d3d3d4 solid;
      height: 56px !important;
      &:focus {
        border: 1px #d3d3d4 solid !important;
      }

      &::placeholder {
        font-weight: 400 !important;
        color: #232220;
        opacity: 0.4;
      }

      &.error-border {
        border-bottom: 1px solid #ce3c3c;
      }
    }

    .icon {
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: 14px;
      transition: transform 0.8s;

      &.rotate {
        transform: rotateX(180deg);
      }
    }

    .login-options {
      a {
        text-decoration: none;
        font-size: 0.9rem;
      }
    }

    .error {
      color: #ce3c3c;
      font-size: 0.625rem;
      font-weight: 700;
      font-style: normal;
      padding-top: 5px;
    }
  }

  .login-button {
    margin-top: 1rem;

    button {
      margin: 0px auto;
      height: 42px;

      &:disabled {
        opacity: 0.9;
        cursor: not-allowed;
      }
    }
  }
}

.login-options {
  a {
    text-decoration: none;
    font-size: 0.9rem;
  }
}

.mb-1 {
  margin-bottom: 1rem;
}

@media (max-width: 568px) {
  .login-form {
    width: 90%;
    padding: 1rem;
    margin-bottom: 2rem;

    .form-holder {
      width: 100%;
      grid-template-columns: 1fr;
    }
  }

  .header-options {
    width: 90%;
  }
}

@media ((min-width: 568px) and (max-width: 1200px)) {
  .login-form {
    width: 655px;
  }
  .header-options {
    width: 655px;
  }
}

input[type="checkbox"] {
  display: block !important;
  appearance: auto !important;
  width: max-content !important;
  height: max-content !important;
}
</style>