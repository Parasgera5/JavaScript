// debouncing -> hum ek delay batayenge jaise hi utna delay ho jayega action(delay occurs) ka reaction(jo hum karna chahte hai us particular delay ke baad) trigger ho jayega.
// throttle -> particular interval pe hota rahunga jabtab action hotao rahega. action(lets say mouse hila rahe hai ya lets say typing kar rahe hai non stop) ho raha hai lets say har 2 seconds mein console.log() ho raha hai

let throttle = (fnc, delay) => {
    let timer = 0;
    return function(...args){
        let now = Date.now();
        if(now - timer >= delay){
            timer = now;
            fnc(...args);
        }
    }
}
document.getElementById("throttle").addEventListener("input", throttle(function(){
    console.log("aldisjfg");
}, 1000));