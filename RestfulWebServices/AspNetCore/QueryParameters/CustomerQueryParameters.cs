namespace AspNetCore.QueryParameters
{
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
    }
}
