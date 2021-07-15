//gets request/information from controller that applies to the business logic, and based on that return certain data to store 
class JobsService {
    createJob(rawJob) {

        ProxyState.jobs = [...ProxyState.jobs, new Job(rawJob)]
    }
}


// Singleton Only one instance is ever made and the same instance is always exported
export const jobsService = new JobsService()