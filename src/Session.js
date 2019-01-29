export default class Session {
  constructor(request, response) {
    this.request = request;
    this.response = response;
  }

  update(user) {
    if (!user) {
      return;
    }

    const cookieOptions = {
      httpOnly: true,
      // use secure flag in production to send only via encrypted connections
      // secure: true,
    };
    this.response.cookie('sessionToken', user.id, cookieOptions);
  }
}
