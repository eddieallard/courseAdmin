import { EventEmitter } from 'events'; 
import { Dispatcher } from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = "change";
let _courses = [];

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

Dispatcher.register(action => {
    switch(action.actionTypes) {
        case actionTypes.CREATE_COURSE:
            _courses.push(action.course);
            store.emitChange();
            break;
        default:
        // Nothing to do here
    }
})

export default store;