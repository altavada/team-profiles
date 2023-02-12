const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    const testMember = new Engineer('Sarah', 332, 'sarah@email.com', 'sthomas06');
    describe('getGit', () => {
        it("should return the employee's Github username", () => {
            const testGit = testMember.getGit();
            expect(testGit).toBe('sthomas06');
        });
    })
    describe('getName', () => {
        it('should return the given name', () => {
            const testName = testMember.getName();
            expect(testName).toBe('Sarah');
        })
    })
    describe('getId', () => {
        it('should return the given ID number', () => {
            const testId = testMember.getId();
            expect(testId).toBe(332);
        })
    })
    describe('getEmail', () => {
        it('should return the given email address', () => {
            const testEmail = testMember.getEmail();
            expect(testEmail).toBe('sarah@email.com');
        })
    })
    describe('getRole', () => {
        it('should return "Engineer" as employee role', () => {
            const testRole = testMember.getRole();
            expect(testRole).toBe('Engineer');
        })
    })
})