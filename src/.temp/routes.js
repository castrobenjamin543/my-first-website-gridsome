const c1 = () => import(/* webpackChunkName: "page--src-pages-nose-vue" */ "C:\\Users\\Benjamin\\Desktop\\my-first-website-gridsome\\my-first-website-gridsome\\src\\pages\\Nose.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\Benjamin\\Desktop\\my-first-website-gridsome\\my-first-website-gridsome\\src\\pages\\About.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\Benjamin\\Desktop\\my-first-website-gridsome\\my-first-website-gridsome\\node_modules\\gridsome\\app\\pages\\404.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\Benjamin\\Desktop\\my-first-website-gridsome\\my-first-website-gridsome\\src\\pages\\Index.vue")

export default [
  {
    path: "/nose/",
    component: c1
  },
  {
    path: "/about/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
