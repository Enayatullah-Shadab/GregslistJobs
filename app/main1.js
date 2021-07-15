// main1 spins up the app and load all controllers
import JobsController from "./Controllers/JobsController.js";
class App {

    jobsController = new JobsController()

}
window["app"] = new App();