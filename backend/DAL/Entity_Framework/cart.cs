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
    
    public partial class cart
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public cart()
        {
            this.cart_items = new HashSet<cart_items>();
        }
    
        public int id { get; set; }
        public Nullable<int> user_id { get; set; }
        public Nullable<System.DateTime> created_at { get; set; }
        public Nullable<int> order_id { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<cart_items> cart_items { get; set; }
        public virtual order order { get; set; }
        public virtual user user { get; set; }
    }
}