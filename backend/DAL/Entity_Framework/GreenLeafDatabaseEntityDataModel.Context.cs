﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class GreenLeafDatabaseEntities : DbContext
    {
        public GreenLeafDatabaseEntities()
            : base("name=GreenLeafDatabaseEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<blog> blogs { get; set; }
        public virtual DbSet<cart_items> cart_items { get; set; }
        public virtual DbSet<cart> carts { get; set; }
        public virtual DbSet<order_items> order_items { get; set; }
        public virtual DbSet<order> orders { get; set; }
        public virtual DbSet<payment_details> payment_details { get; set; }
        public virtual DbSet<post> posts { get; set; }
        public virtual DbSet<product> products { get; set; }
        public virtual DbSet<shipping_addresses> shipping_addresses { get; set; }
        public virtual DbSet<user> users { get; set; }
    }
}
