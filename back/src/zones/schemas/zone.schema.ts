import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ZoneDocument = HydratedDocument<Zone>;

@Schema({ timestamps: true })
export class Zone {
  @Prop({ required: [true, 'Número densidad querido'] })
  dn: number;

  @Prop({ required: [true, 'Coordenadas de zona requeridas'] })
  geometry: string;
}

export const ZoneSchema = SchemaFactory.createForClass(Zone);
