import { projectAuth } from "@/firebase/config";
import {ref} from 'vue'

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged(_user => {
    console.log('State change, current user', _user);
    user.value = _user
})

const useUserInfo = () => {
    return { user };
}
export default useUserInfo;