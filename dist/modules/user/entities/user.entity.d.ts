import { Model } from 'sequelize-typescript';
interface IUserModelCreationAttr {
    id: number;
    phone: string;
}
export declare class User extends Model<IUserModelCreationAttr, User> {
    id: number;
    phone: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: 'erkak' | 'ayol';
}
export {};
