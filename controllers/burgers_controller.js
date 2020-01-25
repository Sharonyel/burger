var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObj = {
            burgers: data
        };
        res.render("index", hbsObj)
    });
});

router.post("/api/burgers", function(req, res){
    burger.insertOne(
      ["burger_name"], [req.body.burger_name ], function(result){
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log("up condition", condition);
        burger.updateOne({
            devoured: req.body.devoured
        }, condition, function(result){
            if(result.changedRows === 0){
                return res.status(404).end();
            } else{
                res.status(200).end();
            }
        })
});
router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("del condition", condition);

    burger.deleteOne(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;