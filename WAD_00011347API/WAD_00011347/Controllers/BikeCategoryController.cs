using Microsoft.AspNetCore.Mvc;
using System.Transactions;
using WAD_00011347.Models;
using WAD_00011347.Repository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WAD_00011347.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BikeCategoryController : ControllerBase
    {
        private readonly IBikeCategoryRepository _categoryRepository;
        public BikeCategoryController(IBikeCategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }
        // GET: api/Category
        [HttpGet]
        public IActionResult Get()
        {
            var category = _categoryRepository.GetGategory();
            return new OkObjectResult(category);
        }
        // GET: api/Category/5
        [HttpGet("{id}", Name = "GetC")]
        public IActionResult Get(int id)
        {
            var category = _categoryRepository.GetBikeCategoryById(id);
            return new OkObjectResult(category);
        }
        // POST: api/Category
        [HttpPost]
        public IActionResult Post([FromBody] BikeCategory category)
        {
            using (var scope = new TransactionScope())
            {
                _categoryRepository.InsertBikeCategory(category);
                scope.Complete();
                return CreatedAtAction(nameof(Get), new { id = category.ID }, category);
            }
        }
        // PUT: api/Category/5
        [HttpPut("{id}")]
        public IActionResult Put([FromBody] BikeCategory category)
        {
            if (category != null)
            {
                using (var scope = new TransactionScope())
                {
                    _categoryRepository.UpdateBikeCategory(category);
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
            _categoryRepository.DeleteBikeCategory(id);
            return new OkResult();
        }

    }
}
