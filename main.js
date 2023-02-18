const express=require('express');
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