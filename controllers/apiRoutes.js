var db = require("../db/models");
const axios = require("axios");

//-----******-----Populate Attempts DB with API-----*****----------******-----Populate Attempts DB with API-----*****-----
//pushes new attempt record if play_type is pass
function ifPass (dataObject) {
    const tempOb = new Object();
    if (dataObject.play_type === "pass") {
        tempOb.qbName = dataObject.statistics[0].player.name;
        tempOb.pocketTime = dataObject.statistics[0].pocket_time;
        tempOb.competion = dataObject.statistics[0].complete;
        tempOb.hurry = dataObject.statistics[0].hurry;
        // console.log("QB: " + dataObject.statistics[0].player.name);
        // console.log("PT: " + dataObject.statistics[0].pocket_time);
        // console.log("Com: " + dataObject.statistics[0].complete);
        // console.log("Hurry: " + dataObject.statistics[0].hurry);
        // console.log(dataObject.statistics.length)
        for (var i = 0; i < dataObject.statistics.length; i++) {
            // console.log(dataObject.statistics[i].stat_type)
            if (dataObject.statistics[i].stat_type === "defense") {
                tempOb.defenderName = dataObject.statistics[i].team.alias;
                // console.log(dataObject.statistics[i].team.alias);
                break;
            }
        }
        console.log(tempOb);

        db.Attempt.collection.insertOne(tempOb)
            .then(data => {
                console.log(tempOb);
            })
            .catch(err => {
                console.error(err);
            });
    }
};

module.exports = function(app) {
    
    app.get("/api/:id", function(req, res) {
        axios.get("https://api.sportradar.us/nfl/official/trial/v5/en/games/" +
        req.params.id +
        "/pbp.json?api_key=26sqqph2dqghq7us9cea8tmz")
        .then( (response) => {
            // checks if play is a passing play
            for (var i = 0; i < response.data.periods.length; i++) {
                response.data.periods[i].pbp.map(x => x.hasOwnProperty('events') ? 
                    x.events.map(y => y.hasOwnProperty('play_type') ? ifPass(y) : null)
                : null)}
        })
        .then(function(dbAttempt) {
            res.json(dbAttempt);
        })
        .catch(function(err) {
            // If an error occurs, send it back to the client
            res.json(err);
        });
    })


//-----******-----Calulate Defense Allowed Pocket Time-----*****----------******-----Calulate Defense Allowed Pocket Time-----*****-----


    
    app.get("/calculate/defense", function(req, res) {
        let tempDefArr = [];
        let arrAvg;
        //get all data from Defense
        db.Defense.find({}).then((res) => {
            // console.log(res);

            //get all data from Attempts
            db.Attempt.find({}).then((attemptRes) => {
                // console.log('Attempts', attemtRes);

                //iterate through all Defense records
                for (var i = 0; i < res.length; i++) {
                    
                    //iterate through all Attmpt
                    for (var j = 0; j < attemptRes.length; j++) {
                        if (res[i].name === attemptRes[j].defenderName  && attemptRes[j].hurry === true) {
                            tempDefArr.push(attemptRes[j].pocketTime);
                        }
                    }
                    console.log(res[i].name, tempDefArr);
                    if (tempDefArr.length === 0) {
                        arrAvg = 6;}
                    else {
                        arrAvg  = tempDefArr.reduce((a,b) => a + b, 0) / tempDefArr.length;
                    }
                    console.log(arrAvg);

                    //rewrite given pocket time
                    db.Defense.updateOne({ 
                        "name": res[i].name
                    },
                    {
                        $set: { "givenPocketTime": arrAvg }
                    })
                    .then(updateRes => console.log(updateRes))
                    .catch(function(err) {
                        // If an error occurs, send it back to the client
                        console.log(err);
                    });

                    //clear array
                    tempDefArr = [];
                }
                
            })
        })
        .then(function (data) {
            res.status(200).end();
        }).catch(function(err) {
            // If an error occurs, send it back to the client
            res.json(err);
        });
    })


//-----******-----Calulate QB Pocket Time & Overall Accuracy-----*****----------******-----Calulate QB Pocket Time & Overall Accuracy-----*****-----

    
    app.get("/calculate/qbtime", function(req, res) {

        //get all data from Quarterback
        db.Quarterback.find({}).then((res) => {
            let tempQBArr = [];
            let tempQBAccArr = [];
            let arrAvg;
            let accArrAvg;

            //get all data from Attempts
            db.Attempt.find({}).then((attemptRes) => {

                //iterate through all Quarterback records
                for (var i = 0; i < res.length; i++) {
                    
                    //iterate through all Attmpt
                    for (var j = 0; j < attemptRes.length; j++) {
                        if (res[i].name === attemptRes[j].qbName && attemptRes[j].pocketTime !== null) {

                            tempQBArr.push(attemptRes[j].pocketTime);
                            tempQBAccArr.push(attemptRes[j].competion);
                        }
                    }
                    console.log(res[i].name, tempQBAccArr);

                    //check if tempQBArr has data.  If not, auto enter 6 seconds.  otherwise average tempQBArr numbers
                    if (tempQBArr.length === 0) {
                        arrAvg = 6;
                    }
                    else {
                        arrAvg  = tempQBArr.reduce((a,b) => a + b, 0) / tempQBArr.length;
                    }
                    console.log(arrAvg);

                    //check if tempQBAccArr has data.  If not, auto enter .5 percent.  otherwise divide true items in accArrAvg by accArrAvg length
                    if (tempQBAccArr.length === 0) {
                        accArrAvg = .5;
                    }
                    else {
                        let trueCount = 0;
                        for (var k = 0; k < tempQBAccArr.length; k++) {
                            if(tempQBAccArr[k] === true)
                            trueCount++;
                        }
                        accArrAvg = trueCount/tempQBAccArr.length
                    }
                    // console.log(accArrAvg);
                    
                    //rewrite given pocket time
                    db.Quarterback.updateOne({ 
                        "name": res[i].name
                    },
                    {
                        $set: { "avgPocketTime": arrAvg },
                        $set: { "completionPercentage": accArrAvg}
                    })
                    .then(updateRes => console.log(updateRes))
                    .catch(function(err) {
                        // If an error occurs, send it back to the client
                        console.log(err);
                    });

                    //clear array
                    tempQBArr = [];
                }
                
            })
        })
        .then(function (data) {
            res.status(200).end();
        }).catch(function(err) {
            // If an error occurs, send it back to the client
            res.json(err);
        });
    });


//-----******-----Calulate QB Defense Specific Accuracy-----*****----------******-----Calulate QB Defense Specific Accuracy-----*****-----

    
    app.get("/calculate/qbdefensetime", function(req, res) {

        //get all data from Quarterback
        db.Quarterback.find({}).then((res) => {
            let tempQBDefArr = [];
            let accArrDefRatio = 0;
            let setName;

            //get all data from Defense
            db.Defense.find({}).then((defenseRes) => {

                //get all data from Attempts
                db.Attempt.find({}).then((attemptRes) => {

                    //iterate through all Quarterback Records
                    for (var i = 0; i < res.length; i++) {

                        //iterate through all Defense Records
                        for (var j = 0; j < defenseRes.length; j++) {
                            
                            //iterate through all Attempt Records
                            for (var k = 0; k < attemptRes.length; k++) {
                                if (attemptRes[k].qbName === res[i].name &&
                                    // attemptRes[k].defenderName === defenseRes[j].name &&
                                    attemptRes[k].pocketTime <= defenseRes[j].givenPocketTime &&
                                    attemptRes[j].completion !== null) {
                                    
                                    tempQBDefArr.push(attemptRes[k].competion)
                                }
                            }
                            
                            //check if tempQBDefArr has data.  If not, auto enter .5 percent.  otherwise divide true items in accArrAvg by accArrAvg length
                            if (tempQBDefArr.length === 0) {
                                accArrDefRatio = .5;
                            }
                            else {
                                let trueCount2 = 0;
                                for (var k = 0; k < tempQBDefArr.length; k++) {
                                    if(tempQBDefArr[k] === true)
                                    trueCount2++;
                                }
                                accArrDefRatio = trueCount2/tempQBDefArr.length
                            }

                            setName = "vsDefenseCompletionPercentage." + defenseRes[j].name;

                            var setParam = {};
                            setParam[setName] = accArrDefRatio;
                            
                          
                            //rewrite given pocket time
                            db.Quarterback.updateOne({ 
                                "name": res[i].name
                            },
                            {
                                $set: setParam
                            })
                            .then(updateRes => console.log(updateRes))
                            .catch(function(err) {
                                // If an error occurs, send it back to the client
                                console.log(err);
                            });

                            // console.log(setParam);
                            // console.log(res[i].name + " " + setName + " " + accArrDefRatio);
                            tempQBDefArr = [];
                        }
                    }
                })
                
            })
        })
        .then(function (data) {
            res.status(200).end();
        }).catch(function(err) {
            // If an error occurs, send it back to the client
            res.json(err);
        });
    });
}