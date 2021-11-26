# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @brogr/lotide`

**Require it:**

`const _ = require('@brogr/lotide');`

**Call it:**

`const results = _.head([1, 2, 3]) // => 1`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: asserts whether two arrays are identical
* `assertEqual`: asserts whether two primitive vars are identical
* `assertObjectsEqual`: asserts whether two objects are identical
* `countOnly`: counts certain instances within an object
* `eqArrays`: tests whether two arrays are identical
* `eqObjects`: tests whether two objects are identical
* `findKey`: scans object and returns the first key for which the callback returns a truthy value
* `findKeyByValue`: scans object and returns the first key which contains the given value
* `head`: returns first element of array
* `map`: applies callback to each element of array
* `middle`: takes in an array and return the middle-most element(s) of the given array
* `takeUntil`: returns a "slice of the array with elements taken" until callback returns a truthy value
* `without`: return a subset of a given array, removing unwanted elements