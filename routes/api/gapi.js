const express = require("express");
const router = express.Router();
const axios = require("axios");
router.post('/distance', (req, res) => {
    const { ori, dist } = req.body;
    return axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${ori.lat},${ori.lng}&destinations=${dist.lat},${dist.lng}&key=AIzaSyAGCbX3hgsPnsWfUJwle8aco46J2G_P9I0`)
         .then(response => {
            res.json(response.data)
            
            })
        .catch(err => res.json(err.data))
})

// getDist(ori, dist) {
//     console.log(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${ori.lat},${ori.lng}&destinations=${dist.lat},${dist.lng}&key=AIzaSyAGCbX3hgsPnsWfUJwle8aco46J2G_P9I0`);
//     // axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${ori.lat},${ori.lng}&destinations=${dist.lat},${dist.lng}&key=AIzaSyAGCbX3hgsPnsWfUJwle8aco46J2G_P9I0`)
//     
//     return;
// }


module.exports = router;