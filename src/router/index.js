import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '../pages/Home/home'
import Audio from '../pages/Audio/audio'
import Group from '../pages/Group/group'
import Broadcast from '../pages/Broadcast/broadcast'
import Mine from '../pages/Mine/mine'
import One from '../pages/Audio/zu/one'
import Two from '../pages/Audio/zu/two'
import Three from '../pages/Audio/zu/three'
import Four from '../pages/Audio/zu/four'
import Five from '../pages/Audio/zu/five'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/home',
      	component: Home
    },
    
    {
    	path: '/audio',
      	component: Audio,
      	children: [
      		{path: 'one', component:One},
          {path: 'two', component:Two},
          {path: 'three', component:Three},
          {path: 'four', component:Four},
          {path: 'five', component:Five}
      	],
        redirect: '/audio/one',
    },
    {
    	path:'/broadcast',
    	component:Broadcast
    },
    {
    	path:'/group',
    	component:Group
    },
    {
    	path:'/mine',
    	component:Mine
    }

  ]
})
