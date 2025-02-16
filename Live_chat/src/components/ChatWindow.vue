<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messageBox">
      <div v-for="doc in formatedDocs" :key="doc.id" class="single">
        <div>
          <span class="created-at">{{ doc.createdAt }}</span>
          <span class="name">{{ doc.name }}:</span>
          <span class="message" :class="{'selfMsg': user?.displayName === doc.name }">{{ doc.message }}</span>
        </div>
      </div>
    </div>
    <div v-else>
      <Spin />
    </div>
  </div>
</template>

<script>
import getCollections from "../composibles/getCollections";
import { formatDistanceToNow } from "date-fns";
import Spin from "./Spinner.vue";
import { computed, ref, onUpdated } from "vue";
import useUserInfo from '@/composibles/useUserInfo';
export default {
  components: { Spin },
  setup() {
    const {user} = useUserInfo();
    const { error, documents } = getCollections("messages");
    const formatedDocs = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let fDate = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: fDate };
        });
      }
    });
    const messageBox = ref(null);
    onUpdated(()=>{
        messageBox.value.scrollTop = messageBox.value.scrollHeight
    })
    return { error, documents, formatedDocs, messageBox, user };
  },
};
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
  margin: 0;
  font-size: 18px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
.selfMsg{
    color:rgba(117, 4, 4);
    font-weight: 600;
}
</style>