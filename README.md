# Weather React App

A small React weather application that lets users look up current weather conditions for any city. The app uses the OpenWeather API and displays the location, temperature, pressure, and sunset time.

This project was originally created as a React learning project and has been refreshed so it can still run on modern Node.js versions.

## Features

- Search current weather by city name
- Display temperature in Celsius
- Display atmospheric pressure
- Display sunset time
- Gracefully handle invalid city names, missing API keys, and API errors
- Keep API credentials out of source control through environment variables

## Tech Stack

- React 16
- Create React App / `react-scripts`
- Bootstrap 4
- OpenWeather Current Weather API

## Getting Started

### Prerequisites

- Node.js
- npm
- An OpenWeather API key

You can create an API key from your OpenWeather account:

https://home.openweathermap.org/api_keys

### Installation

Install dependencies:

```bash
npm install --legacy-peer-deps
```

This project uses an older Create React App dependency tree, so `--legacy-peer-deps` is recommended with modern npm versions.

### Environment Variables

Create a `.env` file in the project root:

```env
REACT_APP_OPENWEATHER_API_KEY=your_openweather_api_key_here
```

The `.env` file is ignored by Git and should not be committed.

If you change `.env`, restart the development server so Create React App can reload the environment variables.

### Running Locally

Start the development server:

```bash
npm start
```

Open:

```text
http://localhost:3000
```

### Build

Create a production build:

```bash
npm run build
```

### Test

Run tests once:

```bash
npm test -- --watchAll=false
```

## Notes

The app uses `NODE_OPTIONS=--openssl-legacy-provider` in npm scripts to support the older webpack version bundled with `react-scripts@3.1.1` on modern Node.js releases.

For a larger modernization pass, the next step would be upgrading React and replacing the old Create React App toolchain.
