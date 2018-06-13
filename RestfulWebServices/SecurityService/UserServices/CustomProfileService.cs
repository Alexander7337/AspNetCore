namespace SecurityService.UserServices
{
    using System.Collections.Generic;
    using System.Diagnostics;
    using System.Security.Claims;
    using System.Threading.Tasks;
    using IdentityServer4.Extensions;
    using IdentityServer4.Models;
    using IdentityServer4.Services;
    using Microsoft.Extensions.Logging;

    public class CustomProfileService : IProfileService
    {
        protected readonly IUserRepository _userRepository;

        public CustomProfileService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task GetProfileDataAsync(ProfileDataRequestContext context)
        {
            Debug.Write("---> GetProfileDataAsync is launched !");
            var sub = context.Subject.GetSubjectId();

            Debug.Write($"Get profile called for subject {context.Subject.GetSubjectId()} from " +
                $"client {context.Client.ClientName ?? context.Client.ClientId} with claim types {context.RequestedClaimTypes} via {context.Caller}");

            CustomUser user = _userRepository.FindBySubjectId(context.Subject.GetSubjectId());

            var claims = new List<Claim>
            {
                new Claim("role", "resources.user"),
                new Claim("username", user.UserName),
                new Claim("email", user.Email)
            };

            if (user.UserName == "postmanadmin")
            {
                claims.Add(new Claim("role", "resources.admin"));
            }

            context.IssuedClaims = claims;
        }

        public async Task IsActiveAsync(IsActiveContext context)
        {
            Debug.Write("---> IsActiveAsync is launched !");
            var sub = context.Subject.GetSubjectId();
            var user = _userRepository.FindBySubjectId(context.Subject.GetSubjectId());
            context.IsActive = user != null;
        }
    }
}
