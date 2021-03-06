//NOTE controller takes user input from view(html) and calls to the model or service and attempt to change  
import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";
//encapsulation: hiding the internal representation or state of an object from outside manipulation 


function _draw() {
    let template = "";
    let Jabs = ProxyState.Jabs.forEach(jab => {
        template += Job.Template
    })
    document.getElementById('jobs').innerHTML = template
}

// class is the blue print of an object and it define what a thing is.
export default class JobsController {
    constructor() {
        // When 'jobs' changes in the AppState run the _draw method
        ProxyState.on('jobs', _draw)
        ProxyState.on('jobs', () => { console.log('new jobs') })

        // This only runs when the app first loads because data is already in the state
        _draw()
    }
    createJob() {
        event.preventDefault()
        let form = event.target
        let rawJob = {
            position: form.position.value,
            location: form.location.value,
            jobDescription: form.jobDescription.value,
            qualification: form.qualification.value,
            wage: form.wage.value,
        }
        carsService.createJob(rawJob)
        form.reset()
    }
}

