  // Array of product data
  const products = [
    {
        name: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
        description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user's hardware configuration and operating system",
        price: "$64",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    },
    {
        name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        price: "$109",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    },
    {
        name: " Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        description: "3D NAND flash are applied to deliver high transfer speeds. Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking &amp; Correction) to provide the optimized performance and enhanced reliability.",
        price: "$109",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
        name: "Mens Casual Premium Slim Fit T-Shirts",
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight &amp; soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        price: "$22.3",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
        name: "Mens Casual Slim Fit",
        description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        price: "$15.99",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    },
    {
        name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        price: "$109",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    },
    {
        name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        description: "ote:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        price: "$56.99",
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    },
    {
        name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        price: "$29.95",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    },
    {
        name: "Mens Casual Slim Fit",
        description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        price: "$15.99",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    },
    {
        name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        price: "$29.95",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    },

    // Add more products as needed...
];

// Function to generate product HTML
function generateProductHTML(product) {
    return `
        <li>
            <div class="product card">
                <img alt="This is an image" src="${product.image}" class="product--image" />
                <div class="product--text">
                    <h1 class="product--name">${product.name}</h1>
                    <p class="product--description">${product.description}</p>
                    <button class="product--buy">Buy Now</button>
                    <p class="product--price">${product.price}</p>
                </div>
            </div>
        </li>
    `;
}

// Function to render products to the DOM
function renderProducts() {
    const productsList = document.querySelector('.products--list');
    products.forEach(product => {
        productsList.innerHTML += generateProductHTML(product);
    });
}

// Call the function to render products
renderProducts();

//Implementing the sort functions
//Getting  the necessary elements
document.addEventListener("DOMContentLoaded", () => {
    const sortDropdown = document.getElementById("sort");
    const productList = document.querySelector(".products--list");
    const products = Array.from(productList.children);

// Adding an event listener to the sort dropdown
    sortDropdown.addEventListener("change", () => {
      const sortOrder = sortDropdown.value;
      const sortedProducts = products.sort((a, b) => {
        const priceA = parseFloat(
          a.querySelector(".product--price").textContent.replace("$", "")
        );
        const priceB = parseFloat(
          b.querySelector(".product--price").textContent.replace("$", "")
        );
  
        if (sortOrder === "asc") {
          return priceA - priceB;
        } else {
          return priceB - priceA;
        }
      });
  
      // Clearing the product list to avoid repetition
      while (productList.firstChild) {
        productList.removeChild(productList.firstChild);
      }
  
      // Appending the sorted products
      sortedProducts.forEach((product) => {
        productList.appendChild(product);
      });
    });
  });

  // Implementing the modal to the shop

// Define cart items array globally
let cartItems = [];

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modalCart");
    const cartLink = document.getElementById("cartLink");
    const closeBtn = document.getElementsByClassName("modal-cart-close")[0];
    const cartDisplay = document.querySelector(".modal-cart-content");

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll(".product--buy");
    
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Get the parent product element
            const productElement = this.closest(".product.card");
            
            // Extract product information - updated selectors to match your HTML
            const productName = productElement.querySelector(".product--name").textContent;
            const productPrice = productElement.querySelector(".product--price").textContent;
            const productImage = productElement.querySelector(".product--image").getAttribute("src");

            // Create product object
            const product = {
                name: productName,
                price: productPrice,
                image: productImage
            };

            // Add to cart array
            cartItems.push(product);
            
            // Update cart display
            updateCartDisplay();
            
            // Show confirmation
            showConfirmation(`${productName} added to cart!`);
            
            // Open the cart modal
            openModal();
        });
    });

    function updateCartDisplay() {
        if (!cartDisplay) return;

        if (cartItems.length === 0) {
            cartDisplay.innerHTML = `
                <span class="modal-cart-close">&times;</span>
                <h2>Your Cart</h2>
                <p>Your cart is empty</p>
            `;
            return;
        }

        let cartHTML = `
            <span class="modal-cart-close">&times;</span>
            <h2>Your Cart</h2>
            <div class="cart-items">
        `;

        cartItems.forEach((item, index) => {
            cartHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: contain;">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>${item.price}</p>
                    </div>
                    <button onclick="removeFromCart(${index})" class="remove-item">Remove</button>
                </div>
            `;
        });

        const total = calculateTotal();
        cartHTML += `
            </div>
            <div class="cart-total">
                <h3>Total: $${total}</h3>
            </div>
            <button class="checkout-button">Checkout</button>
        `;

        cartDisplay.innerHTML = cartHTML;
        
        // Reattach close button event listener
        const newCloseBtn = cartDisplay.querySelector(".modal-cart-close");
        if (newCloseBtn) {
            newCloseBtn.onclick = closeModal;
        }
    }

    function calculateTotal() {
        return cartItems.reduce((total, item) => {
            // Remove $ and convert to number
            const price = parseFloat(item.price.replace(/[$,]/g, ''));
            return total + price;
        }, 0).toFixed(2);
    }

    function showConfirmation(message) {
        const confirmation = document.createElement("div");
        confirmation.className = "confirmation-message";
        confirmation.textContent = message;
        document.body.appendChild(confirmation);

        setTimeout(() => {
            confirmation.remove();
        }, 3000);
    }

    function openModal() {
        if (modal) {
            modal.style.display = "block";
            setTimeout(() => {
                modal.classList.add("show");
            }, 10);
        }
    }

    function closeModal() {
        if (modal) {
            modal.classList.remove("show");
            setTimeout(() => {
                modal.style.display = "none";
            }, 300);
        }
    }

    // Remove item from cart
    window.removeFromCart = function(index) {
        cartItems.splice(index, 1);
        updateCartDisplay();
    };

    // Event Listeners
    if (cartLink) {
        cartLink.addEventListener("click", (e) => {
            e.preventDefault();
            openModal();
        });
    }

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});


