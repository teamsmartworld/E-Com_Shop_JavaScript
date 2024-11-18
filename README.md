Welcome to ChicBoutique, a minimalistic and fully functional e-commerce website built with HTML, CSS, and JavaScript. This project demonstrates core front-end development skills, including dynamic product generation, sorting, cart management, and checkout functionality.
Table of Contents

    Features
    Technologies Used
    Setup and Installation
    Project Structure
    Features Breakdown
    Future Enhancements
    Contributing
    License

Features

    Dynamic Product Listing
        Products are dynamically generated using JavaScript for scalability and flexibility.
    Sorting by Price
        Users can sort products in ascending or descending order based on price.
    Add to Cart Modal
        A sleek modal allows users to view and manage their cart.
        Users can add or remove items, and the total price updates in real-time.
    Cart Management
        Includes functionality for adding and subtracting quantities of products.
        Automatically calculates and displays the total amount for checkout.
    Responsive Design
        Styled with CSS to ensure a user-friendly experience across devices.

Technologies Used

    HTML5: For the structure of the website.
    CSS3: To style the website and ensure responsiveness.
    JavaScript (ES6): For dynamic functionality, sorting, and cart management.
    Git/GitHub: Version control and hosting of the project.

Setup and Installation
Clone the Repository

    Open your terminal or Git Bash.
    Run the following command:

git clone https://github.com/your-username/r-commerce.git

Navigate to the project directory:

    cd E-Com_Shop_JavaScript

Open in Browser

    Open the index.html file in your favorite browser to view the website.

Customize

    To add or update products, modify the script.js file where the products are dynamically generated.

Project Structure

R-Commerce/
│
├── index.html       # Main HTML file
├── styles.css       # Stylesheet for the website
├── script.js        # JavaScript functionality
├── README.md        # Project documentation
└── assets/          # (Optional) Folder for images and other resources

Features Breakdown
1. Dynamic Product Generation

    Products are generated dynamically in the products--list section using JavaScript.
    This allows for easy addition or removal of products by simply editing the data in script.js.

2. Sorting Products

    Users can sort products by price in ascending or descending order using a dropdown.
    The sorting is implemented with an event listener in script.js and uses the Array.sort() method.

3. Add to Cart Modal

    A modal appears when users click on the cart, displaying the products added to their cart.
    Users can:
        Add or remove items.
        Adjust quantities dynamically.
        View the updated total amount in real-time.

4. Checkout and Total Calculation

    The total price of items in the cart is calculated automatically.
    This functionality ensures a seamless user experience for shopping and checkout.

Future Enhancements

    Search Functionality: Allow users to search for products by name or category.
    Product Categories: Add filters for categories to enhance browsing.
    User Authentication: Enable users to create accounts and save their carts.
    Back-End Integration: Implement a database for product storage and user data.
    Payment Gateway: Integrate secure payment options for a complete e-commerce experience.

Contributing

Contributions are welcome! If you’d like to improve this project:

    Fork the repository.
    Create a new branch (git checkout -b feature-name).
    Commit your changes (git commit -m 'Add feature name').
    Push to the branch (git push origin feature-name).
    Open a pull request.

License

This project is licensed under the MIT License. Feel free to use, modify, and distribute as needed.
