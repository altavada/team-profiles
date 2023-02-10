const Manager = require('../lib/manager');

describe('Manager', () => {
    const testManager = new Manager('Jack', 480, 'jack@email.com', 23);
    describe('getOffice', () => {
        it("should return the manager's office number", () => {
            const testOffice = testManager.getOffice();
            expect(testOffice).toBe(23);
        })
    })
    describe('getRole', () => {
        it('should return "Manager" as the employee role', () => {
            const testRole = testManager.getRole();
            expect(testRole).toBe('Manager');
        })
    })
    describe('getName', () => {
        it('should return the given name', () => {
            const testName = testManager.getName();
            expect(testName).toBe('Jack');
        })
    })
    describe('getId', () => {
        it('should return the given ID number', () => {
            const testId = testManager.getId();
            expect(testId).toBe(480);
        })
    })
    describe('getEmail', () => {
        it('should return the given email address', () => {
            const testEmail = testManager.getEmail();
            expect(testEmail).toBe('jack@email.com');
        })
    })
})