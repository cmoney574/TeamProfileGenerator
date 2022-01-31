const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    describe("Object", () => {
      it("should create Engineer obj", () => {
        const employee = new Engineer('Charles', 1, 'example@gmail.com', "github");

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
        expect(employee.git).toEqual(expect.any(String));
      });
    });
  
    describe("get", () => {
      it("should get the github", () => {
        const employee = new Engineer('Nick', 2, 'example@gmail.com', "github");

        expect(employee.getGit()).toEqual('github');
      });
  
      it("should get the role", () => {
        const employee = new Engineer('Morris', 3, 'example@gmail.com', "github");

        expect(employee.getRole()).toEqual("Engineer");
      });
    });
  });