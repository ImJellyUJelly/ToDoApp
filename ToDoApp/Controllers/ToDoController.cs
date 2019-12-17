using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ToDoApp.Models;

namespace ToDoApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<ToDoItem>> GetAll()
        {
            return new List<ToDoItem>() { new ToDoItem("Walk the dog"), new ToDoItem("Dishes"), new ToDoItem("Wash car") };
        }
    }
}