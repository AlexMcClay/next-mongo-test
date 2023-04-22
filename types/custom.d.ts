declare namespace NodeJS {
  export interface ProcessEnv {
    // Define the types of your environment variables here
    // For example:
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    TWITTER_CLIENT_ID: string;
    TWITTER_CLIENT_SECRET: string;
    NEXTAUTH_SECRET: string;
    // Add more environment variables as needed
  }
}
