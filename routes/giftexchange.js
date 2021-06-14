const express = require("express");
const GiftExchange = require("../models/giftexchange");
const router = express.Router()

router.get("/", async(req, res,  next) => {
    const gifts = await GiftExchange.pairs()
    res.status(200).json(gifts)

})

router.post("/:names", async(req, res, next) => {
   
    const names = req.body
    const nameList = await GiftExchange.pairs(names)
    res.status(200).json(nameList)
})
router.post("/:trad", async(req, res, next) => {
   
    const names = req.body
    const nameList = await GiftExchange.traditional(names)
    res.status(200).json(nameList)
})
module.exports = router
