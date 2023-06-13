document.addEventListener("DOMContentLoaded", function() {
        let prod = document.getElementById("prod");
        let products = [
            {
                id: 1,
                name: 'DECAF',
                image: 'https://i.postimg.cc/1tLCmqcQ/Alesso-Platinum-Coffee-Beans-1kg-Decaf.webp',
                description: 'Nutty, Caramel Round Body',
                price: 9.99
            },
            {
                id: 2,
                name: 'ARABICA',
                image: 'https://i.postimg.cc/t4C5HkQ6/1kg-Brazil-Medium-Dark-Roast-Beans.jpg',
                description: '100% Arabica coffee',
                price: 109.99
            },
            {
                id: 3,
                name : 'Strictly coffee',
                image: 'https://i.postimg.cc/cLG18tHF/Strictly-Coffee-Jackson-Brown-Blend-Ground-1kg.jpg',
                description: '1KG Jackson Brown',
                price: 109.99
            },
            {
                id: 4,
                name : 'ARABICA',
                image: 'https://i.postimg.cc/pLGBVjR6/1kg-Brazil-Medium-Roast-Beans.jpg',
                description: 'Italiano Espresso',
                price: 109.99
            },
            {
                id: 5,
                name : 'Strictly coffee',
                image: 'https://i.postimg.cc/kMZgqpd3/Strictly-Coffee-Jackson-Brown-Blend-Ground-1kg-Uganda.jpg',
                description: '1KG Jackson Brown',
                price: 109.99
            },
            {
                id: 6,
                name : 'ARGENTO',
                image: 'https://i.postimg.cc/PJjWVzQP/Alesso-Platinum-Coffee-Beans-1-kg-Argento-Italian-Espresso.webp',
                description: 'Cherry, Juicy, Creamy',
                price: 109.99
            },
            {
                id: 7,
                name : 'Strictly coffee',
                image: 'https://i.postimg.cc/kMZgqpd3/Strictly-Coffee-Jackson-Brown-Blend-Ground-1kg-Uganda.jpg',
                description: '1KG Jackson Brown',
                price: 109.99
            },
            {
                id: 8,
                name : 'ARGENTO',
                image: 'https://i.postimg.cc/PJjWVzQP/Alesso-Platinum-Coffee-Beans-1-kg-Argento-Italian-Espresso.webp',
                description: 'Medium to dark, Roast beans',
                price: 109.99
            },
            {
                id: 9,
                name : 'ARABICA',
                image: 'https://i.postimg.cc/MKYD444x/1kg-Home-Blend-Coffee-Medium-Roast-Beans.jpg',
                description: 'Home Roast',
                price: 109.99
            }
            
            
            
        ];
    
        products.forEach((product) => {
            prod.innerHTML += `
            <div class="card text-center" style="width: 100%;">
                <img src="${product.image}" class="card-img-top" alt="Product Image">
                <div class="card-body">
                    <h5 class="card-title text-center"> ${product.name}</h5>
                    <p class="card-text text-center">${product.description}</p>
                    <p class="card-text text-center">Price: R${product.price}</p>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#checkoutModal">Add to Cart</button>
                </div>
            </div>`;
        });
    
        // Get the modal element
        let checkoutModal = document.getElementById("checkoutModal");
    
        // Add to Cart button click event
        let addToCartButtons = document.querySelectorAll(".btn.btn-primary[data-bs-toggle='modal']");
        addToCartButtons.forEach((button) => {
            button.addEventListener("click", function() {
                // Perform the checkout logic here
                // You can show a success message, update the cart, etc.
    
                // Close the modal after checkout
                let modalInstance = bootstrap.Modal.getInstance(checkoutModal);
                modalInstance.hide();
            });
        });
    });
    