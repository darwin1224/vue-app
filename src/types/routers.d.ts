import Vue from 'vue';
import { RawLocation } from 'vue-router';

/**
 * Next function for router hooks
 */
export type NextRouter = (to?: RawLocation | false | ((vm: Vue) => any) | void) => void;
