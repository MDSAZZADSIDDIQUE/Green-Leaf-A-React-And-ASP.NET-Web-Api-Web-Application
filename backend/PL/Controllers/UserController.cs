using BLL.Services;
using System;
using System.Collections.Specialized;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace PL.Controllers
{
    [EnableCors(origins: "*", headers: "*",
        methods: "*", SupportsCredentials = true)]
    public class UserController : ApiController
    {
        [HttpPost]
        [Route("api/registeruser")]
        public async Task<HttpResponseMessage> RegisterUser()
        {
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }

            var root = HttpContext.Current.Server.MapPath("~/App_Data");
            var provider = new MultipartFormDataStreamProvider(root);

            try
            {
                await Request.Content.ReadAsMultipartAsync(provider);
                UserService.RegisterUser(root, provider);
                return Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (System.Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }

        [HttpPost]
        [Route("api/loginuser")]
        public async Task<HttpResponseMessage> LoginUser()
        {
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }

            var root = HttpContext.Current.Server.MapPath("~/App_Data");
            var provider = new MultipartFormDataStreamProvider(root);

            try
            {
                await Request.Content.ReadAsMultipartAsync(provider);
                var userDto = UserService.LoginUser(root, provider);
                if (userDto == null) return Request.CreateErrorResponse(HttpStatusCode.NotFound, "User not found.");
                var resp = new HttpResponseMessage();

                var cookie = new CookieHeaderValue("session-id", "12345");
                cookie.Expires = DateTimeOffset.Now.AddDays(1);
                cookie.Domain = Request.RequestUri.Host;
                cookie.Path = "/";
                Trace.WriteLine(cookie);

                resp.Headers.AddCookies(new CookieHeaderValue[]
                {
                    cookie
                });
                Trace.WriteLine(resp);
                return resp;
            }
            catch (System.Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }

        [HttpGet]
        [Route("api/getuserprofile")]
        public async Task<HttpResponseMessage> GetUserProfile()
        {
            try
            {
                var id = "";
                var cookie = Request.Headers.GetCookies("id").FirstOrDefault();
                if (cookie != null)
                {
                    id = cookie["id"].Value;
                }
                var userDto = UserService.GetUserProfile("5");
                return userDto != null ? Request.CreateResponse(HttpStatusCode.OK, userDto) : Request.CreateErrorResponse(HttpStatusCode.NotFound, "User not found.");
            }
            catch (System.Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }

        [HttpGet]
        [Route("api/getuser/{fileName}")]
        public IHttpActionResult DownloadFile([FromUri] string fileName)
        {
            fileName += ".jpg";
            var root = HttpContext.Current.Server.MapPath("~/App_Data");
            var filePath = Path.Combine(root, "users", fileName);

            if (File.Exists(filePath))
            {
                var fileBytes = File.ReadAllBytes(filePath);
                var content = new ByteArrayContent(fileBytes);
                var contentType = MimeMapping.GetMimeMapping(fileName);

                var response = new HttpResponseMessage(HttpStatusCode.OK)
                {
                    Content = content
                };

                response.Content.Headers.ContentType = new MediaTypeHeaderValue(contentType);
                response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
                {
                    FileName = fileName
                };

                return ResponseMessage(response);
            }

            return NotFound();
        }
    }
}