const express=require('express');

/*
Krijo nje app node/express ku thirret moduli event . krijo/thirr eventin me emer “runEvent_1” i cili kur thirreth  return “Hello from events”. 
Krijo nje evnet tjeter ku ne parameter pranon nje objekt obj1= {init:‘Node’,version ‘18’} dhe kthen mesazhin “object from events: {init:‘Node’,version ‘18’}” . 
krijo ne evnet tjeter “testEvent” ku kthen mesazhin “only test”. shfqaq numrin total te eventeve dhe ne fun fshij evnetin “testEvent”. Krijo nje repo te re, push 
aplikacionin ne branch example-event-1 duke shtuar paraprakisht edhe .gitignore file.
*/
const EventEmmiter=require("events");
    const event=new EventEmmiter();
    // console.log(event);
    //First request
    event.on('runEvent_1',()=>{
        console.log('Hello from events')
    })
    event.emit('runEvent_1');
    //Second request
    const obj={
        init:'Node',
        version: '18'
    }
    event.on('event2',(obj)=>{
        console.log(`objects from events ' ${JSON.stringify(obj)} `)
    })
    event.emit('event2',obj);
    //test event
    event.on('testEvent',()=>{
        console.log('only test')
    });
    event.removeAllListeners('testEvent');
    //Third request
   const events=  event.eventNames();
   console.log(events)
   events.forEach(eventNames =>{
    const count=event.listenerCount(eventNames);
    console.log("Total number of listeners"+`${eventNames} : ${count}`)
   })

/*
Pasi kemi  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; Te krijohet nje metod “getEvenNumbers” qe kthen vetem numrat qift. Te shfaqen ne eventin EvenEvent. 
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

function getEvenNumbers(numbers) {
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  myEmitter.emit('EvenEvent', evenNumbers);
  return evenNumbers;
}

getEvenNumbers(numbers);