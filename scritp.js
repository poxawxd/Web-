function orderProduct(name, price) {
  // พาไปหน้า order พร้อมส่งชื่อสินค้าและราคาใน URL
  const url = `order.html?name=${encodeURIComponent(name)}&price=${price}`;
  window.location.href = url;
}
