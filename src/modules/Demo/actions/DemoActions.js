// @flow

import { demoActions } from '../constants/DemoConstants';
import { Entry } from '../types/types';

/**
 * Create a new list entry
 *
 * @param entry
 * @returns {{type: string, entry: Entry}}
 */
export const createEntry = (entry: Entry): {} => ({
  type: demoActions.CREATE_ENTRY,
  entry,
});

/**
 * Delete an existing entru from list
 *
 * @param id
 * @returns {{type: string, id: number}}
 */
export const deleteEntry = (id: number): {} => ({
  type: demoActions.DELETE_ENTRY,
  id,
});

