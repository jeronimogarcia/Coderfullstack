import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import jwt from 'passport-jwt';

// Estrategia JWT
const JWTStrategy = jwt.Strategy;
const JWTExtractor = jwt.ExtractJwt;

const cookieExtractor = (req: Request) => {
  if (req && req.cookies) {
    // hay cookies
    return req.cookies['coder_login_token'];
  }

  return null;
};

const jwtData = {
  // El token se recupera desde las cookies
  jwtFromRequest: JWTExtractor.fromExtractors([cookieExtractor]),
  secretOrKey: 'abcdefgh12345678', // misma que en app.js
};

const verify = async (jwt_payload: any, done: any) => {
  try {
    return done(null, jwt_payload);
  } catch (err: any) {
    return done(err.message);
  }
};

export const initPassport = () => {
  passport.use('jwtAuth', new JWTStrategy(jwtData, verify));
};

// Middleware de autenticación detallada
// En lugar de llamar directamente a passport.authenticate en el endpoint, llamamos a este
export const authentication = (strategy: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate(strategy, (err: any, user: any, info: any) => {
      if (err) return next(err);
      if (!user) {
        return res.status(401).send({ error: info.messages ? info.messages : info.toString() });
      }
      req.user = user;
      next();
    })(req, res, next);
  };
};
