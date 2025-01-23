const apiKey = "14af028fe2a0fca73fb5e74d964982a0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")



async function checkWeather(city) {
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

	if (response.status == 404) {
		document.querySelector(".error").style.display = "block";
		document.querySelector(".weather").style.display = "none";
	} else {
		var data = await response.json();


		// // Get the current date and time
		// const now = new Date();
		// const options = {
		//     weekday: 'long',
		//     year: 'numeric',
		//     month: 'short',
		//     day: 'numeric',
		//     hour: '2-digit',
		//     minute: '2-digit',
		//     second: '2-digit',
		// 	timeZone: 'Asia/Kolkata',
		//     timeZoneName: 'short'
		// };
		// const formattedDate = now.toLocaleDateString('en-US', options);
		// document.querySelector(".time").innerHTML = formattedDate;


		// function updateDateTime() {
		// 	const now = new Date();

		// 	// Options for formatting the time
		// 	const timeOptions = {
		// 		hour: '2-digit',
		// 		minute: '2-digit',
		// 		second: '2-digit',
		// 		timeZone: 'Asia/Kolkata', // IST Time Zone
		// 		hour12: false // Use 24-hour format
		// 	};

		// 	// Options for formatting the date
		// 	const dateOptions = {
		// 		weekday: 'long',
		// 		year: 'numeric',
		// 		month: 'short',
		// 		day: 'numeric',
		// 		timeZone: 'Asia/Kolkata'
		// 	};

		// 	const formattedTime = now.toLocaleTimeString('en-US', timeOptions);
		// 	const formattedDate = now.toLocaleDateString('en-US', dateOptions);

		// 	// Update the .time element with date and time
		// 	document.querySelector(".time").innerHTML = `${formattedDate} ${formattedTime}`;
		// }

		// // Update date and time immediately
		// updateDateTime();



		// // Update the time every second
		// 	setInterval(() => {
		// 		const now = new Date();

		// 		// Options for formatting the time
		// 		const timeOptions = {
		// 			hour: '2-digit',
		// 			minute: '2-digit',
		// 			second: '2-digit',
		// 			timeZone: 'Asia/Kolkata', // IST Time Zone
		// 			hour12: false // Use 24-hour format
		// 		};

		// 		// Get the current time formatted as HH:MM:SS
		// 		const formattedTime = now.toLocaleTimeString('en-US', timeOptions);

		// 		// Update the .time element with the formatted time
		// 		document.querySelector(".time").innerHTML = formattedTime;
		// 	}, 1000);







		// Update the date and time every second
		setInterval(() => {
			const now = new Date();

			// Options for formatting the date
			const dateOptions = {
				weekday: 'long',
				year: 'numeric',
				month: 'short',
				day: 'numeric',
				timeZone: 'Asia/Kolkata' // IST Time Zone
			};

			// Options for formatting the time
			const timeOptions = {
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				timeZone: 'Asia/Kolkata', // IST Time Zone
				hour12: false // Use 24-hour format
			};

			// Get formatted date and time
			const formattedDate = now.toLocaleDateString('en-US', dateOptions);
			const formattedTime = now.toLocaleTimeString('en-US', timeOptions);

			// Update the .time element with date and time
			document.querySelector(".time").innerHTML = `${formattedDate} ${formattedTime}`;
		}, 1000);




		// console.log(data);

		document.querySelector(".city").innerHTML = data.name;
		document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
		document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
		document.querySelector(".wind").innerHTML = data.wind.speed + " Km/hr";


		if (data.weather[0].main == "Clouds") {
			weatherIcon.src = "Assets/clouds.png";
		} else if (data.weather[0].main == "Clear") {
			weatherIcon.src = "Assets/clear.png";
		} else if (data.weather[0].main == "Rain") {
			weatherIcon.src = "Assets/rain.png";
		} else if (data.weather[0].main == "Drizzle") {
			weatherIcon.src = "Assets/drizzle.png";
		} else if (data.weather[0].main == "Mist") {
			weatherIcon.src = "Assets/mist.png";
		}




		document.querySelector(".weather").style.display = "block";
		document.querySelector(".error").style.display = "none";
	}




}

searchBtn.addEventListener("click", () => {
	checkWeather(searchBox.value);
})
