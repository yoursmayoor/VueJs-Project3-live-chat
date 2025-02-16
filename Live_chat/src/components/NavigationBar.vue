
<template>
  <nav v-if="user">
    <div>
      <p>Hey there <span>{{user.displayName}}</span></p>
      <p class="email">Currently logged in as <span>{{user.email}}</span></p>
    </div>
    <button @click="handleSignout">Logout</button>
  </nav>
  <p v-if="error" class="error">{{error}}</p>
</template>

<script>
// import {useRouter} from 'vue-router'
import useSignout from '../composibles/useSignout';
import useUserInfo from '../composibles/useUserInfo';
export default {
    setup(){
        const {error, signout} = useSignout();
        const {user} = useUserInfo();

        const handleSignout = async () => {
            console.log("Heet therer")
            await signout();
            console.log('user signout')
        }

        return {error, handleSignout, user}
    }
}
</script>

<style>
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
  nav > div > p > span{
    font-weight: bold;
    color:#444
  }
</style>
