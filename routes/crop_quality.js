var express = require('express');
var router = express.Router();
// require("dotenv").config();
var getCab = require('../model/crop_quality');
// var postCab = require('../model/postcab');
// var unirest = require('unirest');
// var User = require('../model/user');

router.get('/', function (req, res, next) {
    console.log(req.user);
    res.json({
        status: "working cab page"
    });
});

router.post('/crop_quality', function (req, res, next) {
    if (!req.user) {
        res.status = 401;
        res, json({
            status: false,
            redirect: 'login',
            message: "Authentication Failed"
        });
    }
    else {
        var arhar = new arhar({
            user_id: req.user.user_id,
            tradable_parameters: req.body.tradable_parameters,
            range1: req.body.range1,
            range2: req.body.range2,
            range3: req.body.range3,
            // car: req.body.car,
            // number_of_person: req.body.number_of_person
        });
        crop_quality.save(function (err) {
            if (err) {
                res.status = 401;
                res.json({
                    success: false,
                    message: "Unable to save data"
                });
            }
            else {
                res.status = 200;
                res.json({
                    success: true,
                    message: "arhar data Successfully stored"
                });
            }
        });
    }
});

// router.post('/postcab', function (req, res, next) {
//     if (!req.user) {
//         res.status = 401;
//         res, json({
//             status: false,
//             redirect: 'login',
//             message: "Authentication Failed"
//         });
//     }
//     else {
//         var postcab = new postCab({
//             username: req.user.username,
//             date: req.body.date,
//             time: req.body.time,
//             current_location: req.body.current_location,
//             destination: req.body.destination,
//             car: req.body.car,
//             car_seats: req.body.car_seats
//         });
//         postcab.save(function (err) {
//             if (err) {
//                 res.status = 401;
//                 res.json({
//                     success: false,
//                     message: "Unable to save data"
//                 });
//             }
//             else {
//                 res.status = 200;
//                 res.json({
//                     success: true,
//                     message: "Car Posted Successfully"
//                 });
//             }
//         });
//     }
// });

router.get('/cabposted', function (req, res, next) {
    if (!req.user) {
        res.status = 401;
        res.json({
            status: false,
            redirect: 'login',
            message: "Authentication Failed"
        });
    }
    else {
        postCab.find({ username: req.user.username }, function (err, data) {
            if (err) {
                res.status = 401;
                res.json({
                    status: false,
                    message: "Error"
                });
            } else {
                if (data == null) {
                    res.status = 200;
                    res.json({
                        status: true,
                        message: "Not posted any cab."
                    });
                } else {
                    res.status = 200;
                    res.json({
                        status: true,
                        data: data
                    });
                }
            }
        });
    }
});

router.get('/cabrequested', function (req, res, next) {
    if (!req.user) {
        res.status = 401;
        res.json({
            status: false,
            redirect: 'login',
            message: "Authentication Failed"
        });
    }
    else {
        getCab.findOne({ username: req.user.username }, function (err, data) {
            if (err) {
                res.status = 401;
                res.json({
                    status: false,
                    message: "Error"
                });
            } else {
                if (data == null) {
                    res.status = 200;
                    res.json({
                        status: true,
                        message: "Not posted any cab."
                    });
                } else {
                    res.status = 200;
                    res.json({
                        status: true,
                        data: data
                    });
                }
            }
        });
    }
});

router.get('/postcabinfo', function (req, res, next) {
    if (!req.user) {
        res.status = 401;
        res.json({
            status: false,
            redirect: 'login',
            message: "Authentication Failed"
        });
    }
    else {
        postCab.findOne({ username: req.user.username }, function (err, data) {
            if (err) {
                res.status = 401;
                res.json({
                    status: false,
                    message: "Error"
                });
            } else {
                if (data == null) {
                    res.status = 200;
                    res.json({
                        status: true,
                        message: "Not posted any cab."
                    });
                } else {
                    // console.log(data.number_of_person);
                    getCab.find({
                        date: data.date,
                        number_of_person: { $gte: data.car_seats },
                        time: data.time,
                    }, function (err, info) {
                        if (err) {
                            res.status = 401;
                            res.json({
                                status: false,
                                message: "Error"
                            });
                        } else {
                            if (info == null) {
                                res.status = 200;
                                res.json({
                                    status: true,
                                    message: "No cabs."
                                });
                            } else {
                                getCheckLocation(info, data, function (ob) {
                                    // console.log("printing data");
                                    if(ob=="noInternet"){
                                        res.status = 400;
                                        res.json({
                                            status: false,
                                            data: ob
                                        });
                                    }else{
                                        res.status = 200;
                                        res.json({
                                            status: true,
                                            data: ob
                                        });
                                    }
                                });
                            }
                        }
                    })
                }
            }
        });
    }
});

router.get('/getcabinfo', function (req, res, next) {
    if (!req.user) {
        res.status = 401;
        res.json({
            status: false,
            redirect: 'login',
            message: "Authentication Failed"
        });
    }
    else {
        getCab.findOne({ username: req.user.username }, function (err, data) {
            if (err) {
                res.status = 401;
                res.json({
                    status: false,
                    message: "Error"
                });
            } else {
                if (data == null) {
                    res.status = 200;
                    res.json({
                        status: true,
                        message: "Not posted any cab."
                    });
                } else {
                    // console.log(data.number_of_person);
                    postCab.find({
                        date: data.date,
                        car_seats: { $gte: data.number_of_person },
                        time: data.time,
                    }, function (err, info) {
                        if (err) {
                            res.status = 401;
                            res.json({
                                status: false,
                                message: "Error"
                            });
                        } else {
                            if (info == null) {
                                res.status = 200;
                                res.json({
                                    status: true,
                                    message: "No cabs."
                                });
                            } else {
                                getCheckLocation(info, data, function (ob) {
                                    // console.log("printing data");
                                    if(ob=="noInternet"){
                                        res.status = 400;
                                        res.json({
                                            status: false,
                                            data: ob
                                        });
                                    }else{
                                        res.status = 200;
                                        res.json({
                                            status: true,
                                            data: ob
                                        });
                                    }
                                });
                            }
                        }
                    })
                }
            }
        });
    }
});


getCheckLocation = function (info, data, callback) {
    var place = [];
    for (var i = 0; i < info.length; i++) {
        // console.log("still doing loop");
        d = info[i];
        var current_loc_url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" + data.current_location + "&destinations=" + info[i].current_location + "&key=" + process.env.distance_matrix;
        var destination_url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" + data.destination + "&destinations=" + info[i].destination + "&key=" + process.env.distance_matrix;
        unirest.get(current_loc_url)
            .end(checkCurrent);
        // console.log("cdscsdcsd");
    }


    function checkCurrent(cloc) {
        if(cloc.body!=undefined){
            if (cloc.body.rows[0].elements[0].distance.value < 500) {
                unirest.get(destination_url)
                    .end(checkDestination);
                // console.log("checkCurrent");
            }
        }else{
            console.log(":xdwxw");
            callback("noInternet");
        }
    }

    function checkDestination(dest) {
        if (dest.body.rows[0].elements[0].distance.value < 2000) {
            place.push(d);
        }
        // console.log("checkDestination", i);
        if (i == info.length) {
            // console.log("out of loop", i);
            callback(place);
        }
        //  callback(place);
    }
}

module.exports = router;