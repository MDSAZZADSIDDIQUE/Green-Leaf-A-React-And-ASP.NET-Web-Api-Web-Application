using BLL.Services;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace PL.Controllers
{
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

        [HttpGet]
        [Route("api/FileDownloading/DownloadFile")]
        public IHttpActionResult DownloadFile()
        {
            var fileName = "Screenshot.png";
            var root = HttpContext.Current.Server.MapPath("~/App_Data");
            var filePath = Path.Combine(root, "files", fileName);

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