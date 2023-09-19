const quoteDisplay = document.querySelector('#quote')

fetch('http://localhost:3000/')
    .then(response => {return response.json()})
    .then(data => {
        const quoteItem = `<div><h1>` + `"` + data.text + `"` +  `</h1><h3>` + data.author + `</h3></div>`
        quoteDisplay.insertAdjacentHTML('beforeend', quoteItem)
    })
    .catch(err => {
        console.log(err)
    })