export default class Job {
    /**
     * @param {*} position 
     * @param {*} location 
     * @param {*} jobDescription 
     * @param {*} qualification 
     * @param {*} wage 
     */
    constructor(position, location, jobDescription, qualification, wage) {
        this.position = position;
        this.location = location;
        this.jobDescription = jobDescription;
        this.qualification = qualification;
        this.wage = wage;
    }
}
