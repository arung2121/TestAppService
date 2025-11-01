import { reactive } from "vue";

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
  get total() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
});
