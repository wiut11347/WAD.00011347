namespace WAD_00011347.Models
{
    public class Bike
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public BikeCategory Category { get; set; }
    }
}
