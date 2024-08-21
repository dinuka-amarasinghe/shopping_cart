// sk_test_51PqERbP5yaa259l55uIBP0I4qsndE0KbyWMaxFJ6gXUEHBUsyJSM4Y732qrahUX4z36OBzn91USOimyEXmiaWm0n00wZ5re3dH
// Coffee: price_1PqEXLP5yaa259l5MABeOCRy
// Sunglasses: price_1PqEYRP5yaa259l58BGW6j2h
// Camera: price_1PqEZdP5yaa259l5ITwRVTCS

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51PqERbP5yaa259l55uIBP0I4qsndE0KbyWMaxFJ6gXUEHBUsyJSM4Y732qrahUX4z36OBzn91USOimyEXmiaWm0n00wZ5re3dH');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post('/checkout', async (req, res) => {
    console.log("Request Body: ", req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
        lineItems.push({
            price: item.id,
            quantity: item.quantity
        });
    })

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        payment_method_types: ['card'],
        success_url: `http://localhost:5173/success`,
        cancel_url: `http://localhost:5173/cancel`
    });

    res.send(JSON.stringify({
        url: session.url
    }));

    app.list(4000, () => console.log('Listening on port 4000'));
});