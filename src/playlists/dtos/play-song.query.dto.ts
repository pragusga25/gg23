import { JoiSchema } from 'joi-class-decorators';
import { Joi } from '../../shared/libs';

export class PlaySongQueryDto {
  @JoiSchema(Joi.string().required())
  readonly id: string;
}
