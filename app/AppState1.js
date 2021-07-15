import Job from "./Models/Job";

// the goal of AppState or store is to hold all data for entire application

class AppState extends EventEmitter {
    Jobs = [new Job(), {}]
}

Jobs = [
    new Job({
        position: 'Cashier',
        location: 'Boise',
        jobDescription: 'Handling register and great customer service',
        qualification: 'High School Diploma',
        wage: 16.25 / hour,
    }),
    new Job({
        position: 'Book keeper',
        location: 'Meridian',
        jobDescription: 'willing to work in library with kids',
        qualification: 'College Diploma and one year experience',
        wage: 18 / hour,
    }),
]
