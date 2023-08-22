import City from '../models/City.js'

const citiesController={
    // get all 
    getAllCities: async (req, res, next)=>{
        try{ 
        const cities = await City.find()
        res.json({   
            cities,         
            success:true,
            error:null
        })
    } catch(error){console.log(error)}
    }, 
    //get one 
    getOneCity: async (req, res,next)=>{
        const id = req.params.id
        try{
        const city = await City.findById(id)
            res.json({
            city,
            success:true,
            error:null
        })
        }catch(error){console.log(error)}
    }, 
    //create 
    createOneCity:async (req, res,next)=>{      
        try{
            const {
                name,
                image,
                country,
                description,
                coin
            } = req.body;
            const city = new City({name, image, country, description, coin});
            await city.save();
            res.json({
                city,
                success:true,
                error:null
            })
        }catch(error){
            console.log(error) 
        }
        res.json({
            response: city,
            success:true,
            error:null
        }) 
    },
    // update 
    updateOneCity:async (req, res,next)=>{   
        const {id} =req.params
        try{
            let city = await City.findOneAndUpdate({_id: id}, req.body, {new:true} ) 
            res.json({   
                city,         
                success:true,
                error:null
            })
        }catch(error){
            console.log(error) 
        }
        
        

    },

    // delete 
    deleteOneCity:async (req, res,next)=>{   
        const {id} =req.params
        try{
            let city = await City.findOneAndDelete({_id: id}, {new:true} ) 
            res.json({   
                city,         
                success:true,
                error:null
            })
        }catch(error){
            console.log(error) 
        }      

    }
      
}


export default citiesController