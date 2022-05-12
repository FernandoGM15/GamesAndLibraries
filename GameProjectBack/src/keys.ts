const keys = {
    HOST: (process.env.DB_HOST || "127.0.0.1"),
    USER: (process.env.DB_USER || "root"),
    PASSWORD: (process.env.DB_PASSWORD || ""),
    DB: (process.env.DB_NAME || "game_app"),
    PORT: (process.env.DB_PORT || "3306"),
}

export default keys;