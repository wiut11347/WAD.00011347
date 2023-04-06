using System.Collections.Generic;
using WAD_00011347.Models;

namespace WAD_00011347.Repository
{
    public interface IBikeCategoryRepository
    {
        void InsertBikeCategory(BikeCategory category);
        void UpdateBikeCategory(BikeCategory category);
        void DeleteBikeCategory(int categoryid);
        BikeCategory GetBikeCategoryById(int Id);
        IEnumerable<BikeCategory> GetGategory();
    }
}
