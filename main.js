new Vue({
    el: "#obj",
    data: {
        title: "hello"
    },
    methods: {
        changeValue: function(event) {
           return this.title = event.target.value;
        }
    }
})