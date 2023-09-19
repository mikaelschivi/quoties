const quoteDisplay = document.querySelector('#quote')

fetch('http://localhost:3000/')
    .then(response => {return response.json()})
    .then(data => {
        const quoteItem = `<div><h3>` + data.text + `</h3><p>` + data.author + `</p></div>`
        quoteDisplay.insertAdjacentHTML('beforeend', quoteItem)
    })
    .catch(err => {
        console.log(err)
    })