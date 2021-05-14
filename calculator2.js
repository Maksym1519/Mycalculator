

function addNumber(num) {
    document.form.textview.value = 
    document.form.textview.value + num;
}
function backspace() {
    let str = document.form.textview.value;
    document.form.textview.value = str.substring(0,str.length-1)
}
function clean() {
    document.form.textview.value = '';
}

function even() {
    let count = document.form.textview.value;
    if(count) {
        document.form.textview.value = eval(count)
    }
}
