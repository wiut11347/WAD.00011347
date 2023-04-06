using System.Collections.Generic;
using WAD_00011347.Models;

namespace WAD_00011347.Repository
{
    public interface IBikeRepository
    {
        void InsertBike(Bike bike);
        void UpdateBike(Bike bike);
        void DeleteBike(int bikeid);
        Bike GetBikeById(int Id);
        IEnumerable<Bike> GetBikes();
    }
}
