import 'dotenv/config.js'
import '../../config/database.js';
import Country from "../country.js";

let countries = [
    {
        "name": "Aruba"
    },
    {
        "name": "Afghanistan"
    },
    {
        "name": "Angola"
    },
    {
        "name": "Anguilla"
    },
    {
        "name": "Åland Islands"
    },
    {
        "name": "Albania"
    },
    {
        "name": "Andorra"
    },
    {
        "name": "United Arab Emirates"
    },
    {
        "name": "Argentina"
    },
    {
        "name": "Armenia"
    },
    {
        "name": "American Samoa"
    },
    {
        "name": "Antarctica"
    },
    {
        "name": "French Southern and Antarctic Lands"
    },
    {
        "name": "Antigua and Barbuda"
    },
    {
        "name": "Australia"
    },
    {
        "name": "Austria"
    },
    {
        "name": "Azerbaijan"
    },
    {
        "name": "Burundi"
    },
    {
        "name": "Belgium"
    },
    {
        "name": "Benin"
    },
    {
        "name": "Burkina Faso"
    },
    {
        "name": "Bangladesh"
    },
    {
        "name": "Bulgaria"
    },
    {
        "name": "Bahrain"
    },
    {
        "name": "Bahamas"
    },
    {
        "name": "Bosnia and Herzegovina"
    },
    {
        "name": "Saint Barthélemy"
    },
    {
        "name": "Saint Helena, Ascension and Tristan da Cunha"
    },
    {
        "name": "Belarus"
    },
    {
        "name": "Belize"
    },
    {
        "name": "Bermuda"
    },
    {
        "name": "Bolivia"
    },
    {
        "name": "Caribbean Netherlands"
    },
    {
        "name": "Brazil"
    },
    {
        "name": "Barbados"
    },
    {
        "name": "Brunei"
    },
    {
        "name": "Bhutan"
    },
    {
        "name": "Bouvet Island"
    },
    {
        "name": "Botswana"
    },
    {
        "name": "Central African Republic"
    },
    {
        "name": "Canada"
    },
    {
        "name": "Cocos (Keeling) Islands"
    },
    {
        "name": "Switzerland"
    },
    {
        "name": "Chile"
    },
    {
        "name": "China"
    },
    {
        "name": "Ivory Coast"
    },
    {
        "name": "Cameroon"
    },
    {
        "name": "DR Congo"
    },
    {
        "name": "Republic of the Congo"
    },
    {
        "name": "Cook Islands"
    },
    {
        "name": "Colombia"
    },
    {
        "name": "Comoros"
    },
    {
        "name": "Cape Verde"
    },
    {
        "name": "Costa Rica"
    },
    {
        "name": "Cuba"
    },
    {
        "name": "Curaçao"
    },
    {
        "name": "Christmas Island"
    },
    {
        "name": "Cayman Islands"
    },
    {
        "name": "Cyprus"
    },
    {
        "name": "Czechia"
    },
    {
        "name": "Germany"
    },
    {
        "name": "Djibouti"
    },
    {
        "name": "Dominica"
    },
    {
        "name": "Denmark"
    },
    {
        "name": "Dominican Republic"
    },
    {
        "name": "Algeria"
    },
    {
        "name": "Ecuador"
    },
    {
        "name": "Egypt"
    },
    {
        "name": "Eritrea"
    },
    {
        "name": "Western Sahara"
    },
    {
        "name": "Spain"
    },
    {
        "name": "Estonia"
    },
    {
        "name": "Ethiopia"
    },
    {
        "name": "Finland"
    },
    {
        "name": "Fiji"
    },
    {
        "name": "Falkland Islands"
    },
    {
        "name": "France"
    },
    {
        "name": "Faroe Islands"
    },
    {
        "name": "Micronesia"
    },
    {
        "name": "Gabon"
    },
    {
        "name": "United Kingdom"
    },
    {
        "name": "Georgia"
    },
    {
        "name": "Guernsey"
    },
    {
        "name": "Ghana"
    },
    {
        "name": "Gibraltar"
    },
    {
        "name": "Guinea"
    },
    {
        "name": "Guadeloupe"
    },
    {
        "name": "Gambia"
    },
    {
        "name": "Guinea-Bissau"
    },
    {
        "name": "Equatorial Guinea"
    },
    {
        "name": "Greece"
    },
    {
        "name": "Grenada"
    },
    {
        "name": "Greenland"
    },
    {
        "name": "Guatemala"
    },
    {
        "name": "French Guiana"
    },
    {
        "name": "Guam"
    },
    {
        "name": "Guyana"
    },
    {
        "name": "Hong Kong"
    },
    {
        "name": "Heard Island and McDonald Islands"
    },
    {
        "name": "Honduras"
    },
    {
        "name": "Croatia"
    },
    {
        "name": "Haiti"
    },
    {
        "name": "Hungary"
    },
    {
        "name": "Indonesia"
    },
    {
        "name": "Isle of Man"
    },
    {
        "name": "India"
    },
    {
        "name": "British Indian Ocean Territory"
    },
    {
        "name": "Ireland"
    },
    {
        "name": "Iran"
    },
    {
        "name": "Iraq"
    },
    {
        "name": "Iceland"
    },
    {
        "name": "Israel"
    },
    {
        "name": "Italy"
    },
    {
        "name": "Jamaica"
    },
    {
        "name": "Jersey"
    },
    {
        "name": "Jordan"
    },
    {
        "name": "Japan"
    },
    {
        "name": "Kazakhstan"
    },
    {
        "name": "Kenya"
    },
    {
        "name": "Kyrgyzstan"
    },
    {
        "name": "Cambodia"
    },
    {
        "name": "Kiribati"
    },
    {
        "name": "Saint Kitts and Nevis"
    },
    {
        "name": "South Korea"
    },
    {
        "name": "Kosovo"
    },
    {
        "name": "Kuwait"
    },
    {
        "name": "Laos"
    },
    {
        "name": "Lebanon"
    },
    {
        "name": "Liberia"
    },
    {
        "name": "Libya"
    },
    {
        "name": "Saint Lucia"
    },
    {
        "name": "Liechtenstein"
    },
    {
        "name": "Sri Lanka"
    },
    {
        "name": "Lesotho"
    },
    {
        "name": "Lithuania"
    },
    {
        "name": "Luxembourg"
    },
    {
        "name": "Latvia"
    },
    {
        "name": "Macau"
    },
    {
        "name": "Saint Martin"
    },
    {
        "name": "Morocco"
    },
    {
        "name": "Monaco"
    },
    {
        "name": "Moldova"
    },
    {
        "name": "Madagascar"
    },
    {
        "name": "Maldives"
    },
    {
        "name": "Mexico"
    },
    {
        "name": "Marshall Islands"
    },
    {
        "name": "North Macedonia"
    },
    {
        "name": "Mali"
    },
    {
        "name": "Malta"
    },
    {
        "name": "Myanmar"
    },
    {
        "name": "Montenegro"
    },
    {
        "name": "Mongolia"
    },
    {
        "name": "Northern Mariana Islands"
    },
    {
        "name": "Mozambique"
    },
    {
        "name": "Mauritania"
    },
    {
        "name": "Montserrat"
    },
    {
        "name": "Martinique"
    },
    {
        "name": "Mauritius"
    },
    {
        "name": "Malawi"
    },
    {
        "name": "Malaysia"
    },
    {
        "name": "Mayotte"
    },
    {
        "name": "Namibia"
    },
    {
        "name": "New Caledonia"
    },
    {
        "name": "Niger"
    },
    {
        "name": "Norfolk Island"
    },
    {
        "name": "Nigeria"
    },
    {
        "name": "Nicaragua"
    },
    {
        "name": "Niue"
    },
    {
        "name": "Netherlands"
    },
    {
        "name": "Norway"
    },
    {
        "name": "Nepal"
    },
    {
        "name": "Nauru"
    },
    {
        "name": "New Zealand"
    },
    {
        "name": "Oman"
    },
    {
        "name": "Pakistan"
    },
    {
        "name": "Panama"
    },
    {
        "name": "Pitcairn Islands"
    },
    {
        "name": "Peru"
    },
    {
        "name": "Philippines"
    },
    {
        "name": "Palau"
    },
    {
        "name": "Papua New Guinea"
    },
    {
        "name": "Poland"
    },
    {
        "name": "Puerto Rico"
    },
    {
        "name": "North Korea"
    },
    {
        "name": "Portugal"
    },
    {
        "name": "Paraguay"
    },
    {
        "name": "Palestine"
    },
    {
        "name": "French Polynesia"
    },
    {
        "name": "Qatar"
    },
    {
        "name": "Réunion"
    },
    {
        "name": "Romania"
    },
    {
        "name": "Russia"
    },
    {
        "name": "Rwanda"
    },
    {
        "name": "Saudi Arabia"
    },
    {
        "name": "Sudan"
    },
    {
        "name": "Senegal"
    },
    {
        "name": "Singapore"
    },
    {
        "name": "South Georgia"
    },
    {
        "name": "Svalbard and Jan Mayen"
    },
    {
        "name": "Solomon Islands"
    },
    {
        "name": "Sierra Leone"
    },
    {
        "name": "El Salvador"
    },
    {
        "name": "San Marino"
    },
    {
        "name": "Somalia"
    },
    {
        "name": "Saint Pierre and Miquelon"
    },
    {
        "name": "Serbia"
    },
    {
        "name": "South Sudan"
    },
    {
        "name": "São Tomé and Príncipe"
    },
    {
        "name": "Suriname"
    },
    {
        "name": "Slovakia"
    },
    {
        "name": "Slovenia"
    },
    {
        "name": "Sweden"
    },
    {
        "name": "Eswatini"
    },
    {
        "name": "Sint Maarten"
    },
    {
        "name": "Seychelles"
    },
    {
        "name": "Syria"
    },
    {
        "name": "Turks and Caicos Islands"
    },
    {
        "name": "Chad"
    },
    {
        "name": "Togo"
    },
    {
        "name": "Thailand"
    },
    {
        "name": "Tajikistan"
    },
    {
        "name": "Tokelau"
    },
    {
        "name": "Turkmenistan"
    },
    {
        "name": "Timor-Leste"
    },
    {
        "name": "Tonga"
    },
    {
        "name": "Trinidad and Tobago"
    },
    {
        "name": "Tunisia"
    },
    {
        "name": "Turkey"
    },
    {
        "name": "Tuvalu"
    },
    {
        "name": "Taiwan"
    },
    {
        "name": "Tanzania"
    },
    {
        "name": "Uganda"
    },
    {
        "name": "Ukraine"
    },
    {
        "name": "United States Minor Outlying Islands"
    },
    {
        "name": "Uruguay"
    },
    {
        "name": "United States"
    },
    {
        "name": "Uzbekistan"
    },
    {
        "name": "Vatican City"
    },
    {
        "name": "Saint Vincent and the Grenadines"
    },
    {
        "name": "Venezuela"
    },
    {
        "name": "British Virgin Islands"
    },
    {
        "name": "United States Virgin Islands"
    },
    {
        "name": "Vietnam"
    },
    {
        "name": "Vanuatu"
    },
    {
        "name": "Wallis and Futuna"
    },
    {
        "name": "Samoa"
    },
    {
        "name": "Yemen"
    },
    {
        "name": "South Africa"
    },
    {
        "name": "Zambia"
    },
    {
        "name": "Zimbabwe"
    }
]

Country.insertMany(countries)