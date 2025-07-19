const findTheOldest = function(people) {
    return people.reduce((oldObj, obj) => {
        let objAge;
        let prevAge;
        if (!obj.yearOfDeath) {
            objAge = new Date().getFullYear() - obj.yearOfBirth;
        } else {
            objAge = obj.yearOfDeath - obj.yearOfBirth;
        }
        if (!oldObj.yearOfDeath) {
            prevAge = new Date().getFullYear() - oldObj.yearOfBirth;
        } else {
            prevAge = oldObj.yearOfDeath - oldObj.yearOfBirth;
        }

        if (objAge > prevAge) {
            return obj;
        } else {
            return oldObj;
        }
    })
};

// Do not edit below this line
module.exports = findTheOldest;
