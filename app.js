const app = Vue.createApp({
    data() {
        return {
            items: []
        }
    },
    methods: {
        add_item() {
            this.items.push(this.item_text);
            this.item_text = "";
        },
        remove_item(index) {
            this.items.splice(index,1);
        }
    },
})


app.mount('#app')