import connectDB from "../../mongodb/middleWare";
import Records from "../../mongodb/Schema/records";

const handler = async (req, res) => {
  if(req.method=="POST"){
    try {   
        const newRecord= new Records(req.body)
        const recorded = await newRecord.save()
        res.status(200).send({message:"form submited successfully", stat:true})
    } 
    catch (error) {
        res.status(406).send({message:"form not submited", stat:false})
    }
}
else{
  res.status(500).send({message:"Method Not supported", stat:false})
}

}

export default connectDB(handler);