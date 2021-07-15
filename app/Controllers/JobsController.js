//NOTE controller takes user input from view(html) and calls to the model or service and attempt to change  
import { ProxyState } from "../AppState";
import Job from "../Models/Job";


// class is the blue print of an object and it define what a thing is.
export default class JobsController {


    constructor() {


    }
    // methods are functions that are tied to specific objects.


}//encapsulation: hiding the internal representation or state of an object from outside manipulation 
function _draw() {
    let template = "";
    let Jabs = ProxyState.Jabs.forEach(jab => {
        template += Job.Template
    })
    document.getElementById('jobs').innerHTML = template

}