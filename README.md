
# Travel App

The Travel App is a Web site designed in React JS to help users plan their trips and make the most of their travels. With a simple and intuitive interface, the app allows users to search hotels

# For Admins
- Go to the route https://travel-app-pink-gamma.vercel.app/777

## Requirements

Getting Started
To run the Travel App locally, follow these steps:

Clone the repository to your local machine:
  
```bash
git clone https://github.com/your-username/travel-app.git
```
##Install the dependencies:
```
npm run install
```
And then
```
npm run start
```
Open http://localhost:3000 in your browser to view the app.

The Travel App was created with React.js 18 and Styled Components. If you encounter any issues, please refer to the React.js documentation and the Styled Components documentation.

To build the app for production, run:

We recommend that you use a modern web browser to ensure the best user experience.

## Usage

The Travel App allows users to search for hotels by entering their desired check-in date, check-out date, and country. Here's how to use the search feature:

On the homepage, you'll see a search bar with input fields for the check-in date, check-out date, and country.
![image](https://user-images.githubusercontent.com/68037012/227958358-a4687767-f71f-4183-9bce-877acbd4f40e.png)

- Select the country you want to search for hotels in from the dropdown menu.

- Enter the check-in date and check-out date in the corresponding input fields. You can either type in the dates or use the date picker that appears when you click on  the input field.

Click the "Search" button to submit your search.
![image](https://user-images.githubusercontent.com/68037012/227960152-0fa52cb8-6ebd-407e-be06-ef811afb4c36.png)

You'll be taken to a results page that displays a list of hotels that match your search criteria. Each hotel card displays the hotel's name, location, price, and a photo.
![image](https://user-images.githubusercontent.com/68037012/227960729-dd4264ec-bb12-4041-a2f8-f31a5bfd8eb8.png)

To view more details about a hotel, click on the "Hotel" button on the hotel card. This will take you to a detailed view of the hotel, where you can see more photos, read reviews, and book your stay.
![image](https://user-images.githubusercontent.com/68037012/227962419-ecb0db2f-fcf6-404d-826b-c1d196df018f.png)


That's it! With the Travel App's search feature, you can easily find and book hotels for your next trip.

- The you could to do the reservation
![image](https://user-images.githubusercontent.com/68037012/227963061-2e33a7da-54ee-43cf-925a-8512932c310b.png)

When you click on "Reservar" you will receive an email in your inbox 

# AdminDashboard
Open the route (https://travel-app-pink-gamma.vercel.app/777/) in your browser to view the app.

![image](https://user-images.githubusercontent.com/68037012/227964752-15531c7b-8c8f-4820-9c33-69e88930c1bb.png)

- In the route (https://travel-app-pink-gamma.vercel.app/777/)  you have the main cards about the new hotels

![image](https://user-images.githubusercontent.com/68037012/227964862-6b9a1a6d-72e5-4192-b049-12555d10a329.png)

- In the route (https://travel-app-pink-gamma.vercel.app/777/reservations)  you have the main cards about the reservations

![image](https://user-images.githubusercontent.com/68037012/227965992-61caa212-cd22-4503-beeb-b26c036be43b.png)

## Features
- API https://rapidapi.com/tipsters/api/priceline-com-provider

# Country Selection
The Travel App allows users to search for hotels by selecting a country from a dropdown menu. When the user selects a country, the app generates a unique ID for that location using the Priceline.com Provider API's ```/v1/hotels/locations``` endpoint. This ID is then used to generate the list of hotels available in that location.

# Hotel Search
Once the user selects a country, the Travel App uses the generated ID to search for hotels using the Priceline.com Provider API's 
```/v1/hotels/search``` 
endpoint. The app sends a GET request to the API with the generated ID, along with any additional search parameters (such as check-in date and check-out date) entered by the user.

The API returns a list of hotels that match the search criteria, which the app displays on the results page. Each hotel card displays the hotel's name, location, price, and a photo.


## Author

- [@juanpabedoyav](https://github.com/juanpabedoyav)

