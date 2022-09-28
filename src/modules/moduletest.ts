"use strict";

export class Datatest {
  public start() {
    return "Hello";
  }
  public sendEmail(email: string): any {
		console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
		// return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return {
        message: "OK",
        isSend: true,
      };
    } else {
			return {
				message: "You have entered an invalid email address!",
				isSend: false,
			};
    }
  }
}
