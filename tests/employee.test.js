const Employee = require('../lib/employee');

describe('Employee', () => {
    const testMember = new Employee('Sam', 123, 'sam@email.com');
    describe('getName', () => {
        it('should return the given name', () => {
            const testName = testMember.getName();
            expect(testName).toBe('Sam');
        })
    })
    describe('getId', () => {
        it('should return the given ID number', () => {
            const testId = testMember.getId();
            expect(testId).toBe(123);
        })
    })
    describe('getEmail', () => {
        it('should return the given email address', () => {
            const testEmail = testMember.getEmail();
            expect(testEmail).toBe('sam@email.com');
        })
    })
    describe('getRole', () => {
        it('should return "Employee" when no role is specified', () => {
            const testRole = testMember.getRole();
            expect(testRole).toBe('Employee');
        })
    })
})