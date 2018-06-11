namespace AspNetCore.QueryParameters
{
    using System;
    using System.Linq;

    public class CustomerQueryParameters
    {
        private const int maxPageCount = 100;

        public int Page { get; set; } = 1;

        private int _pageCount = 100;

        public int PageCount
        {
            get { return _pageCount;  }
            set { _pageCount = (value > maxPageCount) ? maxPageCount : value; }
        }

        public bool HasQuery { get { return !String.IsNullOrEmpty(this.Query); } }

        public string Query { get; set; }

        public string OrderBy { get; set; } = "FirstName";

        public bool Descending
        {
            get
            {
                if (!String.IsNullOrEmpty(OrderBy))
                {
                    return OrderBy.Split(' ').Last().ToLowerInvariant().StartsWith("desc")
                };
                return false;
            }
        }
    }
}
