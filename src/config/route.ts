// 导入外部定义的页面实现路由
// 单独配置路由，实现解耦，更灵活地实现路由定义
import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";
import User from "../pages/User.vue";
import Search from "../pages/Search.vue";


// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
    {path: '/', name: '主页', component: Index},
    {path: '/team', name: '组队', component: Team},
    {path: '/user', name: '用户', component: User},
    {path: '/search', name: '组队', component: Search},
]
export default routes;