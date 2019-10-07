/**
 * Object Id type
 */
export type ObjectId = string | number | null | undefined;

/**
 * Post model
 */
export interface PostModel {
  /**
   * Object ID field
   *
   * @type {ObjectId}
   */
  _id?: ObjectId;

  /**
   * Title field
   *
   * @type {string}
   */
  title?: string;

  /**
   * Body field
   *
   * @type {string}
   */
  body?: string;
}

/**
 * Auth model
 */
export interface AuthModel {
  /**
   * Name of the user
   *
   * @type {string}
   */
  name?: string;

  /**
   * Username of the user
   *
   * @type {string}
   */
  username?: string;

  /**
   * Password of the user
   *
   * @type {string}
   */
  password?: string;
}

/**
 * Token model
 */
export interface Token {
  /**
   * API token
   *
   * @type {string}
   */
  token?: string;
}
