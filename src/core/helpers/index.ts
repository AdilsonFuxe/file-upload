import env from "../../config/env";

export const generateUri = (key: String): string => `${env.server_url}/${key}`