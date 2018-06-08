namespace AspNetCore.Models
{
    public class MyConfiguration
    {
        public string Wholename { get; set; }
        public Address Addresses { get; set; }
    }

    public class Address
    {
        public string Permanent { get; set; }
        public string Temporary { get; set; }
    }
}
