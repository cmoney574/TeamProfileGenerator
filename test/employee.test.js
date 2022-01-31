const Employee = require('../lib/employee');

describe("Employee", () => {
    describe("Object", () => {
      it("should create employee obj", () => {
        const employee = new Employee('Charles', 1, 'example@gmail.com');

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
      });
    });
  
    describe("get", () => {
      it("should get the employee name", () => {
        const employee = new Employee('Nick', 2, 'example@gmail.com');

        expect(employee.getName()).toEqual('Nick');
      });
  
      it("should get employee id", () => {
        const employee = new Employee('Morris', 3, 'example@gmail.com');

        expect(employee.getId()).toEqual(3);
      });
      it("should get employee email", () => {
        const employee = new Employee('Luis', 4, 'example@gmail.com');

        expect(employee.getEmail()).toEqual('example@gmail.com');
      });
    });
  });