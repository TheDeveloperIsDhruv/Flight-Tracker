const flights=[
    {
      "flightId": "AC101",
      "airline": "Air Canada",
      "origin": { "iata": "YYZ", "city": "Toronto", "country": "Canada" },
      "destination": { "iata": "JFK", "city": "New York", "country": "USA" },
      "departure": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "14:30",
        "actualDate": "2025-08-28",
        "actualTime": "14:45"
      },
      "arrival": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "16:15",
        "estimatedDate": "2025-08-28",
        "estimatedTime": "16:25"
      },
      "status": "Delayed",
      "aircraft": { "model": "Boeing 787", "registration": "C-GHPQ" },
      "live": { "latitude": 43.65, "longitude": -79.38, "altitude": 35000, "speed": 850, "heading": 90 }
    },
    {
      "flightId": "DL404",
      "airline": "Delta Airlines",
      "origin": { "iata": "LAX", "city": "Los Angeles", "country": "USA" },
      "destination": { "iata": "ORD", "city": "Chicago", "country": "USA" },
      "departure": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "10:00",
        "actualDate": "2025-08-28",
        "actualTime": "10:05"
      },
      "arrival": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "14:00",
        "estimatedDate": "2025-08-28",
        "estimatedTime": "13:55"
      },
      "status": "Landed",
      "aircraft": { "model": "Airbus A321", "registration": "N320DN" },
      "live": null
    },
    {
      "flightId": "UA233",
      "airline": "United Airlines",
      "origin": { "iata": "SFO", "city": "San Francisco", "country": "USA" },
      "destination": { "iata": "SEA", "city": "Seattle", "country": "USA" },
      "departure": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "09:15",
        "actualDate": "2025-08-28",
        "actualTime": "09:20"
      },
      "arrival": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "11:20",
        "estimatedDate": "2025-08-28",
        "estimatedTime": "11:25"
      },
      "status": "On Time",
      "aircraft": { "model": "Boeing 737", "registration": "N774UA" },
      "live": { "latitude": 37.62, "longitude": -122.38, "altitude": 32000, "speed": 780, "heading": 15 }
    },
    {
      "flightId": "BA208",
      "airline": "British Airways",
      "origin": { "iata": "LHR", "city": "London", "country": "UK" },
      "destination": { "iata": "BOS", "city": "Boston", "country": "USA" },
      "departure": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "12:00",
        "actualDate": "2025-08-28",
        "actualTime": "12:10"
      },
      "arrival": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "14:45",
        "estimatedDate": "2025-08-28",
        "estimatedTime": "14:55"
      },
      "status": "Boarding",
      "aircraft": { "model": "Airbus A350", "registration": "G-XWBA" },
      "live": null
    },
    {
      "flightId": "LH400",
      "airline": "Lufthansa",
      "origin": { "iata": "FRA", "city": "Frankfurt", "country": "Germany" },
      "destination": { "iata": "JFK", "city": "New York", "country": "USA" },
      "departure": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "13:00",
        "actualDate": "2025-08-28",
        "actualTime": "13:05"
      },
      "arrival": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "16:30",
        "estimatedDate": "2025-08-28",
        "estimatedTime": "16:40"
      },
      "status": "On Time",
      "aircraft": { "model": "Boeing 747", "registration": "D-ABVX" },
      "live": { "latitude": 51.28, "longitude": -0.45, "altitude": 36000, "speed": 890, "heading": 270 }
    },
    {
      "flightId": "EK202",
      "airline": "Emirates",
      "origin": { "iata": "JFK", "city": "New York", "country": "USA" },
      "destination": { "iata": "DXB", "city": "Dubai", "country": "UAE" },
      "departure": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "18:30",
        "actualDate": "2025-08-28",
        "actualTime": "18:40"
      },
      "arrival": {
        "scheduledDate": "2025-08-29",
        "scheduledTime": "14:30",
        "estimatedDate": "2025-08-29",
        "estimatedTime": "14:45"
      },
      "status": "Scheduled",
      "aircraft": { "model": "Airbus A380", "registration": "A6-EVH" },
      "live": null
    },
    {
      "flightId": "AI187",
      "airline": "Air India",
      "origin": { "iata": "DEL", "city": "New Delhi", "country": "India" },
      "destination": { "iata": "YYZ", "city": "Toronto", "country": "Canada" },
      "departure": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "02:30",
        "actualDate": "2025-08-28",
        "actualTime": "02:45"
      },
      "arrival": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "12:15",
        "estimatedDate": "2025-08-28",
        "estimatedTime": "12:30"
      },
      "status": "In Air",
      "aircraft": { "model": "Boeing 777", "registration": "VT-ALR" },
      "live": { "latitude": 60.12, "longitude": -45.34, "altitude": 38000, "speed": 910, "heading": 300 }
    },
    {
      "flightId": "QF12",
      "airline": "Qantas",
      "origin": { "iata": "LAX", "city": "Los Angeles", "country": "USA" },
      "destination": { "iata": "SYD", "city": "Sydney", "country": "Australia" },
      "departure": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "23:00",
        "actualDate": "2025-08-28",
        "actualTime": "23:15"
      },
      "arrival": {
        "scheduledDate": "2025-08-30",
        "scheduledTime": "07:00",
        "estimatedDate": "2025-08-30",
        "estimatedTime": "07:10"
      },
      "status": "Scheduled",
      "aircraft": { "model": "Boeing 787", "registration": "VH-ZND" },
      "live": null
    },
    {
      "flightId": "AF006",
      "airline": "Air France",
      "origin": { "iata": "CDG", "city": "Paris", "country": "France" },
      "destination": { "iata": "JFK", "city": "New York", "country": "USA" },
      "departure": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "15:00",
        "actualDate": "2025-08-28",
        "actualTime": "15:10"
      },
      "arrival": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "17:30",
        "estimatedDate": "2025-08-28",
        "estimatedTime": "17:40"
      },
      "status": "Boarding",
      "aircraft": { "model": "Airbus A380", "registration": "F-HPJE" },
      "live": null
    },
    {
      "flightId": "SQ25",
      "airline": "Singapore Airlines",
      "origin": { "iata": "SIN", "city": "Singapore", "country": "Singapore" },
      "destination": { "iata": "FRA", "city": "Frankfurt", "country": "Germany" },
      "departure": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "20:00",
        "actualDate": "2025-08-28",
        "actualTime": "20:05"
      },
      "arrival": {
        "scheduledDate": "2025-08-29",
        "scheduledTime": "05:30",
        "estimatedDate": "2025-08-29",
        "estimatedTime": "05:40"
      },
      "status": "On Time",
      "aircraft": { "model": "Boeing 777", "registration": "9V-SWI" },
      "live": null
    },
    {
      "flightId": "CX889",
      "airline": "Cathay Pacific",
      "origin": { "iata": "YVR", "city": "Vancouver", "country": "Canada" },
      "destination": { "iata": "HKG", "city": "Hong Kong", "country": "China" },
      "departure": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "13:45",
        "actualDate": "2025-08-28",
        "actualTime": "13:50"
      },
      "arrival": {
        "scheduledDate": "2025-08-29",
        "scheduledTime": "18:00",
        "estimatedDate": "2025-08-29",
        "estimatedTime": "18:15"
      },
      "status": "In Air",
      "aircraft": { "model": "Boeing 777", "registration": "B-KPQ" },
      "live": { "latitude": 55.45, "longitude": -160.23, "altitude": 37000, "speed": 890, "heading": 290 }
    },
    {
      "flightId": "JL10",
      "airline": "Japan Airlines",
      "origin": { "iata": "HND", "city": "Tokyo", "country": "Japan" },
      "destination": { "iata": "ORD", "city": "Chicago", "country": "USA" },
      "departure": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "16:00",
        "actualDate": "2025-08-28",
        "actualTime": "16:05"
      },
      "arrival": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "13:50",
        "estimatedDate": "2025-08-28",
        "estimatedTime": "13:55"
      },
      "status": "Scheduled",
      "aircraft": { "model": "Boeing 787", "registration": "JA837J" },
      "live": null
    },
    {
      "flightId": "AZ610",
      "airline": "ITA Airways",
      "origin": { "iata": "FCO", "city": "Rome", "country": "Italy" },
      "destination": { "iata": "JFK", "city": "New York", "country": "USA" },
      "departure": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "09:30",
        "actualDate": "2025-08-28",
        "actualTime": "09:45"
      },
      "arrival": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "13:00",
        "estimatedDate": "2025-08-28",
        "estimatedTime": "13:05"
      },
      "status": "Delayed",
      "aircraft": { "model": "Airbus A330", "registration": "EI-EJP" },
      "live": null
    },
    {
      "flightId": "AA77",
      "airline": "American Airlines",
      "origin": { "iata": "DFW", "city": "Dallas", "country": "USA" },
      "destination": { "iata": "MIA", "city": "Miami", "country": "USA" },
      "departure": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "11:20",
        "actualDate": "2025-08-28",
        "actualTime": "11:25"
      },
      "arrival": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "14:20",
        "estimatedDate": "2025-08-28",
        "estimatedTime": "14:25"
      },
      "status": "On Time",
      "aircraft": { "model": "Boeing 737", "registration": "N908AA" },
      "live": null
    },
    {
      "flightId": "KE85",
      "airline": "Korean Air",
      "origin": { "iata": "ICN", "city": "Seoul", "country": "South Korea" },
      "destination": { "iata": "JFK", "city": "New York", "country": "USA" },
      "departure": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "10:00",
        "actualDate": "2025-08-28",
        "actualTime": "10:10"
      },
      "arrival": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "11:15",
        "estimatedDate": "2025-08-28",
        "estimatedTime": "11:20"
      },
      "status": "Cancelled",
      "aircraft": { "model": "Boeing 777", "registration": "HL8006" },
      "live": null
    },
    {
      "flightId": "ET500",
      "airline": "Ethiopian Airlines",
      "origin": { "iata": "ADD", "city": "Addis Ababa", "country": "Ethiopia" },
      "destination": { "iata": "LHR", "city": "London", "country": "UK" },
      "departure": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "06:00",
        "actualDate": "2025-08-28",
        "actualTime": "06:10"
      },
      "arrival": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "12:30",
        "estimatedDate": "2025-08-28",
        "estimatedTime": "12:35"
      },
      "status": "On Time",
      "aircraft": { "model": "Boeing 787", "registration": "ET-AUO" },
      "live": null
    },
    {
      "flightId": "TK1",
      "airline": "Turkish Airlines",
      "origin": { "iata": "IST", "city": "Istanbul", "country": "Turkey" },
      "destination": { "iata": "JFK", "city": "New York", "country": "USA" },
      "departure": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "07:10",
        "actualDate": "2025-08-28",
        "actualTime": "07:20"
      },
      "arrival": {
        "scheduledDate": "2025-08-28",
        "scheduledTime": "10:30",
        "estimatedDate": "2025-08-28",
        "estimatedTime": "10:40"
      },
      "status": "Taxiing",
      "aircraft": { "model": "Airbus A330", "registration": "TC-JNL" },
      "live": { "latitude": 40.97, "longitude": 28.82, "altitude": 0, "speed": 20, "heading": 70 }
    }
]

export default flights;