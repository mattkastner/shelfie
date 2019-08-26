const getProducts = (req, res) => {
    const db = req.app.get('db')
    db.read_products().then((products) => {
        res.status(200).send(products)
    }).catch(error => {
        res.status(500).send('Error')
        console.log(error)
    })
}

const getProduct = (req, res) => {
    const {id} = req.params
    const db = req.app.get('db')
    db.read_product([id]).then((product) => {
        console.dir(product)
        res.status(200).send(product)
    }).catch(error => {
        res.status(500).send('Error')
        console.log(error)
    })
}

const getSearchedProducts = (req, res) => {
    const {query} = req.params
    const db = req.app.get('db')
    db.search_products([query]).then((products) => {
        res.status(200).send(products)
    }).catch(error => {
        res.status(500).send('Error')
        console.log(error)
    })
}

const createProduct = (req, res) => {
    const {name, price, image_url} = req.body
    const db = req.app.get('db')
    db.create_product([name, price, image_url]).then((products) => {
        // console.log(products)
        res.status(200).send(products)
    }).catch(error => {
        res.status(500).send('Error')
        console.log(error)
    })
}

const deleteProduct = (req, res) => {
    const {id} = req.params
    const db = req.app.get('db')
    db.delete_product([id]).then((products)=>{
        res.status(200).send(products)
    }).catch(error => {
        res.status(500).send('Error')
        console.log(error)
    })
}

const updateProduct = (req, res) => {
    // console.log('updating')
    const {id} = req.params
    const {name, price, image_url} = req.body
    // console.log(`${name} ${price} ${image_url} ${id}`)
    const db = req.app.get('db')
    db.update_product([id, name, price, image_url]).then((products)=>{
        // console.log(products)
        res.status(200).send(products)
    }).catch(error => {
        res.status(500).send('Error')
        console.log(error)
    })
}

module.exports = {
    getProducts,
    getProduct,
    getSearchedProducts,
    createProduct,
    deleteProduct,
    updateProduct

}