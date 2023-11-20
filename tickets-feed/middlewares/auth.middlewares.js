const debug = require("debug")("app:auth-middleware");
const {verifyToken} = require("../utils/jwt.tools");
const User = require("../models/user.model");

const ROLES = require("../data/roles.constant.json");

const middlewares = {};
const PREFIX = "Bearer";

middlewares.authentication = async (req, res, next) => {
    try {
        debug("User authentication");

        //authorization verification
        const { authorization } = req.headers;

        if(!authorization) {
            return res.status(401).json({ error: "User not authenticated"});
        }

        //Token verification
        const [prefix, token] = authorization.split(" ");
        
        if(prefix !== PREFIX) {
            return res.status(401).json({ error: "User not authenticated"});
        }

        if(!token){
            return res.status(401).json({ error: "User not authenticated"});
        }

        const payload = await verifyToken(token);
        if(!payload) {
            return res.status(401).json({ error: "User not authenticated"});
        }


        //User verification
        const userId = payload["sub"];
        const user = await User.findById(userId);

        if(!user) {
            return res.status(401).json({ error: "User not authenticated"});
        }

        // Compare with the tokens in storage
        const isTokenValid = user.tokens.includes(token);
        if(!isTokenValid) {
            return res.status(401).json({ error: "User not authenticated"});
        }

        req.user = user;
        req.token = token;


        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error"})
    }
}

middlewares.authorization = (roleRequire = ROLES.SYSADMIN) => {
    return (req, res, next) => {
        try {
            const { roles=[] } = req.user;

            const isAuth = roles.include(roleRequire);
            const isSysadmin = roles.include(ROLES.SYSADMIN);

            if(!isAuth && !isSysadmin) {
                return res.status(403).json({error: "Forbidden"});
            }



            next();
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error"})
        }
    }
}

module.exports = middlewares;