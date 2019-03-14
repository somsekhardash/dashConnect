const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ProfileTheme = new Schema({
    section1: {
        type: String,
        required: true
    },
    section1Color: {
        type: String,
        required: true
    }
});

let InstituteSchema = new Schema({
    instituteName: {
        type: String,
        required: true
    },
    instituteType: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    instituteStartYear: {
        type: Date,
        required: true
    },
    instituteEndYear: {
        type: Date,
        required: true
    },
    instituteLocation: {
        type: String,
        required: true
    }
});

let OfficeSchema = new Schema({
    officeName: {
        type: String,
        required: true
    },
    TotalYear: {
        type: String,
        required: true
    },
    officeStartYear: {
        type: Date,
        required: true
    },
    officeEndYear: {
        type: Date,
        required: true
    },
    officeLocation: {
        type: String,
        required: true
    }
});

let PortfolioSchema = new Schema({
    portName: {
        type: String,
        required: true
    },
    portPic: {
        type: String,
        required: false
    },
    portDeg: {
        type: String,
        required: true
    },
    portDescription: {
        type: String,
        required: true
    }
});

let UserDetails = new Schema({
    fullname: {
        type: String,
        required: true
    },
    workemail: {
        type: String,
        required: true
    },
    aboutme: {
        type: String,
        required: true
    },
    mobilenumber: {
        type: String,
        required: true
    }
})

let ProfileSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    userDetails: {
        type: UserDetails,
        required: false
    },
    preSchool: {
        type: InstituteSchema,
        required: false
    },
    postSchool: {
        type: InstituteSchema,
        required: false
    },
    college: {
        type: InstituteSchema,
        required: false
    },
    Office: {
        type: [OfficeSchema],
        required: false
    },
    theme: {
        type: [ProfileTheme],
        required: false
    }
});

module.exports = ProfileSchema = mongoose.model("ProfileSchema", ProfileSchema); 