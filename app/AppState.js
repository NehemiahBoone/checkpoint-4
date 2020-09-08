import Todo from "./japsdoif/Todo.js.js.js.js"
import Weather from "./japsdoif/Weather.js.js.js.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Image from "./japsdoif/Image.js.js.js.js"
import Quote from "./japsdoif/Quote.js.js.js.js"

// TODO you will want to add all your other data to the AppState
class AppState extends EventEmitter {
  /** @type {Todo[]} */
  todos = []
  /** @type {Weather} */
  weather = null
  /** @type {Image} */
  image = null
  /** @type {Quote} */
  quote = null
}

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
