using GoldenSoftAPI.DataTransfer.Users;
using GoldenSoftAPI.Models;
using GoldenSoftAPI.Models.InventorySystem;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.Internal;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;

namespace GoldenSoftAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public static User user = new User();
        private readonly IConfiguration _configuration;
        private readonly DataContext _context;

        public AuthController(IConfiguration configuration, DataContext context)
        {
            _configuration = configuration;
            _context = context;
        }
       
        [HttpPost("register")]
        public async Task<ActionResult<User>> Register(RegisterUserDto request)
        {
           
            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);
            var users = new User
            {
                Username = request.Username,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt,
                Role = request.Role
            };

            _context.users.Add(users);
            await _context.SaveChangesAsync();


            return Ok(users);
        }

        [HttpPost("login")]
        public async Task<ActionResult<string>> Login(LoginUserDto request)
        {
            var users = await _context.users.FirstOrDefaultAsync(i => i.Username == request.Username);
            if (users == null)
            {
                return BadRequest("Usuario no encontrado");
            }

            if(!VerifyPasswordHash(request.Password, users.PasswordHash, users.PasswordSalt))
            {
                return BadRequest("Contraseña Incorrecta");
            }
            string token = CreateToken(users);

            var refreshToken = GenerateRefreshToken();
            SetRefreshToken(refreshToken, users);

            var newResponse = new LoginResponseDto
            {
                Token = token,
                Role = users.Role,
            };

            return Ok(newResponse);
        }

        [HttpPost("refresh-token")]
        public async Task<ActionResult<string>> RefreshToken()
        {
            var refreshToken = Request.Cookies["refreshToken"];
            var users = await _context.users.FirstOrDefaultAsync(i => i.RefreshToken == refreshToken);

            if(users == null)
            {
                return Unauthorized("Refresh Token no encontrado");
            } 
            else if(users.TokenExpires < DateTime.Now)
            {
                return Unauthorized("Token Expired");
            }

            string token = CreateToken(users);
            var newRefreshToken = GenerateRefreshToken();
            SetRefreshToken(newRefreshToken, users);
                  
       
            return Ok(token);
        }

        [HttpGet("refresh-token")]
        public async Task<ActionResult<string>> GetRefreshToken()
        {
            var refreshToken = Request.Cookies["refreshToken"];

            return Ok(refreshToken);
        }

        private RefreshToken GenerateRefreshToken()
        {
            var refreshToken = new RefreshToken
            {
                Token = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64)),
                Expires = DateTime.Now.AddDays(7),
                Created = DateTime.Now
            };

            return refreshToken;
        }

        private void SetRefreshToken(RefreshToken newRefreshToken, User user)
        {
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Expires = newRefreshToken.Expires,
            };
            Response.Cookies.Append("refreshToken", newRefreshToken.Token, cookieOptions);

            user.RefreshToken = newRefreshToken.Token;
            user.TokenCreated = newRefreshToken.Created;
            user.TokenExpires = newRefreshToken.Expires;

            _context.SaveChanges();
        }


        private string CreateToken(User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Role, user.Role)

            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                _configuration.GetSection("AppSettings:Token").Value));

            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: cred
                );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512(passwordSalt))
            {
                var computeHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computeHash.SequenceEqual(passwordHash);
            }

        }

    }
}
