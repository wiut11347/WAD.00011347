using System.Collections.Generic;
using System.Linq;
using WAD_00011347.Context;
using WAD_00011347.Models;

namespace WAD_00011347.Repository
{
    public class BikeRepository: IBikeRepository
    {
        private readonly BikeContext _dbContext;
        public BikeRepository(BikeContext dbContext)
        {
            _dbContext = dbContext;
        }
        public void DeleteBike(int BikeId)
        {
            var Bike = _dbContext.Bikes.Find(BikeId);
            _dbContext.Bikes.Remove(Bike);
            Save();
        }
        public Bike GetBikeById(int BikeId)
        {
            var bike = _dbContext.Bikes.Find(BikeId);
            return bike;
        }
        public IEnumerable<Bike> GetBikes()
        {
            return _dbContext.Bikes.ToList();

        }
        public void InsertBike(Bike Bike)
        {
            Bike.Category =
           _dbContext.BikeCategories.Find(Bike.Category.ID);
            _dbContext.Add(Bike);
            Save();
        }
        public void UpdateBike(Bike Bike)
        {
            _dbContext.Entry(Bike).State =
           Microsoft.EntityFrameworkCore.EntityState.Modified;
            Save();
        }
        public void Save()
        {
            _dbContext.SaveChanges();
        }
    }
}
