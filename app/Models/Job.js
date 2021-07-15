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
    // methods is a special type of functions that is tied to specific object.
    get Template() {
        return `
        <div class="col-6">
        <div class="card-columns">
            <div class="card">
                <img class="card-img-top" src="assets/img/we are hirng.jpg" alt="">
                <div class="card-body">
                    <h5 class="position">${Position}: </h5>
                    <h5 class="location">${Location}: </h5>
                    <h5 class="job description">${Job - Description}: </h5>
                    <h5 class="qualification">${Qualification}: </h5>
                    <h5 class="wage">${Wage}: </h5>
                </div>
            </div>
        </div>
    </div>
        `

    }
}
