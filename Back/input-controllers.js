const Input = require('./Input')

const getAllInputs = async (req,res,next)=>{
    let inputs;
    try{
        inputs = await Input.find();
    }catch (err){
        console.log(err)
    }

    if(!inputs){
        return res.status(404).json({message:'No inputs were found'})
    } 
    return res.status(200).json({inputs})
}

const addInputs = async (req,res,next)=>{
    let input;
    const {name, email, message} = req.body;
    try{
        input = new Input({
            name,
            email,
            message
        });
    }catch (err){
        console.log(err)
    }

    await input.save()

    if(!input){
        return res.status(500).json({message:'No inputs can be added'})
    } 
    return res.status(200).json({input})
}


exports.getAllInputs = getAllInputs;
exports.addInputs = addInputs;