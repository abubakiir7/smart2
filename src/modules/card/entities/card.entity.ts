import { Model } from "sequelize";
import { Column, DataType, Default, Table } from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";

interface ICardCreationAttr {
  user_id: number;
  balance: number;
}

@Table({ tableName: "card" })
export class Card extends Model<Card, ICardCreationAttr> {
  @Default(uuidv4)
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
  })
  uuid: string;

  @Column({ type: DataType.NUMBER })
  user_id: number;

  @Column({ type: DataType.DECIMAL })
  balance: number;
}
