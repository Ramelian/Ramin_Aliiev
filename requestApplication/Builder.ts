abstract class BasicRequest {
  request: { [attr: string]: any };
  constructor() {
    this.request = {
      method: "post",
      url: "",
      headers: {
        // ---- If you want to change token, replace it instead my after the 'Bearer' ----
        Authorization:
          "Bearer sl.BWXGWnTOvHfphyrg4wtjGIVoBI5iE9yrwm5HFWEiSIHYNBUV8rq5H6DgYLvocQ0xsFogTbQN0HUbEVKwgfAH9oejyHyx03Th9sBnbpOlV4Kydyti29N9b57AmSM-rLm7fOTXMvlT",
      },
      data: {},
    };
  }
}

export class Upload extends BasicRequest {
  constructor() {
    super();
  }

  setLink(): this {
    this.request.url = "https://content.dropboxapi.com/2/files/upload";
    return this;
  }

  setHeaders(): this {
    this.request.headers["Content-Type"] = "application/octet-stream";
    this.request.headers["Dropbox-API-Arg"] =
      '{"autorename":true,"mode":"add","mute":false,"path":"/Group2.png"}';
    return this;
  }

  setData(): void {
    this.request["data"]["binary"] = "../assets/Group2.png";
  }
}

export class GetFileMetadata extends BasicRequest {
  constructor() {
    super();
  }

  setLink(): this {
    this.request.url = "https://api.dropboxapi.com/2/files/get_metadata";
    return this;
  }

  setHeaders(): this {
    this.request.headers["Content-Type"] = "application/json";
    return this;
  }

  setData(): void {
    this.request.data["path"] = "/Group2.png";
  }
}

export class Delete extends BasicRequest {
  constructor() {
    super();
  }

  setLink(): this {
    this.request.url = "https://api.dropboxapi.com/2/files/delete_v2   ";
    return this;
  }

  setHeaders(): this {
    this.request.headers["Content-Type"] = "application/json";
    return this;
  }

  setData(): void {
    this.request.data["path"] = "/Group2.png";
  }
}
