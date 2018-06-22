namespace AspNetCore.Controllers
{
    using AspNetCore.DTOs;
    using AspNetCore.Models;
    using AspNetCore.QueryParameters;
    using AspNetCore.Repositories;
    using AutoMapper;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.JsonPatch;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;
    using Newtonsoft.Json;
    using System.Collections.Generic;
    using System.Linq;

    [Route("api/customers")]
    //[Authorize(Policy = "resourcesUser")]
    //[Authorize(Policy = "resourcesAdmin")]
    //[Authorize(Roles = "resources.user")]
    public class CustomersController : Controller
    {
        private readonly ILogger _logger;
        private ICustomerRepository _customerRepository;

        public CustomersController(ICustomerRepository customerRepository, ILogger<CustomersController> logger)
        {
            _customerRepository = customerRepository;
            _logger = logger;
            _logger.LogInformation("CustomersController started!");
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<Customer>), 200)]
        public IActionResult GetAllCustomers(CustomerQueryParameters customerQueryParameters)
        {
            _logger.LogInformation("---> GetAllCustomers");
            var allCustomers = _customerRepository.GetAll(customerQueryParameters).ToList();

            var allCustomersDtos = allCustomers.Select(c => Mapper.Map<CustomerDto>(c));

            Response.Headers.Add("X-Pagination", 
                JsonConvert.SerializeObject(new { totalCount = _customerRepository.Count() }));

            return Ok(allCustomersDtos);
        }

        [HttpGet]
        [Route("{id}", Name = "GetCustomerByID")]
        public IActionResult GetCustomerByID(int id)
        {
            Customer customer = _customerRepository.Get(id);
            if (customer != null )
            {
                return Ok(Mapper.Map<CustomerDto>(customer));
            }

            return NotFound();
        }

        // POST: api/customers

        [HttpPost]
        [ProducesResponseType(typeof(List<CustomerDto>), 201)]
        [ProducesResponseType(typeof(List<CustomerDto>), 400)]
        public IActionResult AddCustomer([FromBody] CustomerCreateDto customerToAdd)
        {
            if (customerToAdd == null)
            {
                return BadRequest("Customer object was null!");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Customer toAdd = Mapper.Map<Customer>(customerToAdd);
            _customerRepository.Add(toAdd);
            bool result = _customerRepository.Save();

            if (!result)
            {
                return new StatusCodeResult(500);
            }

            return CreatedAtRoute("GetCustomerByID", new { id = toAdd.ID }, Mapper.Map<CustomerDto>(toAdd));
        }

        // Put: api/customers/5

        [HttpPut]
        [Route("{id}")]
        public IActionResult UpdateCustomer(int id, [FromBody]CustomerUpdateDto customerToUpdate)
        {
            if (customerToUpdate == null)
            {
                return BadRequest();
            }

            Customer oldCustomer = _customerRepository.Get(id);

            if (oldCustomer == null)
            {
                return NotFound();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Mapper.Map(customerToUpdate, oldCustomer);
            _customerRepository.Update(oldCustomer);
            bool result = _customerRepository.Save();

            if (!result)
            {
                return new StatusCodeResult(500);
            }

            return CreatedAtRoute("GetCustomerByID", new { id = oldCustomer.ID }, Mapper.Map<CustomerDto>(oldCustomer));
        }

        // PATCH: api/customers/5

        [HttpPatch]
        [Route("{id}")]
        public IActionResult PartiallyUpdate(int id, JsonPatchDocument<CustomerUpdateDto> customerPatchDoc)
        {
            if (customerPatchDoc == null)
            {
                return BadRequest();
            }

            Customer oldCustomer = _customerRepository.Get(id);
            if (oldCustomer == null)
            {
                return NotFound();
            }

            var customerToPatch = Mapper.Map<CustomerUpdateDto>(oldCustomer);

            //AY: Add the ModelState
            customerPatchDoc.ApplyTo(customerToPatch, ModelState);
            TryValidateModel(customerToPatch);
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            Mapper.Map(customerToPatch, oldCustomer);
            _customerRepository.Update(oldCustomer);

            bool result = _customerRepository.Save();

            if (!result)
            {
                return new StatusCodeResult(500);
            }

            return Ok(Mapper.Map<CustomerUpdateDto>(oldCustomer));
        }

        // DELETE: api/customers/5

        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteCustomer(int id)
        {
            Customer customer = _customerRepository.Get(id);

            if (customer == null)
            {
                return NotFound();
            }

            _customerRepository.Delete(customer.ID);
            bool result = _customerRepository.Save();

            if (!result)
            {
                return new StatusCodeResult(500);
            }

            return NoContent();
        }
    }
}
