namespace SecurityService
{
    using IdentityServer4;
    using IdentityServer4.Models;
    using System.Collections.Generic;

    public class Config
    {
        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource>
            {
                new ApiResource("resourcesScope", "My API")
                {
                    UserClaims = { "role", "admin", "user", "resourcesScope", "resources.user", "resources.admin" }
                },
                new ApiResource("anotherScope", "My API")
                {
                    UserClaims =  { "role", "user", "anotherScope", "resources.user" }
                }
            };

        }

        public static List<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(), // <-- usefull
                new IdentityResources.Email()
            };
        }

        public static IEnumerable<Client> GetClients()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientId = "postmanClient",
                    AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,
                    AccessTokenType = AccessTokenType.Jwt,
                    AllowAccessTokensViaBrowser = true,
                    AllowOfflineAccess = true,
                    AlwaysSendClientClaims = true,
                    RequireClientSecret = false,
                    AllowedScopes = {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        IdentityServerConstants.StandardScopes.Email,
                        IdentityServerConstants.StandardScopes.OfflineAccess,
                        "roles",
                        "resourcesScope",
                        "anotherScope"
                    }
                }
            };
        }
    }
}
