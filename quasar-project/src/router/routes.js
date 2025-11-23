const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }, 
      { path: '/noveKnjige', component: () => import('pages/NoveKnjigePage.vue') }, 
      { path: '/popisKnjiga', component: () => import('pages/PopisKnjigaPage.vue') }, 
      { path: '/pretrazivanje', component: () => import('pages/PretrazivanjePage.vue') }, 
      { path: '/lokacija', component: () => import('pages/LokacijaPage.vue') }, 
      { path: '/login', component: () => import('pages/LoginPage.vue') }, 
      { path: '/registracija', component: () => import('pages/RegistracijaPage.vue') },
      { path: '/test', component: () => import('pages/TestPage.vue') },
      { path: '/test1', component: () => import('pages/Test1Page.vue') },
      { path: '/unosKnjige', component: () => import('pages/UnosNovihKnjiga.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes