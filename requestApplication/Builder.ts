abstract class BasicRequest {
  request: { [attr: string]: any };
  constructor() {
    this.request = {
      method: "post",
      url: "",
      headers: {
        // ---- If you want to change token, replace it instead my after the 'Bearer' ----
        Authorization:
          "Bearer sl.BWWbBg7BUuSaKUo9-qrbzxZTv3FPm8If9rEfLwXwyw6ZTrO94Y90Av5l24NiJDOmsY0s3qYvWDXNc7vkP99eg7xSiozkwVsHQcQEbZpMeTbcQOE-VTXz2-JNM-3cRi8OM4hxmfoR",
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
