import swaggerJsdoc from "swagger-jsdoc";
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "AntiSocial",
            version: "1.0.0",
            description: "API Documentation",
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        servers: [
            {
                url: "http://localhost:3000/api",
            },
        ],
    },
    apis: ["./src/routes/*.ts"], // lokasi route
};
const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;
//# sourceMappingURL=swagger.js.map