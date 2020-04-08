import {expect} from 'chai';
import {fast} from './fast';
import {Server} from './server';

describe('fast', () => {
    it('should return a Server', () => {
        const srv = fast();
        expect(srv).instanceOf(Server);
    });
});