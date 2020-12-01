import Express from 'express'

const app: Express.Application = Express()

app.get('/', (req: Express.Request, res: Express.Response) => {
    res.send('Teste')
})


app.listen(8080, () => console.log('Server started'))