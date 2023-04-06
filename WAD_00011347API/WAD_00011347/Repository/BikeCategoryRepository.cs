using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using WAD_00011347.Context;
using WAD_00011347.Models;
using WAD_00011347.Repository;

namespace WAD_00011347.Repository
{
    public class BikeCategoryRepository:IBikeCategoryRepository
    {
        private readonly BikeContext _dbContext;
        public BikeCategoryRepository(BikeContext dbContext)
        {
            _dbContext = dbContext;
        }
        public void DeleteBikeCategory(int BikeCategoryid)
        {
            var BikeCategory = _dbContext.BikeCategories.Find(BikeCategoryid);
            _dbContext.BikeCategories.Remove(BikeCategory);
            Save();
        }
        public BikeCategory GetBikeCategoryById(int Id)
        {
            var cate = _dbContext.BikeCategories.Find(Id);
            return cate;
        }
        public IEnumerable<BikeCategory> GetGategory()
        {
            return _dbContext.BikeCategories.ToList();
        }
        public void InsertBikeCategory(BikeCategory BikeCategory)
        {
            _dbContext.Add(BikeCategory);
            Save();
        }
        public void UpdateBikeCategory(BikeCategory BikeCategory)
        {
            _dbContext.Entry(BikeCategory).State =
           EntityState.Modified;
            Save();
        }
        public void Save()
        {
            _dbContext.SaveChanges();
        }
}
}
