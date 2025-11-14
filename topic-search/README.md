TOTLE – Round 1 Coding Submission

TopicSearch Component (React + Vite + TailwindCSS)
This repository contains the solution of the task to build a TopicSearch React component that simulates a simplified version of TOTLE’s Topic Browsing UI used in the Catalogue Management System.
The component allows users to search and filter topics in real-time, displays clean topic cards, and handles empty states gracefully. The project follows a modern, modular folder structure to ensure clarity, maintainability, and industry best practices.

📌 Project Overview

The TopicSearch component enables:

-> Live search filtering on topic names (case-insensitive)

-> Rendering of topic cards with name and category

-> A clean UI using TailwindCSS utility classes

-> Friendly handling of empty inputs and no-match states

-> Use of an in-memory topic dataset with minimum five entries

🚀 Tech Stack

React - Component based UI
Vite - Used for fast bundler & development environment
TailwindCSS - For Inline/ Utility-first styling

📂 Folder Structure
    totle-topic-search/
    │
    ├── public/
    │
    ├── src/
    │   ├── components/
    │   │   └── TopicSearch.jsx
    │   │
    │   ├── data/
    │   │   └── topics.js
    │   │
    │   ├── styles/
    │   │   └── index.css
    │   │
    │   ├── App.jsx
    │   └── main.jsx
    │
    ├── .gitignore
    ├── eslient.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── vite.config.js

🧩 How It Works
Users type into a search input field.

-> The component filters against the topic name using case-insensitive comparison.

-> Matches are displayed as topic cards showing the topic name and category.

-> When no topic matches the search, a “No topics found” message is shown.

-> An optional feature “Clear” control  that resets the search input.

▶️ Setup Instructions

Step1:- git clone <repo-link>
        cd totle-topic-search

Step2:- Install dependencies

-> npm install node_modules
-> npm install tailwindcss @tailwindcss/vite

-> Add '@tailwindcss/vite' plugin to your Vite configuration

-> Add an @import to your CSS file that imports Tailwind CSS.

Step3:- npm run dev

Now you can access the app in the browser at the URL shown in your terminal.

🎥 Video Explanation

A video explaining the code structure, workflow, and component behavior is included in the repository.

Video Link: <https://drive.google.com/file/d/1ejyvL-FtbI8r8s7NLHNfKNBNa0UWjd1j/view?usp=sharing>

🔗 Repository Link

This project is available on GitHub as required:

GitHub Repository: <add-repo-link-here>

✔ Submission Requirements Covered

-> React component with search and topic cards

-> Case-insensitive filtering

-> Tailwind-based clean UI

-> Graceful empty input handling

-> Folder structure + source code

-> README with setup instructions

-> Video explanation included

-> GitHub link included