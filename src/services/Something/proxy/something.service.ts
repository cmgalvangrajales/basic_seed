// import { env } from '@environment/env';
import { get } from '../../ServiceBase';
import { somethingInterface } from '../domain/something.types';

/**
 * Gets the something
 */
export function getSomething(): Promise<somethingInterface> {
  // TODO: use the env (not a string ofc)
  return get({
    servicePath: 'env.something',
  });
}
