using BLL;
using BEL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Final_Viva.Controllers
{
    public class AdminController : ApiController
    {
        
        

            [Route("api/Admin/Names")]
            [HttpGet]
            public List<string> GetNames()
            {
                return AdminService.GetName();


            }


        [Route("api/Admin/All")]
        [HttpGet]
        public List<AdminModel> GetAll()
        {
            return AdminService.Get();


        }

        [Route("api/Admin/Create")]
        [HttpPost]
        
        public void  Add(AdminModel s)
        {
            AdminService.Add(s);


        }

        [Route("api/Admin/Delete/{adminId}")]
        [HttpDelete]
        public void Delete(int adminId)
        {
            AdminService.Delete(adminId);
        }

        [Route("api/Admin/Edit/{adminId}")]
        [HttpPut]
        public void Edit(int adminId, AdminModel updatedAdmin)
        {
            // You can add validation or error handling as needed

            updatedAdmin.Admin_ID = adminId; // Ensure the correct ID is set for the update
            AdminService.Edit(updatedAdmin);
        }

    }
    }








    