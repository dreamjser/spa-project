export default {
  formatAmount(amount) {
    if(typeof amount === 'number') {
      amount = amount.toString();
    }
    return amount.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
};
