# Material UI React Pricing Page

A small React application created to practice building a modern pricing page with Material UI components.  
The project includes a navigation bar, hero section, responsive pricing cards, a popular plan badge, feature lists, buttons, and a footer.

This project was built to practice Material UI, React component structure, responsive layout, and styling with the `sx` prop.

![Material UI React Pricing Page Demo](demo/demo.gif)

## Features
- Responsive pricing cards
- Navigation bar with Material UI `AppBar` and `Toolbar`
- Hero section with a background image
- Pricing plans rendered from an array with `.map()`
- Popular plan badge with `Chip`
- Material UI cards with images, content, and buttons
- Feature lists created with Material UI list components
- Footer section
- Clean and modern UI for a portfolio project

## Tech Stack
- React
- JavaScript
- Material UI
- Emotion
- CSS
- Create React App

## What I Used
In this project, I used the following Material UI components:
```js
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
```

### `AppBar`
`AppBar` is used to create the top navigation bar of the page.
In this project, it contains the site title and navigation buttons.

### `Toolbar`
`Toolbar` is used inside `AppBar` to align the navigation content correctly.
It helps place the title on the left and the buttons on the right.

### `Box`
`Box` is a flexible Material UI wrapper component.
In this project, it is used for sections, layout blocks, the hero section, and the footer.  
It also allows styling directly with the `sx` prop.

### `Button`
`Button` is used for navigation links and pricing plan actions.
Examples in this project:
- Navigation buttons in the header
- Hero button
- Pricing card buttons

### `Card`
`Card` is used to create each pricing plan block.
Each pricing card contains an image, title, price, description, feature list, and action button.

### `CardContent`
`CardContent` is used inside each `Card` to hold the main text content.
In this project, it contains the plan name, price, description, and features.

### `CardMedia`
`CardMedia` is used to display an image inside each pricing card.
In this project, each plan has its own image.

### `CardActions`
`CardActions` is used for the action area of the card.
In this project, it contains the plan selection button.

### `Chip`
`Chip` is used to show a small label.
In this project, it marks the Premium plan as `Popular`.

### `Container`
`Container` is used to limit the width of the content and center it on the page.
It makes the layout look cleaner and more professional.

### `Grid`
`Grid` is used to create a responsive layout for the pricing cards.
In this project, the cards are displayed:
- 1 card per row on small screens
- 2 cards per row on medium screens
- 3 cards per row on larger screens

### `List`
`List` is used to create a list of features for each pricing plan.

### `ListItem`
`ListItem` is used for each separate feature inside the list.

### `ListItemText`
`ListItemText` is used to display the text of every feature.

### `Stack`
`Stack` is used to align elements with spacing between them.
In this project, it is used to align the price and the period text.

### `Typography`
`Typography` is used for text elements such as headings, descriptions, prices, and footer text.
It helps keep text styles consistent across the page.

## Why Material UI Is Used
Material UI is used to build a clean and modern interface faster with ready-made React components.
Instead of creating every UI element from scratch with only HTML and CSS, Material UI provides components such as `Button`, `Card`, `AppBar`, `Grid`, and `Typography`.
In this project, Material UI helps create a professional pricing page with responsive cards, a navigation bar, styled buttons, and a consistent design system.

## How It Works
The pricing plans are stored in an array called `packages`.
```js
const packages = [
  {
    name: 'Базовий',
    price: '$9.99',
    period: '/ місяць',
    description: 'Стартовий пакет для невеликих задач і знайомства з продуктом.',
    features: ['Функція 1', 'Функція 2', 'Функція 3'],
    imageUrl: 'https://picsum.photos/seed/basic/500/300',
    buttonText: 'Вибрати базовий',
  },
];
```
The application uses `.map()` to render a pricing card for each object in the array.
```js
 {packages.map((pkg) => (
 <Grid size={{ xs: 12, sm: 6, md: 4 }} key={pkg.name}>
    {/* Pricing card content */}
  </Grid>
))}
```
This makes the code cleaner because the pricing cards are created dynamically from data.

## `component` vs `variant` in Material UI
Material UI components often have two important props: `component` and `variant`.
They look similar, but they do different things.

### `variant`
`variant` controls how the component looks.
For example:
```jsx
<Typography variant="h3">
  Ласкаво просимо до нашого продукту!
</Typography>
```
Here, `variant="h3"` gives the text the visual style of an `h3` heading.
It changes the font size, font weight, and general appearance according to the Material UI theme.

### `component`
`component` controls which real HTML tag will be rendered in the browser.
For example:
```jsx
<Typography component="h1" variant="h6">
  Наш продукт
</Typography>
```
In this example:
- `component="h1"` means the browser will render this text as an HTML `<h1>`
- `variant="h6"` means it will visually look like Material UI `h6`
So the element is semantically an `h1`, but visually styled like `h6`.

### Simple Difference
```jsx
<Typography component="h1" variant="h4">
  Page Title
</Typography>
```
This means:
- `component="h1"` = HTML tag / semantic meaning
- `variant="h4"` = visual style / appearance

### Why This Is Useful
This is useful because a page should have correct semantic HTML for accessibility and SEO.
For example, the main page title should usually be an `h1`, but you may not want it to look very large.  
Material UI allows you to keep the correct HTML tag and still choose the visual style you want.

## Styling with the `sx` Prop
This project uses the Material UI `sx` prop for styling.
Example:
```jsx
<Box
  sx={{
    minHeight: '100vh',
    bgcolor: 'grey.100',
  }}
>
```
The `sx` prop allows writing styles directly inside Material UI components using theme-aware values.
For example:
- `bgcolor: 'grey.100'`
- `color: 'common.white'`
- `py: 6`
- `mx: 'auto'`
This is a common and convenient way to style Material UI projects.

## Getting Started
### 1. Clone the repository
```bash
git clone https://github.com/your-username/lesson-63-mat-ui.git
cd material-ui-react-pricing-page
```
### 2. Install dependencies
```bash
npm install
```
### 3. Run the project locally
```bash
npm start
```
The application will open in the browser at:
```text
http://localhost:3000
```
### 4. Build for production
```bash
npm run build
```
## Scripts
```bash
npm start       # Start development server
npm test        # Run tests
npm run build   # Build production version
```

## Project Structure
```text
lesson-63-mat-ui/
├── demo/
│   └── demo.gif
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── App.js
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Notes
This is a learning project focused on practicing Material UI in React.
For this project, Material UI was used to build a responsive pricing page with ready-made UI components.  
The main goal was to understand how to structure a page with Material UI components, style them with the `sx` prop, and use props such as `component` and `variant` correctly.
