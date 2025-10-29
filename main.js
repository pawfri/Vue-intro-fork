const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        //Removes the specific id, no matter where it is in the array (safer)
        removeFromCart(id) {
            const index = this.cart.indexOf(id)
                if (index > -1) {
                this.cart.splice(index, 1)          
            }
        },
        //Alternative remove method: Always remove from the back of the array (simpler but unsafe)
        // removeFromCart(id) {
        //     this.cart.pop(id)         
        // }
    }
  })
  