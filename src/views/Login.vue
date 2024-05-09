<template>
  <div class="login-form rounded-lg">
    <div class="content text-left">
      <h1 class="text-3xl font-bold text-[#212227]">Welcome Back</h1>
      <p class="text-base font-light mt-1">
        Enter your details to login to your account.
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
          v-model="credentials.email"
          data-testid="email-input"
          type="text"
          :placeholder="'Email address'"
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

      <div class="login-options flex items-center justify-between mt-5">
        <label
          class="checkbox-container flex items-center gap-2 cursor-pointer"
        >
          <input type="checkbox" />
          <p class="text-[0.9rem] font-light mt-[2px]">Remember me</p>
        </label>
        <router-link
          class="link text-[#4991B8] underline-none"
          :to="{ name: 'index' }"
          >Forgot Password</router-link
        >
      </div>
      <div class="login-button">
        <div class="mt-5">
          <app-button
            text="Login"
            type="submit"
            :disabled="true"
            buttonClasses="border h-max p-6 px-6 rounded-lg text-white w-full bg-[#57AEDD] border-[#57AEDD] text-[13px]"
          />
        </div>
      </div>
      <p class="text-base font-light mt-4 text-center">
        Don’t have an account?
      </p>
      <div class="flex flex-col gap-4 mt-5">
        <app-button
          text="Sign up as customer"
          type="submit"
          @click="$router.push('/sign-up')"
          buttonClasses="border h-max p-4 px-6 rounded-lg text-white w-full bg-[#4991B8] border-[#4991B8] text-[13px]"
        />
        <app-button
          text="Sign up as a professional"
          type="submit"
          @click="$router.push('/sign-up')"
          buttonClasses="border h-max p-4 px-6 rounded-lg text-white w-full bg-[#293683] border-[#293683] text-[13px]"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { ref, computed, defineComponent } from "vue";

export default defineComponent({
  setup() {},

  data: () => ({
    credentials: {
      email: "",
      password: "",
    },
    showPassword: false,
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

.login-form {
  margin: 0px auto;
  width: 555px;
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
    }
  }
}

@media ((min-width: 568px) and (max-width: 1200px)) {
  .login-form {
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