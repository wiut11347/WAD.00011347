using Microsoft.AspNetCore.Mvc;
using System.Transactions;
using WAD_00011347.Models;
using WAD_00011347.Repository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WAD_00011347.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BikeController : ControllerBase
    {
        private readonly IBikeRepository _BikeRepository;
        public BikeController(IBikeRepository BikeRepository)
        {
            _BikeRepository = BikeRepository;
        }
        // GET: api/Bike
        [HttpGet]
        public IActionResult Get()
        {
            var Bikes = _BikeRepository.GetBikes();
            return new OkObjectResult(Bikes);
            //return new string[] { "value1", "value2" };
        }
        // GET: api/Bike/5
        [HttpGet, Route("{id}", Name = "GetP")]
        public IActionResult Get(int id)
        {
            var Bike = _BikeRepository.GetBikeById(id);
            return new OkObjectResult(Bike);
            //return "value";
        }
        // POST: api/Bike
        [HttpPost]
        public IActionResult Post([FromBody] Bike Bike)
        {
            using (var scope = new TransactionScope())
            {
                _BikeRepository.InsertBike(Bike);
                scope.Complete();
                return CreatedAtAction(nameof(Get), new { id = Bike.ID }, Bike);
            }
        }
        // PUT: api/Bike/5
        [HttpPut("{id}")]
        public IActionResult Put([FromBody] Bike Bike)
        {
            if (Bike != null)
            {
                using (var scope = new TransactionScope())
                {
                    _BikeRepository.UpdateBike(Bike);
                    scope.Complete();
                    return new OkResult();
                }
            }
            return new NoContentResult();
        }
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _BikeRepository.DeleteBike(id);
            return new OkResult();
        }
    }
}
