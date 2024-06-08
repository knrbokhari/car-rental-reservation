## Bonus
Tesla charges $10 per hour and $50 per day, renting the car for 6 hours at the hourly rate would cost $60, which is more than the daily rate of $50. To avoid overcharging customers, we could do those strategies:

* if the hourly rate is more than the daily then we may switch the cost to the daily rate of $50.

* Design a pricing system that aligns with the client's business logic, whether it's maintaining strict hourly rates or offering a more customer-friendly approach

* Implement a system to automatically calculate and charge the most economical option based on the rental duration.

* charge the hourly rate, ensuring fair pricing.



## Built With

- Next
- Typescript
- Tailwind CSS

### Live link

Check out the Website by visiting this [Link](https://unrivaled-piroshki-a7fbb9.netlify.app/).

## Install

    using SSH:
    $ git clone git@github.com:knrbokhari/car-rental-reservation.git
    or using HTTPS:
    $ git clone https://github.com/knrbokhari/car-rental-reservation.git
    $ cd car-rental-reservation
    $ npm install

### Run the next dev

    $ npm run dev

### Run the build

    $ npm run build

### Run start

    $ npm start

### File Structure

car-rental-reservation/ (root)

- public
  - next.svg
  - vercel.svg
- src

  - components

    - Home
      - AdditionalCharges.tsx
      - ChargesSummary.tsx
      - CustomerInformation.tsx
      - ReservationDetails.tsx
      - VehicleInformation.tsx
    - receipt
      - index.tsx
    - Ui
      - select
        - select.styles.ts
        - select.tsx
      - Button.tsx
      - date-picker.tsx
      - Input.tsx
      - Label.tsx
      - PickupDate.tsx
      - print.tsx
      - ReturnDate.tsx
      - select-input.tsx
      - Vehicle.tsx
      - VehicleType.tsx

  - layouts

    - layouts.tsx

  - pages

    - api
      - hello.ts
    - \_app.tsx
    - \_document.tsx
    - index.tsx

  - styles

    - globals.css

  - utils
    - calculate-all.ts
    - use-date-difference-calculation.ts

- .eslintrc.json
- .gitignore
- README.md
- next.config.js
- package-lock.json
- package.json
- postcss.config.js
- tailwind.config.js
- tsconfig.json
