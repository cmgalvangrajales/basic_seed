import { somethingInterface } from './domain/something.types';
import * as mockResponse from './mocks/something.json';
import * as SomethingService from './proxy/something.service';

export type { somethingInterface };
export { mockResponse };
export default SomethingService;
