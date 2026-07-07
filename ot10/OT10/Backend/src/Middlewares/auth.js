const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {


    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            erro: 'Token não informado.'
        });
    }
    
    const [, token] = authHeader.split(' ');

    try {

        const decoded = jwt.verify(token, 'segredo');

        req.userId = decoded.id;

        next();

    } catch (error) {

        return res.status(401).json({
            erro: 'Token inválido.'
        });

    }

};