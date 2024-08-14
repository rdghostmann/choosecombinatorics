import authenticate from "../middleware/authenticate";

export default function handler(req, res) {
    if(req.method !== 'GET'){
        res.status(405).send('Method Not Allowed');
        return;
    }
    authenticate(req, res, ()=> {
        res.status(200).send({message:'You are an authorised to access this resource.'});
    });
}