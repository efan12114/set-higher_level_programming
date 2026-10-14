class TaskQueue {
  constructor(name) {
    this.queueName = name;
    this.tasks = [];
    this.isProcessing = false;
  }

  addTask(taskFn, priority) {
    if (!taskFn || typeof taskFn !== 'function') {
      console.error('Task must be a function.');
      return;
    }

    const newTask = { taskFn, priority, timestamp: Date.now() };
    this.tasks.push(newTask);

    this._checkHighPriority(priority);
    this._scheduleProcessing();
  }

  _checkHighPriority(priority) {
    if (priority > 9) {
      console.warn(`High priority task added to ${this.queueName}.`);
    }
  }

  _scheduleProcessing() {
    if (this.tasks.length === 1 && !this.isProcessing) {
      console.log(`Starting queue ${this.queueName}.`);
      this._startProcessing();
    }
  }

  _startProcessing() {
    this.isProcessing = true;
  }
}

module.exports = TaskQueue;
