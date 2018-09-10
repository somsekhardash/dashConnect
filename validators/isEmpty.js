const isEmpty = (val) => {
    return (val == null ||
        val == undefined ||
        val == '' ||
        (typeof val == 'object' && !Object.keys(val).length) ||
        (typeof val == 'string' && val.trim().length == 0))
}

module.exports = isEmpty;