var whatIs = function(input) {
    if(typeof(input) == 'object') {
        if(Array.isArray(input)) {
            return 'array';
        }
        return 'object';
    }
    return typeof(input);
};
