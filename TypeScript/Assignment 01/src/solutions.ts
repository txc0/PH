const multiplyValue = (value: number, multiplier: number = 2): number => {
  return value * multiplier;
};

type inputType = string | number | boolean;
type outputType = string | number;
const processInput = (input: inputType): outputType => {
    if (typeof input === 'string') {
        return input.toLowerCase().trim();
    }
    else if (typeof input === 'number') {
        return input * 10;
    }
    else{
        return input ? "Active" : "Inactive";
    }
};

type CoordinateTuple = readonly [number, number, string];

const formatCoordinate = (coord: CoordinateTuple): string => {
  const [latitude, longitude, locationName] = coord;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const result: T[] = [];
  for (const currentArray of arrays) {
    for (const item of currentArray) {
      result.push(item);
    }
  }
  return result;
};
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
  const popularCourses: Course[] = [];
  for (const course of courses) {
    if (course.isPublished && course.students >= minStudents) {
      popularCourses.push(course);
    }
  }
  return popularCourses;
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  const values: T[K][] = [];
  for (const item of items) {
    values.push(item[key]);
  }
  return values;
};

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  public getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  public getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}
const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Error: Access Denied: Must be 18 or older"));
    }
  });
};
