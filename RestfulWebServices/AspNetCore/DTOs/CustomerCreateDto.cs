using System.ComponentModel.DataAnnotations;

namespace AspNetCore.DTOs
{
    public class CustomerCreateDto
    {
        [Required(ErrorMessage = "First name could not be null")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "Last name could not be null")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "Age could not be null")]
        [Range(0,100)]
        public int Age { get; set; }
    }
}
