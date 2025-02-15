<template>
  <div class="container">
    <p>Chat room</p>
    <NavigationBar />
  </div>
</template>

<script>
import { projectAuth } from "@/firebase/config";
import NavigationBar from "../components/NavigationBar.vue";
import { useRouter } from "vue-router";
import {watch} from 'vue'
import useUserInfo from '@/composibles/useUsesrInfo';

export default {
  components: { NavigationBar },
  setup() {
    const router = useRouter();
    const {user} = useUserInfo();
    
    watch(user, () => {
      if (!user.value) {
        router.push({name: 'welcome'});
      }
    });
  },
};
</script>

<style>
</style>