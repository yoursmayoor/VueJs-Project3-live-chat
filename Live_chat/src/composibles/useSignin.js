import { ref } from 'vue';
import { projectAuth } from '@/firebase/config';
const error = ref(null);

const signin = async (email, password) => {
    try{
        const resp = await projectAuth.signInWithEmailAndPassword(email, password)
        error.value = null;
        console.log(resp);
        return resp;
    } catch(err){
        console.log(err.value)
        error.value = 'Incorrect login credentials';
    }

}

const useSignin = () => {
    return { error, signin }
}

export default useSignin;