import City from '../models/City.js'

const citiesController={
    getAllCities: async (req, res, next)=>{
        const cities = await City.find({})
        res.json({   
            cities,         
            success:true,
            error:null
        })
    }, 
    getOneCity: async (req, res,next)=>{
        const cities = await City.find(cities => cities.name == name)
        const { name } = req.params
        res.json({
            cities,
            success:true,
            error:null
        })
    }, 
    createOneCity:(req, res,next)=>{
        const newCity = new City()
        
        try{
            City.create(req.body)
        }catch(error){
            console.log(error) 
        }
        res.json({
            response: city,
            success:true,
            error:null
        }) 
    }
     
}

export default citiesController