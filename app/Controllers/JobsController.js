import { ProxyState } from "../AppState";
import Job from "../Models/Job";



export default class JobsController {
    constructor() {

    }
}
function _draw() {
    let template = "";
    let Jabs = ProxyState.Jabs.forEach(jab => {
        template += Job.Template
    })
    document.getElementById('jobs').innerHTML = template

}