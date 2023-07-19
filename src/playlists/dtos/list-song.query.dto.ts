import { JoiSchema } from 'joi-class-decorators';
import { Joi } from '../../shared/libs';
import { OrderBy } from '../constants';

export class ListSongQueryDto {
  @JoiSchema(
    Joi.string()
      .valid(...Object.values(OrderBy))
      .optional()
  )
  readonly orderBy?: OrderBy;
}
