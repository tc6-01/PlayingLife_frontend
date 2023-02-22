// 定义获取用户api的后端请求

import myAxios from "../plugins/myAxios";
import {getCurrentUserState, setCurrentUserState} from "../states/user";

/**
 * 获取当前登录用户
 */
export const getCurrentUser = async () => {
    // 使用缓存
    // const currentUser = getCurrentUserState();
    // if (currentUser){
    //     console.log("本地存在用户")
    //     return currentUser
    // }
    // 不存在则从后端获取用户信息
    const res = await myAxios.get('/user/current');
    if (res.code === 0) setCurrentUserState(res.data);
    return res.data

}