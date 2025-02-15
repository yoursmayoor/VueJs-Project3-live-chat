<template>
  <div>
    <form @submit.prevent="handleRegister">
      <div class="error">{{error}}</div>
      <input
        type="text"
        name="name"
        placeholder="Display Name"
        v-model="displayName"
      />
      <input type="text" name="email" placeholder="Email" v-model="email" />
      <input
        type="text"
        name="password"
        placeholder="Password"
        v-model="password"
      />
      <button>Sign Up</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import useSignup from "@/composibles/useSignup";

export default {
  setup(props, context) {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const { error, signup } = useSignup();

    const handleRegister = async () => {
      await signup(email.value, password.value, displayName.value);
        //emited to user defined event to its parent
        //here in thise case wecome component can handle 'login' event
      context.emit('signup')
    };

    return { displayName, email, password, handleRegister, error };
  },
};
</script>

<style>
</style>