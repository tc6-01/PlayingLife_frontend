/**
 * 用户类别
 */
export type UserType = {
    id: number;
    username: string;
    _account: string;
    avatar_url?: string;
    profile?: string;
    gender:number;
    phone: string;
    email: string;
    userStatus: number;
    role: number;
    planetCode: string;
    tags: string;
    create_time: Date;
};
