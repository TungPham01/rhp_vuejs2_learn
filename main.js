new Vue({
    el: "#obj",
    data: {
        title: "hello",
        count: 0,
        x: 0,
        y: 0,
        vModel: 'test',
        a: 0,
        b: 0,
        isActive: true,
        isError: true
    },
    computed: {
        TangA: function(event) {
            console.log("gọi a")
            return this.a;
        },
        TangB: function(event) {
            console.log("gọi b")
            return this.b;
        }
    },
    methods: {
        changeValue: function(event) {
            console.log("gọi changeValue")
           return this.title = event.target.value;
        },
        TangGiaTri: function(event) {
            console.log("gọi TangGiaTri")
            this.count = this.count + 1;
        },
        TinhToaDo: function(event) {
            console.log("gọi TinhToaDo")
            this.x = event.clientX
            this.y = event.clientY
        },
        

    }
})