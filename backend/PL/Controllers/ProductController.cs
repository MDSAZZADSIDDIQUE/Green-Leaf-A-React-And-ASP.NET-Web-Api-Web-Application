using System;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using BLL.Services;

namespace PL.Controllers
{
    public class ProductController : ApiController
    {
        [HttpPost]
        [Route("api/addproduct")]
        public async Task<HttpResponseMessage> AddProduct()
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
                var product = ProductService.AddProduct(root, provider, "5");
                return product
                    ? Request.CreateResponse(HttpStatusCode.OK)
                    : Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Product not added.");
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }

        [HttpGet]
        [Route("api/shop")]
        public Task<HttpResponseMessage> Shop()
        {
            try
            {
                var products = ProductService.Shop();
                return Task.FromResult(Request.CreateResponse(HttpStatusCode.OK, products));
            }
            catch (Exception e)
            {
                return Task.FromResult(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e));
            }
        }

        [HttpGet]
        [Route("api/getproductimage/{fileName}")]
        public IHttpActionResult DownloadFile([FromUri] string fileName)
        {
            fileName += ".jpg";
            var root = HttpContext.Current.Server.MapPath("~/App_Data");
            var filePath = Path.Combine(root, "products", fileName);

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
        [Route("api/addtocart/{productId}")]
        public HttpResponseMessage AddToCart([FromUri] string productId)
        {
            try
            {
                ProductService.AddToCart(productId);
                return Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }

        [HttpGet]
        [Route("api/userOrder")]
        public async Task<HttpResponseMessage> userOrder()
        {
            try
            {
                var order = ProductService.GetUserOrders();
                return Request.CreateResponse(HttpStatusCode.OK, order);
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }

        [HttpGet]
        [Route("api/order")]
        public async Task<HttpResponseMessage> orders()
        {
            try
            {
                var order = ProductService.GetOrders();
                return Request.CreateResponse(HttpStatusCode.OK, order);
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }

        [HttpGet]
        [Route("api/cart")]
        public async Task<HttpResponseMessage> Cart()
        {
            try
            {
                var cart = ProductService.Cart();
                return Request.CreateResponse(HttpStatusCode.OK, cart);
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }
    }
}