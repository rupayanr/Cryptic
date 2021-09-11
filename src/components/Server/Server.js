const { graphqlHTTP } = require('express-graphql')
const express = require('express')
const schema = require('./Schema')
const app = express();
const port = 9000;


app.use('/graphql', graphqlHTTP({

    schema,
    graphiql: true

}))

// app.get('/graphql', (req, res) => {
//     res.send({ graphql: 'Buffalow' })
// })


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})