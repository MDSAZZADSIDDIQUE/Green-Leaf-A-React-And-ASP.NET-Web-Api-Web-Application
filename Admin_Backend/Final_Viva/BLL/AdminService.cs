using AutoMapper;
using BEL;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class AdminService
    {

        public static List<AdminModel> Get()
        {
            var config = new MapperConfiguration(c =>
            {

                c.CreateMap<AdminTable, AdminModel>();
                c.CreateMap<ProductTable,ProductModel>();

            });


            var mapper = new Mapper(config);
            var da = DataAccessFactory.AdminDataAccess();
            var data = mapper.Map<List<AdminModel>>(da.Get());


            return data;
        }

        public static List<String> GetName()
        {


            var data = DataAccessFactory.AdminDataAccess().Get().Select(e => e.Admin_Name).ToList();
            return data;

        }
        public static void Add(AdminModel S)
        {


            var config = new MapperConfiguration(c =>
            {

                c.CreateMap<AdminModel, AdminTable>();

            });


            var mapper = new Mapper(config);
            var data = mapper.Map<AdminTable>(S);
            DataAccessFactory.AdminDataAccess().Add(data);
           


        }

        public static void Delete(int adminId)
        {
            DataAccessFactory.AdminDataAccess().Delete(adminId);
        }
        public static void Edit(AdminModel updatedAdmin)
        {
            var config = new MapperConfiguration(c =>
            {
                c.CreateMap<AdminModel, AdminTable>();
            });

            var mapper = new Mapper(config);
            var updatedAdminEntity = mapper.Map<AdminTable>(updatedAdmin);

            DataAccessFactory.AdminDataAccess().Edit(updatedAdminEntity);
        }
    }

   











}
