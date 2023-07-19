import { JoiSchema } from 'joi-class-decorators';
import { Joi } from '../../shared/libs';

export class AddSongBodyDto {
  @JoiSchema(Joi.string().required())
  readonly title: string;

  @JoiSchema(Joi.array().items(Joi.string().required()).min(1).required())
  readonly artists: string[];

  @JoiSchema(Joi.string().uri().required())
  readonly url: string;
}
