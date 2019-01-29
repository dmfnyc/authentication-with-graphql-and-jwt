import Session from './Session';

const sessionMiddleware = (request, response, next) => {
  request.session = new Session(request, response);
  next();
};

export default sessionMiddleware;
