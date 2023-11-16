import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MuseumDocument = HydratedDocument<Museum>;

@Schema({ timestamps: true })
export class Museum {
  @Prop({ required: [true, 'El nombre de Museo es requerido'] })
  name: string;

  @Prop({ required: [true, 'Las coordenadas del Museo es requerido'] })
  coordinate: string[];

  @Prop({ required: [true, 'El tipo de uso del Museo es requerido'] })
  use_type: string;

  @Prop({
    required: [true, 'El el tipo del equipamiento del Museo es requerido'],
  })
  equipament_type: string;

  @Prop({ required: [true, 'El ambito de Museo es requerido'] })
  ambit: string;
}

export const MuseumSchema = SchemaFactory.createForClass(Museum);
