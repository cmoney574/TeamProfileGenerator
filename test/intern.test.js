const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("Object", () => {
      it("should create Intern obj", () => {
        const employee = new Intern('Charles', 1, 'example@gmail.com', "GT");

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
        expect(employee.school).toEqual(expect.any(String));
      });
    });
  
    describe("get", () => {
      it("should get the github", () => {
        const employee = new Intern('Nick', 2, 'example@gmail.com', "GT");

        expect(employee.getSchool()).toEqual('GT');
      });
  
      it("should get the role", () => {
        const employee = new Intern('Morris', 3, 'example@gmail.com', "GT");

        expect(employee.getRole()).toEqual("Intern");
      });
    });
  });