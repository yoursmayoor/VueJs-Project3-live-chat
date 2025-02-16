import { ref, watchEffect } from "vue";
import { projectFirestore } from "@/firebase/config";

const getCollections = (collection) => {
  const error = ref(null);
  const documents = ref(null);

  let collections = projectFirestore.collection(collection).orderBy('createdAt', 'asc');
  const unsubscribe =  collections.onSnapshot((snap)=> {
      const data = [];
      console.log("Snap is ruuning")
      snap.docs.forEach(doc => {
        doc.data().createdAt && data.push({...doc.data(), id:doc.id})
      })
      documents.value = data,
      error.value = null
    
  }, (err) => {
    error.value = err.message
    documents.value = null
    console.log(err.message);
  })
  watchEffect((onInvalidated)=>{
    // unsubsribing the span used in getting collections
    onInvalidated(()=>unsubscribe());
  })
  return { error, documents };
};
export default getCollections;
