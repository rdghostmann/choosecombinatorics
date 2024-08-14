import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.replace('Bearer', '');
   if (!token) {
    return res.status(401).json({message: 'Unauthorised'});
   }


   try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.username === 'SeqManager'){
        next();
    } else {
        return res.status(401).json({message: 'Unauthorised'});
    }
    
   } catch (error) {
    return res.status(401).json({message: 'Unauthorised'});
}
};

export default authenticate;