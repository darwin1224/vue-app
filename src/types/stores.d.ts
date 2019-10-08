import Vue from 'vue';
import { PostModel, AuthModel, ObjectId } from './models';

/**
 * Root state in store
 */
export interface RootState {}

/**
 * Get by id action types
 */
export interface GetById {
  id: ObjectId;
  vm: Vue;
}

/**
 * Update data by id types
 */
export interface UpdateById {
  id: ObjectId;
  params: PostModel;
}

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

  /**
   * List of post by id
   *
   * @type {PostModel}
   */
  listById: PostModel;
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
