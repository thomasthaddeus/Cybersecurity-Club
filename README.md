# Cybersecurity Club Website

## Overview

This project is a web application for a cybersecurity club, providing information about the club, upcoming events, resources, and membership details. The application is built using React and styled with CSS, with interactive components and a dynamic workflow visualization.

## Features

- **Home Page**: Introduction to the club and its mission.
- **About Us Page**: Information about the club's goals and team.
- **Events Page**: List of upcoming events with dates, times, and venues.
- **Resources Page**: Comprehensive list of cybersecurity topics and resources.
- **Join Us Page**: Membership form for new members.
- **Contact Page**: Contact information and a form to send messages.
- **Sidebar**: Hidden sidebar that pops out on hover.
- **Footer**: Persistent footer with contact details.
- **Workflow Visualization**: Advanced visualization showing the website's structure and status of components.
- **Search Bar**: A search functionality to find relevant information quickly.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/cybersecurity-club-website.git
    cd cybersecurity-club-website
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the development server**:

    ```bash
    npm start
    ```

The application will be available at `http://localhost:3000`.

## Usage

- Navigate to different pages using the sidebar menu.
- View club information, upcoming events, resources, and contact details.
- Use the membership form to join the club.
- Send messages through the contact form.
- Use the search bar to find specific information.

## Configuration

The visualization is configured using a JSON file. Here is an example configuration file (`config.json`):

```json
{
  "plotConfig": {
    "title": {
      "text": "Website Workflow",
      "font": {
        "family": "Arial, sans-serif",
        "size": 24,
        "color": "#333333"
      }
    },
    "xaxis": {
      "showgrid": false,
      "zeroline": false,
      "showticklabels": false
    },
    "yaxis": {
      "showgrid": false,
      "zeroline": false,
      "showticklabels": false
    },
    "plot_bgcolor": "white",
    "margin": {
      "l": 40,
      "r": 40,
      "t": 60,
      "b": 40
    }
  },
  "nodeConfig": {
    "size": 20,
    "colors": {
      "Built": "green",
      "In Progress": "orange",
      "Future Work": "red"
    },
    "textposition": "top center",
    "hoverinfo": "text",
    "font": {
      "family": "Arial, sans-serif",
      "size": 14,
      "color": "#000000"
    }
  },
  "lineConfig": {
    "width": 2,
    "color": "black",
    "hoverinfo": "none"
  }
}
```

## File Structure

```
my-cybersecurity-club/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── Sidebar.js
│   │   ├── Sidebar.css
│   │   ├── Footer.js
│   │   ├── Footer.css
│   │   ├── Menu.js
│   │   ├── Menu.css
│   │   ├── Home.js
│   │   ├── AboutUs.js
│   │   ├── Events.js
│   │   ├── Resources.js
│   │   ├── JoinUs.js
│   │   ├── Contact.js
│   │   ├── Resources.css
│   │   ├── JoinUs.css
│   │   ├── Contact.css
│   │   ├── AboutUs.css
│   │   ├── Events.css
│   │   ├── SearchBar.js
│   │   ├── SearchBar.css
│   │   └── ...
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── config.json
│   ├── generate-sitemap.js
│   └── ...
│
└── package.json
```

## Future Work

- **Future Component 1**: Placeholder for future component.
- **Future Component 2**: Currently in progress.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
