# Harry Potter Explorer

A simple web application for exploring Harry Potter characters, Hogwarts houses, and spells using the HP API.

## Features

* Browse Harry Potter characters
* Search characters by name or actor
* Filter characters by category and Hogwarts house
* View character details
* Search spells
* Load more characters and spells
* Loading, error, empty, and not-found states

## Tech Stack

* Next.js
* TypeScript
* Tailwind CSS
* HP API

## Setup

1. Clone the repository.
2. Navigate to the project folder: cd <project-folder>
3. Install dependencies: npm install
4. Run the development server: npm run dev
5. Open `http://localhost:3000` in your browser.

## Decisions & Trade-offs

I kept the website UI simple and focused on usability and readability. I separated the application into smaller components and kept the page components as Server Components where possible. This allows Next.js to handle server-side rendering and metadata effectively, while interactive features such as search, filtering, and Load More are handled in separate Client Components.

I separated the types and service logic from the UI components to keep the project organized and make the code easier to maintain. API requests are also handled in service files rather than directly inside the UI components.

Loading, error, and empty states were added to provide clear feedback for different situations: while data is being fetched, when a request fails, and when a search or filter returns no results.

The API service is configured to fetch fresh data on every request to ensure users always see the most up-to-date information. The trade-off is higher server and API activity compared to using cached responses, but it eliminates the risk of displaying stale data.

With more time, I would make further improvements to the UI and user experience based on user feedback.