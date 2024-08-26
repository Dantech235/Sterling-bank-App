import { Configuration, LogLevel } from "@azure/msal-browser";

interface MsalConfig extends Configuration {
  auth: {
    clientId: string;
    authority: string;
    redirectUri: string;
  };
  cache: {
    cacheLocation: "sessionStorage" | "localStorage";
    storeAuthStateInCookie: boolean;
  };
  system: {
    loggerOptions: {
      loggerCallback: (
        level: LogLevel,
        message: string,
        containsPii: boolean
      ) => void;
    };
  };
}

export const msalConfig: MsalConfig = {
  auth: {
    clientId: "8b8b59af-b3fb-4705-a26c-7da84f0a9565",
    authority:
      "https://login.microsoftonline.com/215b7ce2-5263-4593-a622-da030405d151",
    redirectUri: " http://localhost:5173/",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            break;
          case LogLevel.Info:
            console.info(message);
            break;
          case LogLevel.Verbose:
            console.debug(message);
            break;
          case LogLevel.Warning:
            console.warn(message);
            break;
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};

export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
