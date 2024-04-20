const renderData = (request, response) => {
    response.status(200).render('index')
}

const getFormData = (request, response) => {
    const addName = request.body.name
    const addRegno = request.body.regid
    console.log(addName + " " + addRegno)
    response.status(200).send("Data received successfully!")
}

module.exports = { renderData, getFormData }