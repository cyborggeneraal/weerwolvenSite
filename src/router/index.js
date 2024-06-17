import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import GamesView from '../views/GamesView.vue'
import GamePlayersOverviewView from '@/views/GamePlayersOverviewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/games',
      name: 'games',
      component: GamesView
    },
    {
      path: '/games/:id/players',
      name: 'gamePlayersOverview',
      component: GamePlayersOverviewView
    }
  ]
})

export default router
