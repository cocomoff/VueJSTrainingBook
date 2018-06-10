// main.js

var app = new Vue({
    el: '#app',
    data: {
        isChild: true,
        isActive: true,
        textColor: 'red',
        bgColor: 'lightgray',
        classObject: {
            child: true,
            'is-active': false
        },
        styleObject: {
            color: 'red',
            backgroundColor: 'lightgray'
        },
        radius: 50
    }
});
