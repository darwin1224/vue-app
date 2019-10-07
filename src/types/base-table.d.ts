/**
 * Base table types
 */
export interface IBaseTable {
  /**
   * Field name as key
   *
   * @type {string}
   */
  key?: string;

  /**
   * Alias table key
   *
   * @type {string}
   */
  label?: string;

  /**
   * Is sortable or not
   *
   * @type {boolean}
   */
  sortable?: boolean;
}
