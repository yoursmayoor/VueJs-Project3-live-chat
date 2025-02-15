import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import ChatRoom from '../views/ChatRoom.vue'
import { projectAuth } from '@/firebase/config';

const requiredAuthentication = (to, from, next) => {
  let user = projectAuth.currentUser;
  console.log('curent user(ROute)', user);
  if(!user){
    next({name: 'welcome'})
  } else {
    next(); //enters chatroom if user exits
  }

}
const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: ChatRoom,
    beforeEnter: requiredAuthentication
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

// import { createRouter, createWebHistory } from 'vue-router'
// import Welcome from '../views/Welcome.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'Welcome',
//     component: Welcome
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// export default router