export default function log(data) {
    console.log(data);
}


const getCurrentHour = () => {
    return (new Date).getHours();
}

class MyLogger {
    constructor(props) {
        this.lectures = ['java', 'ios'];

    }

    getLectures() {
        return this.lectures;
    }

    getTime = () => {
        return Date.now();
    }    
}