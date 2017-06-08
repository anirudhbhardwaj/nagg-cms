function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define("MONGO_DB_PATH", "mongodb://localhost:27017");
define("DB_NAME", "nagarro");
define("URL_DELIMITER", "/");
define("DB_USER", "");
define("DB_PASSWORD", "");