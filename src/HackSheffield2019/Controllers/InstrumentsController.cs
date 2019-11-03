using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using HackSheffield2019.Models;

namespace HackSheffield2019.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InstrumentsController : ControllerBase
    {
        private IWebHostEnvironment _hostingEnvironment;

        public InstrumentsController(IWebHostEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpGet]
        public ActionResult<IEnumerable<InstrumentModel>> Get()
        {
            var instruments = Directory.EnumerateDirectories(Path.Combine(_hostingEnvironment.WebRootPath, "samples"));
            return Ok(instruments.Select(folder => new InstrumentModel(
                Path.GetFileName(folder),
                Directory.EnumerateFiles(folder).Select(file => new SampleModel(
                    Path.GetFileNameWithoutExtension(file), Path.GetFileName(file))))));
        }
    }
}
