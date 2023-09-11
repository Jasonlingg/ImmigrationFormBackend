const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db'); // Import your db.js file
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/submitForm', async (req, res) => {
  const formData = req.body;
  // Insert the formData into the database
  try {
    const result = await db.none(
      'INSERT INTO immigration_data (alien_registration_number, country_of_birth, region_of_birth, country_of_citizenship, are_you_in_us, date_of_last_arrival, i94_arrival_departure_record_number, passport_or_travel_document_number, date_passport_or_travel_document_issued, date_passport_or_travel_document_expires, passport_or_travel_document_country_of_issuance, current_nonimmigrant_status, date_status_expires, sevis_number, ead_number, street_number_us, number_us, city_or_town_us, state_us, zipcode_us, office_address, processing_info_type, processing_info_office_address, processing_info_state_or_country, foreign_address_street_number, foreign_address_number, foreign_address_city_or_town, foreign_address_state, foreign_address_province, foreign_address_postal_code, foreign_address_country, valid_passport) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32)',
      [
        formData.alienRegistrationNumber,
        formData.countryOfBirth,
        formData.regionOfBirth,
        formData.countryOfCitizenship,
        formData.areYouInUS,
        formData.dateOfLastArrival,
        formData.i94ArrivalDepartureRecordNumber,
        formData.passportOrTravelDocumentNumber,
        formData.datePassportOrTravelDocumentIssued,
        formData.datePassportOrTravelDocumentExpires,
        formData.passportOrTravelDocumentCountryOfIssuance,
        formData.currentNonimmigrantStatus,
        formData.dateStatusExpires,
        formData.sevisNumber,
        formData.eadNumber,
        formData.StreetNumberUS,
        formData.NumberUS,
        formData.CityorTownUS,
        formData.stateUS,
        formData.zipcodeUS,
        formData.OfficeAddress,
        formData.processingInfoType,
        formData.processingInfoOfficeAddress,
        formData.processingInfoStateOrCountry,
        formData.foreignAddressStreetNumber,
        formData.foreignAddressNumber,
        formData.foreignAddressCityOrTown,
        formData.foreignAddressState,
        formData.foreignAddressProvince,
        formData.foreignAddressPostalCode,
        formData.foreignAddressCountry,
        formData.validPassport,
      ]
    );
    console.log('Form data inserted successfully:', result);
    res.json({ message: 'Form data received and inserted successfully' });
  } catch (error) {
    console.error('Error inserting form data:', error);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});