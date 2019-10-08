import { PostModel, AuthModel } from './models';

/**
 * Root state in store
 */
export interface RootState {}

/**
 * Post state
 */
export interface PostState {
  /**
   * List of posts
   *
   * @type {PostModel[]}
   */
  list: PostModel[];
}

/**
 * Auth state
 */
export interface AuthState {
  /**
   * Auth params
   *
   * @type {AuthModel}
   */
  auth?: AuthModel;

  /**
   * API token
   *
   * @type {string}
   */
  token?: string;
}
