//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL.Entity_Framework
{
    using System;
    using System.Collections.Generic;
    
    public partial class cart_items
    {
        public int id { get; set; }
        public Nullable<int> cart_id { get; set; }
        public Nullable<int> product_id { get; set; }
        public Nullable<int> quantity { get; set; }
        public Nullable<double> price { get; set; }
        public string product_name { get; set; }
        public string image { get; set; }
    
        public virtual cart cart { get; set; }
        public virtual product product { get; set; }
    }
}