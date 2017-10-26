var mongoose = require('mongoose');

var arhar = mongoose.Schema({
    user_id :
        {
            type: String,
            unique: true
        },
    tradable_parameters:
        {
            type: String,
            require: true
        },
    range1:
        {
            type: String,
            require: true
        },
    range2:
        {
            type: String,
            require: true
        },
    range3:
        {
            type: String,
            require: true
        },

});


var bajra = mongoose.Schema({
    user_id :
        {
            type: String,
            unique: true
        },
    tradable_parameters:
        {
            type: String,
            require: true
        },
    range1:
        {
            type: String,
            require: true
        },
    range2:
        {
            type: String,
            require: true
        },
    range3:
        {
            type: String,
            require: true
        },

});

var barley = mongoose.Schema({
    user_id :
        {
            type: String,
            unique: true
        },
    tradable_parameters:
        {
            type: String,
            require: true
        },
    range1:
        {
            type: String,
            require: true
        },
    range2:
        {
            type: String,
            require: true
        },
    range3:
        {
            type: String,
            require: true
        },

});

var chana = mongoose.Schema({
    user_id :
        {
            type: String,
            unique: true
        },
    tradable_parameters:
        {
            type: String,
            require: true
        },
    range1:
        {
            type: String,
            require: true
        },
    range2:
        {
            type: String,
            require: true
        },
    range3:
        {
            type: String,
            require: true
        },

});

var jowar = mongoose.Schema({
    user_id :
        {
            type: String,
            unique: true
        },
    tradable_parameters:
        {
            type: String,
            require: true
        },
    range1:
        {
            type: String,
            require: true
        },
    range2:
        {
            type: String,
            require: true
        },
    range3:
        {
            type: String,
            require: true
        },

});


var maize = mongoose.Schema({
    user_id :
        {
            type: String,
            unique: true
        },
    tradable_parameters:
        {
            type: String,
            require: true
        },
    range1:
        {
            type: String,
            require: true
        },
    range2:
        {
            type: String,
            require: true
        },
    range3:
        {
            type: String,
            require: true
        },

});


var masoor = mongoose.Schema({
    user_id :
        {
            type: String,
            unique: true
        },
    tradable_parameters:
        {
            type: String,
            require: true
        },
    range1:
        {
            type: String,
            require: true
        },
    range2:
        {
            type: String,
            require: true
        },
    range3:
        {
            type: String,
            require: true
        },

});



var moong = mongoose.Schema({
    user_id :
        {
            type: String,
            unique: true
        },
    tradable_parameters:
        {
            type: String,
            require: true
        },
    range1:
        {
            type: String,
            require: true
        },
    range2:
        {
            type: String,
            require: true
        },
    range3:
        {
            type: String,
            require: true
        },

});


var urd = mongoose.Schema({
    user_id :
        {
            type: String,
            unique: true
        },
    tradable_parameters:
        {
            type: String,
            require: true
        },
    range1:
        {
            type: String,
            require: true
        },
    range2:
        {
            type: String,
            require: true
        },
    range3:
        {
            type: String,
            require: true
        },

});


var wheat = mongoose.Schema({
    user_id :
        {
            type: String,
            unique: true
        },
    tradable_parameters:
        {
            type: String,
            require: true
        },
    range1:
        {
            type: String,
            require: true
        },
    range2:
        {
            type: String,
            require: true
        },
    range3:
        {
            type: String,
            require: true
        },

});


module.exports = mongoose.model(arhar);
module.exports = mongoose.model(bajra);
module.exports = mongoose.model(barley);
module.exports = mongoose.model(chana);
module.exports = mongoose.model(jowar);
module.exports = mongoose.model(maize);
module.exports = mongoose.model(masoor);
module.exports = mongoose.model(moong);
module.exports = mongoose.model(urd);
module.exports = mongoose.model(wheat);


