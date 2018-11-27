const BASE = "http://lenovo-server.local:10081/nasphotos/rest/"

class Config {

    constructor() {
        this.rootFolderId = "Lw__";
        this.base = BASE;
    }

    getRootFolderId() {
        return this.rootFolderId;
    }

    getFolderUrl(folderId) {
        return this.base + "files/" + folderId;
    }
}

export default Config;
