// model or Job is object which holds data/information that needed per object
export default class Job {
    /**
     * @param {*} position 
     * @param {*} location 
     * @param {*} jobDescription 
     * @param {*} qualification 
     * @param {*} wage 
     */

    // trough a constructor we add properties to a class that created 
    constructor(position, location, jobDescription, qualification, wage) {
        // this keyword refer to the object it belongs to 
        this.position = position;
        this.location = location;
        this.jobDescription = jobDescription;
        this.qualification = qualification;
        this.wage = wage;
    }
}
