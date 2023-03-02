

class AlarmClock {
    constructor(alarmCollection = [], intervalId,) {
        this.alarmCollection = alarmCollection;
        this.intervalId = intervalId;
    }
    addClock(time, callback) {
        const timeNow = new Date();
        const hours = timeNow.getHours().toString();
        const minutes = timeNow.getMinutes().toString();
        let resultTime = hours + ":" + minutes;
        if (resultTime!=null) {
            console.log("throw new Error('Отсутствуют обязательные аргументы')");
        }
        if (resultTime === timeNow) {
            console.warn('Уже присутствует звонок на это же время');
        } 
        if (resultTime !== timeNow) {
            callback();
            const callback = callback();
            return callback;
        }
        const cool = {callback: true, time, canCall};
        if (cool!=null) 
        {
            this.alarmCollection.push(cool);
        }
    } 
}

