import convict from "convict";

export const config = convict({
    port: {
        doc: "The port for the auth-service",
        format: "port",
        default: 8000,
        env: "PORT"
    }
})