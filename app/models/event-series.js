import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class EventSeriesModel extends Model {
  @attr('string')
  name;
}
