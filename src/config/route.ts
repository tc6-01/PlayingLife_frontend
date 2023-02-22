// 导入外部定义的页面实现路由
// 单独配置路由，实现解耦，更灵活地实现路由定义
import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";
import User from "../pages/User.vue";
import Search from "../pages/Search.vue";
import SearchResult from "../pages/SearchResult.vue";
import EditPage from "../pages/EditPage.vue";
import userLogin from "../pages/userLogin.vue";


// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
    { path: '/', name: '主页', component: Index },
    { path: '/team', name: '组队', component: Team },
    { path: '/user', name: '用户', component: User },
    { path: '/search', name: '组队', component: Search },
    { path: '/searchResult', name: '搜索结果', component: SearchResult },
    { path: '/user/edit', name: '编辑页面', component: EditPage },
    { path: '/user/login', name: '用户登录', component: userLogin },
]
export default routes;