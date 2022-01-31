const Manager = require('../lib/manager');

describe("Manager", () => {
    describe("Object", () => {
      it("should create Manager obj", () => {
        const employee = new Manager('Charles', 1, 'example@gmail.com', 7);

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
        expect(employee.office).toEqual(expect.any(Number));
      });
    });
  
    describe("get", () => {
      it("should get the office", () => {
        const employee = new Manager('Nick', 2, 'example@gmail.com', 7);

        expect(employee.getOffice()).toEqual(7);
      });
  
      it("should get the role", () => {
        const employee = new Manager('Morris', 3, 'example@gmail.com', 7);

        expect(employee.getRole()).toEqual("Manager");
      });
    });
  });