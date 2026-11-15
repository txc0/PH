const multiplyValue = (value, multiplier = 2) => {
    return value * multiplier;
};
const processInput = (input) => {
    if (typeof input === 'string') {
        return input.toLowerCase().trim();
    }
    else if (typeof input === 'number') {
        return input * 10;
    }
    else {
        return input ? "Active" : "Inactive";
    }
};
const formatCoordinate = (coord) => {
    const [latitude, longitude, locationName] = coord;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};
const concatenateArrays = (...arrays) => {
    const result = [];
    for (const currentArray of arrays) {
        for (const item of currentArray) {
            result.push(item);
        }
    }
    return result;
};
const getPopularCourses = (courses, minStudents) => {
    const popularCourses = [];
    for (const course of courses) {
        if (course.isPublished && course.students >= minStudents) {
            popularCourses.push(course);
        }
    }
    return popularCourses;
};
const pluckValues = (items, key) => {
    const values = [];
    for (const item of items) {
        values.push(item[key]);
    }
    return values;
};
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const validateAgeAsync = async (age) => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Error: Access Denied: Must be 18 or older"));
        }
    });
};
export {};
