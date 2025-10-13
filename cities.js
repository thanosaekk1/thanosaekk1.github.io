const cities = [
    {
        city_name: "Amsterdam",
        X: 4.894,
        Y: 52.373,
        full_name: "Amsterdam",
        country: "Netherlands",
        variants: 2,
        sources: ["https://www.youtube.com/watch?v=EtxCpMzu1GY", "https://www.youtube.com/watch?v=EtxCpMzu1GY"]
    },
    {
        city_name: "Athens",
        X: 23.728,
        Y: 37.984,
        full_name: "Athens",
        country: "Greece",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Bangkok",
        X: 100.494,
        Y: 13.752,
        full_name: "Bangkok",
        country: "Thailand",
        variants: 2,
        sources: ["https://www.youtube.com/watch?v=DxP8fc2XYb4", "https://www.youtube.com/watch?v=V8e78zOVdTs"]
    },
    {
        city_name: "Barcelona",
        X: 2.183,
        Y: 41.383,
        full_name: "Barcelona",
        country: "Spain",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Beijing",
        X: 116.397,
        Y: 39.907,
        full_name: "Beijing",
        country: "China",
        variants: 1,
        sources: ["https://www.youtube.com/watch?v=NEsBfm7HeJo"]
    },
    {
        city_name: "Belgrade",
        X: 20.457,
        Y: 44.818,
        full_name: "Belgrade",
        country: "Serbia",
        variants: 1,
        sources: ["https://www.youtube.com/watch?v=WmKNcI4atpA"]
    },
    {
        city_name: "Bengaluru",
        X: 77.592,
        Y: 12.979,
        full_name: "Bengaluru",
        country: "India",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Berlin",
        X: 13.405,
        Y: 52.520,
        full_name: "Berlin",
        country: "Germany",
        variants: 1,
        sources: ["https://www.youtube.com/watch?v=CTxS_DNSyqg"]
    },
    {
        city_name: "Buenos_Aires",
        X: -58.381,
        Y: -34.604,
        full_name: "Buenos Aires",
        country: "Argentina",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Cairo",
        X: 31.236,
        Y: 30.044,
        full_name: "Cairo",
        country: "Egypt",
        variants: 3,
        sources: ["https://www.google.com", "https://www.youtube.com/watch?v=0Ybmp6_XUH0", "https://www.youtube.com/watch?v=0Ybmp6_XUH0"]
    },
    {
        city_name: "Cap_Haitien",
        X: -72.200,
        Y: 19.760,
        full_name: "Cap-Haïtien",
        country: "Haiti",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Cape_Town",
        X: 18.424,
        Y: -33.925,
        full_name: "Cape Town",
        country: "South Africa",
        variants: 2,
        sources: ["https://www.youtube.com/watch?v=BSxV9nUfDAU", "https://www.youtube.com/watch?v=BSxV9nUfDAU"]
    },
    {
        city_name: "Damascus",
        X: 36.309,
        Y: 33.513,
        full_name: "Damascus",
        country: "Syria",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Dhaka",
        X: 90.415,
        Y: 23.804,
        full_name: "Dhaka",
        country: "Bangladesh",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Edinburgh",
        X: -3.183,
        Y: 55.950,
        full_name: "Edinburgh",
        country: "United Kingdom",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Geneva",
        X: 6.147,
        Y: 46.202,
        full_name: "Geneva",
        country: "Switzerland",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Havana",
        X: -82.359,
        Y: 23.137,
        full_name: "Havana",
        country: "Cuba",
        variants: 2,
        sources: ["https://www.google.com", "https://www.youtube.com/watch?v=Mwddya2p61g"]
    },
    {
        city_name: "Istanbul",
        X: 28.955,
        Y: 41.014,
        full_name: "Istanbul",
        country: "Turkey",
        variants: 2,
        sources: ["https://www.google.com", "https://www.youtube.com/watch?v=C796Mh7kMM8"]
    },
    {
        city_name: "Kinshasa",
        X: 15.312,
        Y: -4.322,
        full_name: "Kinshasa",
        country: "DR Congo",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Kolkata",
        X: 88.370,
        Y: 22.567,
        full_name: "Kolkata",
        country: "India",
        variants: 1,
        sources: ["https://www.youtube.com/watch?v=twtCciiC8ws"]
    },
    {
        city_name: "Kyiv",
        X: 30.523,
        Y: 50.450,
        full_name: "Kyiv",
        country: "Ukraine",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Lagos",
        X: 3.384,
        Y: 6.455,
        full_name: "Lagos",
        country: "Nigeria",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Lahore",
        X: 74.344,
        Y: 31.550,
        full_name: "Lahore",
        country: "Pakistan",
        variants: 1,
        sources: ["https://www.youtube.com/@ThroughStreetsAndTastes/videos"]
    },
    {
        city_name: "Lisbon",
        X: -9.15,
        Y: 38.725,
        full_name: "Lisbon",
        country: "Portugal",
        variants: 1,
        sources: ["https://www.youtube.com/watch?v=OPRHsvpr0ns"]
    },
    {
        city_name: "London",
        X: -0.127,
        Y: 51.507,
        full_name: "London",
        country: "United Kingdom",
        variants: 2,
        sources: ["https://www.google.com", "https://www.youtube.com/watch?v=roHEkVs3hSE"]
    },
    {
        city_name: "Manila",
        X: 120.977,
        Y: 14.596,
        full_name: "Manila",
        country: "Philippines",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Maputo",
        X: 32.583,
        Y: -25.967,
        full_name: "Maputo",
        country: "Mozambique",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Melbourne",
        X: 144.963,
        Y: -37.814,
        full_name: "Melbourne",
        country: "Australia",
        variants: 1,
        sources: ["https://www.youtube.com/watch?v=TZ5RUp4r2UE"]
    },
    {
        city_name: "Mexico_City",
        X: -99.133,
        Y: 19.433,
        full_name: "Mexico City",
        country: "Mexico",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Miami",
        X: -80.21,
        Y: 25.78,
        full_name: "Miami",
        country: "United States",
        variants: 1,
        sources: ["https://www.youtube.com/watch?v=g19smXIkulk"]
    },
    {
        city_name: "Mombasa",
        X: 39.667,
        Y: -4.05,
        full_name: "Mombasa",
        country: "Kenya",
        variants: 1,
        sources: ["https://www.youtube.com/watch?v=42zx6HjTGzM"]
    },
    {
        city_name: "Mumbai",
        X: 72.877,
        Y: 19.076,
        full_name: "Mumbai",
        country: "India",
        variants: 4,
        sources: ["https://www.google.com", "https://www.youtube.com/watch?v=9dOw1zvAk78", "https://www.youtube.com/watch?v=xDsQCPG9Oog", "https://www.youtube.com/watch?v=xDsQCPG9Oog"]
    },
    {
        city_name: "Munich",
        X: 11.575,
        Y: 48.137,
        full_name: "Munich",
        country: "Germany",
        variants: 2,
        sources: ["https://www.google.com", "https://www.youtube.com/watch?v=mlS89Cd176M"]
    },
    {
        city_name: "Nairobi",
        X: 36.817,
        Y: -1.286,
        full_name: "Nairobi",
        country: "Kenya",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "New_Orleans",
        X: -90.078,
        Y: 29.976,
        full_name: "New Orleans",
        country: "United States",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "New_York",
        X: -74.006,
        Y: 40.713,
        full_name: "New York City",
        country: "United States",
        variants: 2,
        sources: ["https://www.google.com", "https://www.youtube.com/watch?v=eEaYrzhxiBY"]
    },
    {
        city_name: "Oslo",
        X: 10.739,
        Y: 59.913,
        full_name: "Oslo",
        country: "Norway",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Paris",
        X: 2.352,
        Y: 48.857,
        full_name: "Paris",
        country: "France",
        variants: 3,
        sources: ["https://www.google.com", "https://www.youtube.com/watch?v=8QiK8-Jc2Jk", "https://www.youtube.com/watch?v=8QiK8-Jc2Jk"]
    },
    {
        city_name: "Phnom_Penh",
        X: 104.921,
        Y: 11.569,
        full_name: "Phnom Penh",
        country: "Cambodia",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Prague",
        X: 14.421,
        Y: 50.087,
        full_name: "Prague",
        country: "Czech Republic",
        variants: 2,
        sources: ["https://www.youtube.com/watch?v=J7HIfklyF9w", "https://www.youtube.com/watch?v=J7HIfklyF9w"]
    },
    {
        city_name: "Rio_de_Janeiro",
        X: -43.206,
        Y: -22.911,
        full_name: "Rio de Janeiro",
        country: "Brazil",
        variants: 1,
        sources: ["https://www.youtube.com/watch?v=qMp39dBpsv0"]
    },
    {
        city_name: "Riyadh",
        X: 46.717,
        Y: 24.633,
        full_name: "Riyadh",
        country: "Saudi Arabia",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Saint_Petersburg",
        X: 30.309,
        Y: 59.937,
        full_name: "Saint Petersburg",
        country: "Russia",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "San_Francisco",
        X: -122.417,
        Y: 37.783,
        full_name: "San Francisco",
        country: "United States",
        variants: 1,
        sources: ["https://www.youtube.com/watch?v=Yt7wnMg6wqU"]
    },
    {
        city_name: "Santiago",
        X: -70.650,
        Y: -33.437,
        full_name: "Santiago",
        country: "Chile",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Seoul",
        X: 126.983,
        Y: 37.567,
        full_name: "Seoul",
        country: "South Korea",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Shanghai",
        X: 121.475,
        Y: 31.229,
        full_name: "Shanghai",
        country: "China",
        variants: 2,
        sources: ["https://www.google.com", "https://www.youtube.com/watch?v=xH_yLGj2xfw"]
    },
    {
        city_name: "Singapore",
        X: 103.833,
        Y: 1.283,
        full_name: "Singapore",
        country: "Singapore",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Stockholm",
        X: 18.069,
        Y: 59.329,
        full_name: "Stockholm",
        country: "Sweden",
        variants: 1,
        sources: ["https://www.youtube.com/watch?v=Jr9x-RB4E1U"]
    },
    {
        city_name: "Sydney",
        X: 151.200,
        Y: -33.867,
        full_name: "Sydney",
        country: "Australia",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Taipei",
        X: 121.562,
        Y: 25.037,
        full_name: "Taipei",
        country: "Taiwan",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Tangier",
        X: -5.804,
        Y: 35.777,
        full_name: "Tangier",
        country: "Morocco",
        variants: 2,
        sources: ["https://www.youtube.com/watch?v=0WHrCmZg4Pc", "https://www.youtube.com/watch?v=PT8ZmLmog0M"]
    },
    {
        city_name: "Tehran",
        X: 51.390,
        Y: 35.689,
        full_name: "Tehran",
        country: "Iran",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Tokyo",
        X: 139.767,
        Y: 35.683,
        full_name: "Tokyo",
        country: "Japan",
        variants: 3,
        sources: ["https://www.google.com", "https://www.youtube.com/watch?v=82rfdC2F2rE", "https://www.youtube.com/watch?v=82rfdC2F2rE"]
    },
    {
        city_name: "Tunis",
        X: 10.182,
        Y: 36.806,
        full_name: "Tunis",
        country: "Tunisia",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Ulaanbaatar",
        X: 106.915,
        Y: 47.922,
        full_name: "Ulaanbaatar",
        country: "Mongolia",
        variants: 1,
        sources: ["https://www.youtube.com/watch?v=XFo1ONrKH80"]
    },
    {
        city_name: "Vancouver",
        X: -123.11,
        Y: 49.261,
        full_name: "Vancouver",
        country: "Canada",
        variants: 1,
        sources: ["https://www.youtube.com/watch?v=2ttR65ofnK0"]
    },
    {
        city_name: "Venice",
        X: 12.336,
        Y: 45.437,
        full_name: "Venice",
        country: "Italy",
        variants: 2,
        sources: ["https://www.google.com", "https://www.youtube.com/watch?v=pz2WANHkY90"]
    },
    {
        city_name: "Vienna",
        X: 16.372,
        Y: 48.208,
        full_name: "Vienna",
        country: "Austria",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Warsaw",
        X: 21.011,
        Y: 52.230,
        full_name: "Warsaw",
        country: "Poland",
        variants: 3,
        sources: ["https://www.google.com", "https://www.youtube.com/watch?v=UKyT_a-raW4", "https://www.youtube.com/watch?v=UKyT_a-raW4"]
    },
    {
        city_name: "Yangon",
        X: 96.160,
        Y: 16.795,
        full_name: "Yangon",
        country: "Myanmar",
        variants: 1,
        sources: ["https://www.google.com"]
    },
    {
        city_name: "Yerevan",
        X: 44.514,
        Y: 40.181,
        full_name: "Yerevan",
        country: "Armenia",
        variants: 1,
        sources: ["https://www.google.com"]
    }
];