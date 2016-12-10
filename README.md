# Asynchronous Callbacks

One of the good (and confusing) things about JavaScript is the fact it has a number of options of writing async operations. These options include promises, generators, async/await, and callbacks. Each of these options define how the async function must be written. Callbacks are often considered to be the most straightforward, but they lead to poor coding practices if not done with care ([_callback hell_](http://callbackhell.com)).

A callback is simply a function that is passed to another function so it can be called later. Not all callbacks are called from async functions. Some good examples of functions that take callbacks and are _not_ async are `map`, `filter` and `reduce`.

The code in this repo was used in [this video] to illustrate synchronous functions, synchronous callbacks and using callbacks with async functions. Here is the rough outline used:

* Synchronous functions
* Synchronous callbacks
* Asynchronous callbacks

