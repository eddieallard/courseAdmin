import { EventEmitter } from 'events'; 

const CHANGE_EVENT = "change";

class CourseStore extends EventEmitter {
  addChangeListerner(callback) {
      this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
      this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
      this.emit(CHANGE_EVENT);
  }
}

const store = CourseStore();
export default store;