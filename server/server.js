// require("dotenv").config()
import {} from 'dotenv/config'
import express from "express"
import query from "./db/index.js"

const app = express()

app.use(express.json())

// Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
   const results = await query("select * from restaurants")
//    console.log(results)
    res.json({
        status: "success",
        results: results.rowCount,
        data: {
            restaurants: results.rows
    }
    })
})

// Get  one restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
    try {
        console.log("HOHOHOHOHOHO",req)
        const results = await query('select * from restaurants where id = $1', [req.params.id])
        res.json({
            status: "success",
            data: {
                restaurants: results.rows
            }
        })
    } catch (error){
        console.log(error)
    }
})

// Create a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await query('insert into restaurants (name, location, price_range) values ($1, $2, $3) returning *', 
            [req.body.name, req.body.location, req.body.price_range])
        console.log(req.params)
        res.status(201).json({
            status: "success",
            data: {
                restaurant: results.rows[0]
            }  
        })

    } catch (error) {
        console.log(error)
    }
})

// update restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await query('UPDATE restaurants SET name = $1, location = $2, price_range=$3 WHERE id=$4 returning *', 
        [req.body.name, req.body.location, req.body.price_range, req.params.id])
        console.log(req.params.id)
        console.log(req.body)
        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows
            }  
        })

    } catch(error){
        console.log(error)
    }
})

// delete restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await query('DELETE FROM restaurants WHERE id=$1 returning *', 
        [ req.params.id])
        console.log(req.params)
        console.log(res)
        res.status(204).json({
            status: "success",
            data: {
                restaurant: results.rows
            }  
        })
    } catch(error){
        // res.status(404).send({message: "Restaurant not found"})
        console.log(error)
    }
})
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})