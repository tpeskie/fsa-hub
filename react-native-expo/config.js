export default {
    s3: {
        REGION: "us-east-1",
        BUCKET: "dc-concierge-bucket"
    },
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://s3pxbz9b92.execute-api.us-west-2.amazonaws.com/Prod"
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_tFhRE5TRe",
        APP_CLIENT_ID: "1qqt8uh146epjiotlqs27l6ml1",
        IDENTITY_POOL_ID: "us-west-2:cbb675a9-885e-44f1-baa5-4cb0243db6a0"
    }
};