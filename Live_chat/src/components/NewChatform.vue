<template>
  <form>
    <textarea
      v-model="message"
      placeholder="Type a message hit enter to send..."
      @keydown.enter.prevent="handleSubmit"
    >
    </textarea>
  </form>
</template>

<script>
import { ref } from "vue";
import { timestamp } from "../firebase/config";
import useUserInfo from "../composibles/useUserInfo";
import useCollections from "../composibles/useCollections";
export default {
  name: "NewChatform",
  setup() {
    const message = ref("");
    const { user } = useUserInfo();
    const { error, addDoc } = useCollections("messages");

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };
      console.log(chat);
      await addDoc(chat);
      if (!error.message) {
        message.value = "";
      }
    };
    return { handleSubmit, message };
  },
};
</script>

<style>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>