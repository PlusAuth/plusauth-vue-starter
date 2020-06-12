import { Log, UserManager } from "oidc-client";
import Constants from "../helpers/constants";

const settings = {
  authority: Constants.authUrl,
  client_id: Constants.clientId,
  redirect_uri: Constants.baseUrl + `signin-callback.html`,
  silent_redirect_uri: Constants.baseUrl + `silent-renew.html`,
  post_logout_redirect_uri: Constants.baseUrl,
  response_type: "code",
  scope: "openid profile",
  automaticSilentRenew: true,
  revokeAccessTokenOnSignout: true,
};

const userManager = new UserManager(settings);
userManager.events.addSilentRenewError(()=>{
  console.log("renew error");
  
})
userManager.events.addAccessTokenExpiring(()=>{
  console.log("expiring");
  
})

Log.logger = console;
Log.level = Log.INFO;

export default userManager;
