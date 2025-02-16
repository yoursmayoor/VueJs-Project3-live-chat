<template>
  <div class="container">
    <NavigationBar />
    <ChatWindow />
    <NewChatform />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import {watch} from 'vue'
import useUserInfo from '../composibles/useUserInfo';
import NavigationBar from "../components/NavigationBar.vue"
import NewChatform from "../components/NewChatform.vue"
import ChatWindow from "../components/ChatWindow.vue"



export default {
  components: { NavigationBar, NewChatform, ChatWindow },
  setup() {
    const router = useRouter();
    const {user} = useUserInfo();

    watch(user, () => {
      if (!user.value) {
        router.push({name: 'welcome'});
      }
    });
    return {}
  },
};
</script>

<style>
</style>