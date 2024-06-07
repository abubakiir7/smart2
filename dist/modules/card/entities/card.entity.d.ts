import { Model } from "sequelize";
interface ICardCreationAttr {
    user_id: number;
    balance: number;
}
export declare class Card extends Model<Card, ICardCreationAttr> {
    uuid: string;
    user_id: number;
    balance: number;
}
export {};
