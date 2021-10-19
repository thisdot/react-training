# EXERCISES

## Props (Slide 31)

Create a `<UserProfile />` component that receives username and name as props.

## Conditional rendering (Slide 35)

Modify the `<UserProfile />` component.

- Use variables to show different greeting components depending on whether the user is logged in or not.
- Use inline ifs to conditionally show both an avatar image and a link to their GitHub profile if these exist.
- For the image, you can use: https://picsum.photos/200/200

## Components (Slide 44)

Create a `<UserProfiles />` component that renders a list of `<UserProfile />` components. 

```
const profiles = [
  {
    name: 'Cory House',
    username: 'coryhouse',
    avatar: 'https://picsum.photos/200/200',
    url: 'https://github.com/coryhouse',
  },
  {
    name: 'Kent C. Dodds',
    username: 'kentcdodds',
    avatar: 'https://picsum.photos/200/200',
    url: 'https://github.com/kentcdodds',
  },
];
```

## useState Hook (Slide 55)

Using the `<UserProfile />` component from the previous conditional rendering exercise, implement `useState` on the component to show/hide the user’s full bio.

```
const profiles = [
  {
    name: 'Cory House',
    username: 'coryhouse',
    avatar: 'https://picsum.photos/200/200',
    url: 'https://github.com/coryhouse',
    bio: 'Principal reactjsconsulting.com, Pluralsight Author, Software Architect',
  },
  {
    name: 'Kent C. Dodds',
    username: 'kentcdodds',
    avatar: 'https://picsum.photos/200/200',
    url: 'https://github.com/kentcdodds',
    bio: 'Improving the world w/ quality software · Husband, Father, Teacher, OSS · Be Kind',
  },
];
```

## useEffect Hook (Slide 67)

Implement `useEffect` on a new `<Users />` page to fetch users from GitHub based on a sample query.

GitHub endpoint: `https://api.github.com/search/users?q=${username}`

## Custom hook (Slide 74)

Refactor the logic that fetches users on the `<Users />` page into a `useSearch` custom hook and implement it on this page.

## Events + useState (Slide 81)

Build a login form that writes the login details to the console when the user logs in.

## Child to parent (Slide 87)

Build a `<Search />` component that informs its parent, the `<Users />` page, when the user has searched for a keyword.

## Container/Presentation components (Slide 101)

Pages are usually container components. Currently, `<UserProfiles />` is receiving mock data. Update the `<Users />` container component to pass GitHub data to the `<UserProfiles />` presentation component.

## Routing (Slide 129)

Add the following routes to our sample app:

- Home
- About
- NotFound
- Users
- User (dynamic route)

Create a NavBar component with links to Home, About, Users.

## Context (Slide 147)

Using the `<Search />` component that we built earlier, add the user’s search term into an app-level context in order to show the user the last term they searched for on the `<Users />` page (even when they navigate away and go back).

## Testing (Slide 169)

Write tests for the `<Search />` component to check:

- If it triggers its callback when the search button is clicked.
- If it triggers its callback with the same value entered in the text box.
