using BLL.Services;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace PL.Controllers
{
    public class BlogController : ApiController
    {
        [HttpPost]
        [Route("api/publishblog")]
        public async Task<HttpResponseMessage> PublishBlog()
        {
            if (!Request.Content.IsMimeMultipartContent())
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            var root = HttpContext.Current.Server.MapPath("~/App_Data");
            var provider = new MultipartFormDataStreamProvider(root);
            try
            {
                await Request.Content.ReadAsMultipartAsync(provider);
                var id = "";
                var cookie = Request.Headers.GetCookies("id").FirstOrDefault();
                if (cookie != null) id = cookie["id"].Value;
                var blog = BlogService.PublishBlog(root, provider, "5");
                return blog
                    ? Request.CreateResponse(HttpStatusCode.OK)
                    : Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Blog not added.");
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }

        [HttpGet]
        [Route("api/getblogs")]
        public async Task<HttpResponseMessage> GetBlogs()
        {
            try
            {
                var blogs = BlogService.GetBlogs();
                return Request.CreateResponse(HttpStatusCode.OK, blogs);
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }

        [HttpGet]
        [Route("api/getblogimage/{fileName}")]
        public IHttpActionResult DownloadFile([FromUri] string fileName)
        {
            fileName += ".jpg";
            var root = HttpContext.Current.Server.MapPath("~/App_Data");
            var filePath = Path.Combine(root, "blogs", fileName);

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

        [HttpGet]
        [Route("api/getblog/{blogId}")]
        public HttpResponseMessage GetBlog([FromUri] string blogId)
        {
            try
            {
                var blog = BlogService.GetBlog(blogId);
                return Request.CreateResponse(HttpStatusCode.OK, blog);
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }
    }
}