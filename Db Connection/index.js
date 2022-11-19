const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose');
const bodyparser = require('body-parser')

app.use(express.json())

app.use(bodyparser.urlencoded({
    extended: true
}))
app.use(bodyparser.json())

// Product Schema
const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
        // minlength: 3,
        // maxlength: 10,
        // enum: ["iphone", "Samsung", "Oppo"]
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date
    }
})


// Product Model
const Product = mongoose.model("Products", productSchema)

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/testProductsDb')
        console.log('Db is connected')
    } catch (error) {
        console.log('Db is not connect');
        console.log(error.message)
    }
}

app.get('/', (req, res) => {
    res.send('Home')
})

app.post('/products', async (req, res) => {
    try {
        const newProduct = new Product({
            title: req.body.title,
            price: req.body.price,
            rating: req.body.rating,
            description: req.body.description
        })
        const productData = await newProduct.save()
        res.status(201).send(productData)
    } catch (error) {
        res.status(500).send(error.message)
    }
})


app.get('/products', async (req, res) => {
    try {
        const clientPrice = req.query.price;
        const clientrating = req.query.rating;
        let products;
        if (clientPrice && clientrating) {
            products = await Product.find({
                $and: [{
                        price: {
                            $gt: clientPrice
                        }
                    },
                    {
                        rating: {
                            $gt: clientrating
                        }
                    }
                ]
            })
        } else {
            products = await Product.find()
        }

        if (products) {
            res.status(200).send({
                success: true,
                data: products,
                message: 'This are available to match your price'
            })
        } else {
            res.status(500).send({
                success: false,
                message: 'Product not found'
            })
        }
    } catch (error) {

    }
})


app.get('/products/:id', async (req, res) => {
    try {
        const getSingel = await Product.find({
            _id: req.params.id
        })
        res.status(200).send(getSingel)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.put('/products/:id', async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate({
            _id: req.params.id
        }, {

            $set: {
                title: req.body.title,
                price: req.body.price,
                description: req.body.description
            }
        }, {
            new: true
        })

        if (updateProduct) {
            res.status(200).send({
                success: true,
                data: updateProduct,
                message: 'Product is being updated'
            })
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message,
            message: 'Product not found'
        })
    }
})


app.listen(PORT, async () => {
    console.log(`Server is running at ${PORT}`);
    await connectDb()
})