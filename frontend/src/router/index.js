import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main/Main';
import Sanc from '../components/sanc/Sanc';
import SancList from '../components/sanc/components/SancList';
import SancView from '../components/sanc/SancView';
import SancApproval from '../components/sanc/SancApproval';
import SancDelay from '../components/sanc/SancDelay';
import SancReject from '../components/sanc/SancReject';
import Board from '../components/board/Board';
import Login from '../components/login/Login';
import DuplicateLogin from '../components/login/DuplicateLogin';



Vue.use(Router);

const requireAuth = () => (from, to, next) => {
  const isAuthenticated = false
  if (isAuthenticated) return next()
    
};



export default new Router({
  routes: [
    {
      path: '/login', // 첫 화면을 메인으로 설정
      name: 'login',
      component: Login
    },
    {
      path: '/duplicate', // 첫 화면을 메인으로 설정
      name: 'duplicateLogin',
      component: DuplicateLogin
    },
    {
        path: '', // 첫 화면을 메인으로 설정
        name: 'main',
        component: Main
    },
    {
      path:'/sanc',
      name: "sanc",
      component : Sanc,
      children : [
        {
           path:':path/:page',
          component : SancList,
        }
      ]
    },
    {
      path :'/approval/:docId',
      name : "approval",
      component : SancApproval,
    },
    {
      path :'/:path/view/:docId',
      name: "sancView",
      component : SancView
    },
    {
      path :'/deley/:docId',
      name : "deley",
      component : SancDelay,
    },
    {
      path :'/reject/:docId',
      name : "reject",
      component : SancReject,
    },
    {
      path:'/brd',
      name: "board",
      component : Board
    }
      
  ]
});


