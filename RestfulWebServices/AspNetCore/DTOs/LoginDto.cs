namespace AspNetCore.DTOs
{
  using System.ComponentModel.DataAnnotations;

  public class LoginDto
  {
    [Required]
    [DataType(DataType.EmailAddress)]
    public string Username { get; set; }

    [Required]
    [DataType(DataType.Password)]
    public string Password { get; set; }

    [Display(Name = "Remember me?")]
    public bool RememberMe { get; set; }
  }
}
