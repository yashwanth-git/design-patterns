/** Singleton Pattern **/
//Limit the number of instances of an object to 1
//Usecase: Admin Account

const Singleton = (function () {
    function ProcessManager() {
        this.noOfProcess = 0;
    }
    ProcessManager.prototype.IncrementProcessManager = function () {
        this.noOfProcess++;
    }
    let pManager;
    function createProcessManager() {
        pManager = new ProcessManager()
        return pManager
    }
    return {
        getProcessManager: () => {
            if (!pManager)
                pManager = createProcessManager();
            return pManager
        }
    }
})();

const processManager = Singleton.getProcessManager();
const processManager1 = Singleton.getProcessManager();

console.log(processManager === processManager1); //returns true which means both points to same one

console.log(processManager);
console.log(processManager1);

processManager.IncrementProcessManager();
processManager1.IncrementProcessManager();

/* Both return same number of process which 
** means both are pointing to the same object
*/
console.log(processManager);
console.log(processManager1);