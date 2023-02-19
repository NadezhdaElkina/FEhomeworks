function increaseCounter() {
    let count = Number(window.localStorage.getItem("count"));
    count +=1;
    window.localStorage.setItem("count", count);
} 

function decreaseCounter() {
    let count = Number(window.localStorage.getItem("count"));
    count -=1;
    window.localStorage.setItem("count", count);
}

function clearCounter() {
  window.localStorage.clear();
 }