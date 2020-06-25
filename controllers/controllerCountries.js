const express = require('express');
const fs = require('fs');

const countries = fs.readFileSync("./provider/data.json", "utf8");
const countriesParse = JSON.parse(countries);

module.exports = {
	async getCountries(req, res) {
		try {
			await res.status(200).json(countriesParse);
		} catch(error) {
			res.status(500).json({message: error});
		}
	},

	async getOneCountry(req, res) {
		try {
			const filterCountry = countriesParse.filter(filterId => {
				return filterId.id == req.params.id;
			});
			res.status(200).json(filterCountry);
		} catch(error) {
			res.status(500).json({ message:  error});
		}
	}
}