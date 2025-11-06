import { reactive, computed } from "vue";

export const cart = reactive({
  items: [],
  add(product) {
    const existing = this.items.find(item => item.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  },
  remove(productId) {
    this.items = this.items.filter(item => item.id !== productId);
  },
  clear() {
    this.items = [];
  },
  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
});

export const cartTotal = computed(() =>
  cart.items.reduce((total, item) => total + item.price * item.quantity, 0)
);
