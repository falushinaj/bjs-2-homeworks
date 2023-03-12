
class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.intervalId = null;
    }
  
    addClock(time, callback) {
      if (!time || !callback) {
        throw new Error("Отсутствуют обязательные аргументы");
      }
      const foundAlarm = this.alarmCollection.find((alarm) => alarm.time === time);
      if (foundAlarm) {
        console.warn("Уже присутствует звонок на это же время");
        return;
      }
      const newAlarm = {
        time,
        callback,
        canCall: true,
      };
      this.alarmCollection.push(newAlarm);
    }
  
    removeClock(time) {
      const initialLength = this.alarmCollection.length;
      this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time);
      return initialLength !== this.alarmCollection.length;
    }
  
    getCurrentFormattedTime() {
        const timeNow = new Date();
        const hours = timeNow.getHours().toString().padStart(2, "0");
        const minutes = timeNow.getMinutes().toString().padStart(2, "0");
        return hours + ':' + minutes;
    }
  
    start() {
      if (this.intervalId) {
        return;
      }
      this.intervalId = setInterval(() => {
        this.alarmCollection.forEach((alarm) => {
          if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
            alarm.canCall = false;
            alarm.callback();
          }
        });
      }, 1000);
    }
  
    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  
    resetAllCalls() {
      this.alarmCollection.forEach((alarm) => (alarm.canCall = true));
    }
  
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
  }