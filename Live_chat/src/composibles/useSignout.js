import { projectAuth } from '@/firebase/config';
import { ref } from 'vue';

const error = ref(null);
const signout = async () => {
    try {
        error.value = null;
        const resp = await projectAuth.signOut();
        return resp;
    } catch(err){
        console.log(err.message);
        error.value = err.message
    }
}

const useSingout = () => {
    return {error, signout};
}

export default useSingout;