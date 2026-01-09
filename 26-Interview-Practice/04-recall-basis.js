console.log('Exercise 4: Weather Data Analysis');

/*
Given weather data for multiple cities over a week

Tasks:
1. Find the city with the highest average temperature
2. Get the coldest day across all cities (return city, day, and temperature)
3. Count how many days each city had temperature above 25°C
4. Create an object grouping cities by their climate type
5. Find which day of the week was the hottest overall (average across all cities)
6. Filter cities that had temperature variation > 10°C (max - min)
*/

const weatherData = [
    {
        city: "Phoenix",
        climateType: "desert",
        temperatures: [
            { day: "Monday", temp: 32 },
            { day: "Tuesday", temp: 34 },
            { day: "Wednesday", temp: 31 },
            { day: "Thursday", temp: 35 },
            { day: "Friday", temp: 33 }
        ]
    },
    {
        city: "Seattle",
        climateType: "temperate",
        temperatures: [
            { day: "Monday", temp: 18 },
            { day: "Tuesday", temp: 19 },
            { day: "Wednesday", temp: 17 },
            { day: "Thursday", temp: 20 },
            { day: "Friday", temp: 18 }
        ]
    },
    {
        city: "Miami",
        climateType: "tropical",
        temperatures: [
            { day: "Monday", temp: 28 },
            { day: "Tuesday", temp: 29 },
            { day: "Wednesday", temp: 27 },
            { day: "Thursday", temp: 30 },
            { day: "Friday", temp: 28 }
        ]
    },
    {
        city: "Denver",
        climateType: "continental",
        temperatures: [
            { day: "Monday", temp: 22 },
            { day: "Tuesday", temp: 15 },
            { day: "Wednesday", temp: 18 },
            { day: "Thursday", temp: 20 },
            { day: "Friday", temp: 25 }
        ]
    }
];

// YOUR CODE HERE