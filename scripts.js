//Creating the page structure
const app = document.getElementById('main')
const pageTitle = document.createElement('h2')
pageTitle.textContent = `World Clock API`

//Create the container class to add the card inside
const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(pageTitle)
app.appendChild(container)

//Opening the connection and using GET request
var request = new XMLHttpRequest()
request.open('GET', 'http://worldclockapi.com/api/json/utc/now', true)

//Accessing JSON data from request variable
request.onload = function () {

    //JSON needs to be converted to a JavaScript object
    var data = JSON.parse(this.response)

    //Verify that the request happened correctly
    if (request.status >= 200 && request.status < 400) {
        const card = document.createElement('div')
        
        //Create the card class
        card.setAttribute('class', 'card')

        //Create the card title
        const h1 = document.createElement('h1')
        h1.textContent = data.timeZoneName

        //Create the card body
        const body = document.createElement('p')
        body.setAttribute('style', 'white-space: pre;')
        body.textContent  = `Current Time: ${data.currentDateTime} \r\n`
        body.textContent += `Day of Week: ${data.dayOfTheWeek} \r\n`
        body.textContent += `Ordinal Date: ${data.ordinalDate} \r\n`
        body.textContent += `Current File Time: ${data.currentFileTime} \r\n`
        body.textContent += `UTC Offset: ${data.utcOffset} \r\n`

        card.appendChild(h1)
        card.appendChild(body)
        container.appendChild(card)
    }
    else {
        const error = document.createElement('marquee')
        error.textContent = `Request error!!`
        app.appendChild(error)
    }
}

request.send()