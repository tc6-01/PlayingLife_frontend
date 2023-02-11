// 导入外部定义的页面实现路由
// 单独配置路由，实现解耦，更灵活地实现路由定义
import index from "../pages/index.vue";
import team from "../pages/team.vue";
import user from "../pages/user.vue";


// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
    { path: '/', name: '主页' ,component: index },
    { path: '/team', name: '组队', component: team },
    { path: '/user', name: '用户', component: user },
]
export default routes;