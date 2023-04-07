using Microsoft.EntityFrameworkCore;
using WAD_00011347.Models;

namespace WAD_00011347.Context
{
    public class BikeContext: DbContext
    {
        public BikeContext(DbContextOptions<BikeContext> o) : base(o)
        {
            Database.EnsureCreated();
        }
        public DbSet<Bike> Bikes { get; set; }
        public DbSet<BikeCategory> BikeCategories { get; set; }

    }
}
