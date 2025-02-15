<template>
  <div class="welcome container">
    <!-- <p>welcome</p> -->
    <div v-if="showLogin">
      <h2>Login</h2>
      <Login @login="enterChatroom" />
      <p>
        No account yet? <span @click="showLogin = false">Sign up</span> instead
      </p>
    </div>
    <div v-else>
      <h2>Sing In</h2>
      <SigninForm @signup="enterChatroom" />
      <p>
        Already registered? <span @click="showLogin = true">Login</span> instead
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SigninForm from "../components/SigninForm.vue";
import Login from "../components/LoginForm.vue";
import { useRouter } from "vue-router";
export default {
  components: { SigninForm, Login },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();
    const enterChatroom = () => {
      router.push("/Chatroom");
      //before entering chatroom it will check for authentication
      // in router file 'beforeEnter: requiredAuthentication'
    };
    return { showLogin, enterChatroom };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 15px 10px;
  border-radius: 10px;
  border: 1px solid #9a9a9a;
  outline: none;
  color: #6a6a6a;
  font-size: 16px;
  margin: 10px auto;
  font-weight: bold;
}
.welcome input::placeholder {
  color: #a0a0aa;
  font-size: 18px;
}

.welcome span {
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
}
.welcome button {
  margin: 15px 0;
}
</style>