# SkyCast Weather App

SkyCast is a modern, responsive weather application built with Next.js 14. It allows users to search for weather information by city name, displaying current temperature, weather conditions, and humidity.

## Features

- Real-time weather data from OpenWeatherMap API
- Server-side rendering for improved performance and SEO
- Responsive design using Tailwind CSS
- Image optimization with Next.js Image component
- Environment variable usage for secure API key management

## Screenshots

![SkyCast home page with search bar](/public/screenshots/homepage-screenshot.jpg)
![Weather information display for a searched city](/public/screenshots/weather-info-screenshot.jpg)

## Technologies Used

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Axios for API requests

## Getting Started

### Clone the repository

```bash
git clone https://github.com/AvishkaGihan/skycast.git
```

### Install dependencies

```bash
cd skycast
npm install
```

### Set up environment variables

Create a `.env.local` file in the root directory with the following content:

```env
WEATHER_API_KEY=your_openweathermap_api_key
WEATHER_API_URL=https://api.openweathermap.org/data/2.5
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

The app is ready to be deployed to platforms like Vercel, Netlify, or any other hosting service that supports Next.js applications.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [OpenWeatherMap API Documentation](https://openweathermap.org/api)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
