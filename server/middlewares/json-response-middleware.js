const jsonResponse = (request, response, next) => {
  response.setHandler('Content-type', 'application/json');
  next();
};

export default jsonResponse; 