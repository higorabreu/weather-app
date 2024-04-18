# Weather App

## Overview

This Weather App is a web application developed to provide users with real-time weather information based on their location input. Users can search for a city, and the app fetches data from the OpenWeatherMap API to display current weather conditions, including temperature, description, and humidity.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Axios

## Features

- Real-time weather information display
- Search for weather by city
- Responsive design
- Localization of weather description
- Integration with OpenWeatherMap API

## Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/higorabreu/weather-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and go to http://localhost:{PORT} to view the app.

## API Configuration

The Weather App relies on the OpenWeatherMap API to function properly. Make sure to obtain an API key from OpenWeatherMap and configure it in the `src/util/apiKey.ts` file as `export const weather_api_key = "your_key";`. You can sign up for a free API key [here](https://openweathermap.org/api).
