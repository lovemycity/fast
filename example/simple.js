const {fast} = require('../src/fast');

fast()
    .use(async (ctx) => {
        ctx.setHeader("x-simon", "king")
    })
    .get('/', async (ctx) => {
        console.log(ctx.url());
        return {
            hello: 'world'
        }
    })
    .get('/api/:package/:name', async (ctx) => {
        console.log(ctx.url());
        return {
            hello: 'dolly'
        }
    })
    .get('/simon', async (ctx) => {
        console.log('simon called');
        ctx.setHeader('x-simon', 'called');
        return [123]
    })
    .get('/err', async (ctx) => {
        throw new Error('some error');
    })
    .listen(7000);