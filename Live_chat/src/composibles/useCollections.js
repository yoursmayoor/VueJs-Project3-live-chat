import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

const useCollections = (collection) => {
  const error = ref(null);
  const addDoc = async (doc) => {
    try {
      await projectFirestore.collection(collection).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = "Could not send the message....";
    }
  };
  return { error, addDoc}
};

export default useCollections;
