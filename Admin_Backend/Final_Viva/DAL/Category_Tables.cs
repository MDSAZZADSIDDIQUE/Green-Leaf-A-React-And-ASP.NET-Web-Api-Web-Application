//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Category_Tables
    {
        public Category_Tables()
        {
            this.ProductTables = new HashSet<ProductTable>();
        }
    
        public int Category_ID { get; set; }
        public string Category_Name { get; set; }
    
        public virtual ICollection<ProductTable> ProductTables { get; set; }
    }
}
