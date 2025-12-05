 let cartCount = 0;

  function addToCart() {
    cartCount++;
    document.getElementById("cartCount").textContent = cartCount;

    const badge = document.getElementById("cartCount");
    badge.style.transform = "scale(1.3)";
    setTimeout(() => {
      badge.style.transform = "scale(1)";
    }, 150);
  }