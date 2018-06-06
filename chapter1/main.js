// main.js

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        count: 0,
        list: ['a', 'b', 'c'],
        show: true
    },
    methods: {
        handleClick: function(event) {
            alert(event.target)
        }
    }
});
