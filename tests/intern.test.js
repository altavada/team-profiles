const Intern = require('../lib/intern');

describe('Intern', () => {
    const testMember = new Intern('Mei', 726, 'mei@email.com', 'Tianjin University');
    describe('getSchool', () => {
        const testSchool = testMember.getSchool();
        expect(testSchool).toBe('Tianjin University');
    })
    describe('getName', () => {
        it('should return the given name', () => {
            const testName = testMember.getName();
            expect(testName).toBe('Mei');
        })
    })
    describe('getId', () => {
        it('should return the given ID number', () => {
            const testId = testMember.getId();
            expect(testId).toBe(726);
        })
    })
    describe('getEmail', () => {
        it('should return the given email address', () => {
            const testEmail = testMember.getEmail();
            expect(testEmail).toBe('mei@email.com');
        })
    })
    describe('getRole', () => {
        it('should return "Intern" as employee role', () => {
            const testRole = testMember.getRole();
            expect(testRole).toBe('Intern');
        })
    })
})