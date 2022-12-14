const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors()) // te deja usar request de localhost client a localhost server
app.use(express.static('public'));

const rappers = {
    '21 savage':{
        age: 29,
        birthName: 'Something',
        birthLocation: 'London England'
    },
    'chance the rapper':{
        age: 30,
        birthName: 'Chancelors',
        birthLocation: 'Illinois'
    },
    'dylan':{
        age: 'Dylan',
        birthName: 'Dylan',
        birthLocation: 'Dylan'
    },
}


app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response)=>{

    const rappersName = request.params.rapperName.toLowerCase();
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on ${PORT}! You better go catch it!`)
})