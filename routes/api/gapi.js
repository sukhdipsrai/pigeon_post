const express = require("express");
const router = express.Router();
const axios = require("axios");
const gDistance = require("google-distance-matrix");
const GOOGLE_API_KEY = require("../../config/keys").googlekey;

router.post("/distance", (req, res) => {
  const { ori, dist } = req.body;
  // console.log(req.body);
  return axios
    .get(
      `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${ori.lat},${ori.lng}&destinations=${dist.lat},${dist.lng}&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
      //  console.log(res);
      res.json(response.data);
    })
    .catch((err) => res.json(err.data));
});

// router.post('/distance', (req, res) => {
//     const { ori, dist } = req.body;
//     console.log(ori,dist);
//     gDistance.key(GOOGLE_API_KEY);
//     gDistance.matrix(ori,dist, "DRIVING", (err, distances)=>{
//         if (distances.status == 'OK')  res.json(distances.rows)
//     })
// })

// getDist(ori, dist) {
//     console.log(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${ori.lat},${ori.lng}&destinations=${dist.lat},${dist.lng}&key=${GOOGLE_API_KEY}`);
//     // axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${ori.lat},${ori.lng}&destinations=${dist.lat},${dist.lng}&key=${GOOGLE_API_KEY}`)
//
//     return;
// }

module.exports = router;
