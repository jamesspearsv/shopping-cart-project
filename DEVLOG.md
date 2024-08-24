# Dev Log

## 8/19/2024

Worked on implementing and finishing the mobile styles and function of the nav bar component.

- Adjusted nav link items font size and added hover effect
- Styled cart preview buttons
- Styled and implemented transition effect for mobile menu toggle button

**Next Step:s** Begin implementing store page and API functions. Build itemCard component.

## 8/20/2024

Begin building store page, API function, and ItemCard.

- Emplemented API fetching using useEffect
- Laid out basic skeletion of store page with filters panel and item grid
- Began basic structure and style of ItemCard.

**Next Steps:** Continue building out store page and item cards. Add ability to add item to cart.

## 8/20/2024

Built out item cards and integrated cart functions

- Implemented styling for item cards
- Implemented ability to add to, remove from, and change quantity of items in cart
- Implemented minor style change to item cards to prevent line breaks below 200px in width

**Next Steps:** Build out filtering ability for store page

## 8/21/2024

Added total items in cart counter to cart button in navigation

- Implemented state mangagement for total items count
- Used useEffect to update total items count each time the cart was updated

**Next Steps:** Build out filtering ability for store page

## 8/24/2024

Added filtering ability based on item categories

- Built and styled category filters panel
- Built and styled category selectors
- Implemented state management for unique categories and active category
- Implemented conditional rendering for items based on active category
- Added loading animation to store page (credit: https://loading.io/css/)

**Next Steps:** Build cart preview panel
