const express = require('express')
const graphqlHTTP = require("express-graphql");
const schema = require('./schema/scehema')
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
app.use(cors())
mongoose.connect('mongodb+srv://jawwad22:123@graphqldb-dfe2g.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('Connected to server')
})


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true

}))

app.listen(4000, () => {
    console.log('Now listening for request 4000')
})