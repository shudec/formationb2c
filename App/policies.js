/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_susi_reset_v2",
        editProfile: "B2C_1_edit_profile_v2"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://stephanehudecssg.b2clogin.com/stephanehudecssg.onmicrosoft.com/B2C_1_signupsigninshc",
        },
        editProfile: {
            authority: "https://stephanehudecssg.b2clogin.com/stephanehudecssg.onmicrosoft.com/B2C_1_signupsigninshc"
        }
    },
    authorityDomain: "https://stephanehudecssg.b2clogin.com"
}