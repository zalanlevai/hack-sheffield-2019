using System.Collections.Generic;

namespace HackSheffield2019.Models
{
    public class InstrumentModel
    {
        public string Name { get; set; }
        public IEnumerable<SampleModel> Samples { get; set; }

        public InstrumentModel(string name, IEnumerable<SampleModel> samples)
        {
            Name = name;
            Samples = samples;
        }
    }
    
    public class SampleModel
    {
        public string Name { get; }
        public string FileName { get; }

        public SampleModel(string name, string fileName)
        {
            Name = name;
            FileName = fileName;
        }
    }
}
