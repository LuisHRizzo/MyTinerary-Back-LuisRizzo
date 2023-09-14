import Country from '../models/country.js'

const countriesControllers = {
    getAllCountries: async (req, res, next)=> {
        let resCountries;
    
        try {
            resCountries = await Country.find();
    
            res.json({
                success: true,
                response: resCountries
            });
        } catch (err) {
            next(err);
        };
    },
    createAllCountries: async (req, res, next) => {
        let arrayCountries;
    
        try {
            arrayCountries = await Country.insertMany(req.body);
    
            res.json({
                success: true,
                response: arrayCountries
            });
        } catch (err) {
            next(err);
        }
    }
};

export default countriesControllers;



