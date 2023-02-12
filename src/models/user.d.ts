/**
 * 用户类型定义
 */
export type userType = {
    id:number;
    username:string;
    _account:string;
    avatar_url:string;
    gender:number;
    phone:string;
    email:string;
    create_time:Date;
    update_time:Date;
    _status:number;
    role:number;
    tags: string[];
    planetCode:string;
};