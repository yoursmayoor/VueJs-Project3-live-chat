<template>
  <div>
    <form @submit.prevent="handleLogin">
      <div class="error">{{error}}</div>
      <input type="text" name="email" placeholder="Enter Email" v-model="email" />
      <input type="text" name="password" placeholder="Enter Password" v-model="password" />
      <button>Login</button>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue';
import useSignin from '../composibles/useSignin';

export default {
  setup(props, context){
    //from context param, we can emit the user defined event in setup function.
    const email = ref('');
    const password = ref('');

    const {error, signin} = useSignin();

    const handleLogin = async () => {
      await signin(email.value, password.value);
       if (!error.value) {
        console.log('user logged in');
        //emited to user defined event to its parent
        //here in thise case wecome component can handle 'login' event
        context.emit('login')
      }
    }

    return{ email, password, handleLogin, error}
  }
};
</script>

<style>
</style>