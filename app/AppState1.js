import Job from "./Models/Job";

// the goal of AppState or store is to hold all data for entire application

class AppState extends EventEmitter {
    Jobs = [new Job(), {}]
}


// array is a container of the same and index based objects 
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

// proxy is an object which wraps an object or a function and monitors it via something called target
export const ProxyState = new Proxy(new AppState(), {
    get(target, prop) {
        isValidProp(target, prop)
        return target[prop]
    },
    set(target, prop, value) {
        isValidProp(target, prop)
        target[prop] = value
        target.emit(prop, value)
        return true
    }
})
