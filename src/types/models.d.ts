/**
 * Post model
 */
export interface PostModel {
  /**
   * Title field
   *
   * @type {string}
   */
  title: string;

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
