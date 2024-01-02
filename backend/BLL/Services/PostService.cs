using AutoMapper;
using BLL.DTOs;
using DAL;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using DAL.Entity_Framework;

namespace BLL.Services
{
    internal class PostService
    {
        public static bool AddProduct(string root, MultipartFormDataStreamProvider provider, string id)
        {
            var productDto = new ProductDto()
            {
                name = provider.FormData["name"],
                description = provider.FormData["description"],
                price = float.Parse(provider.FormData["price"]),
                category = provider.FormData["category"],
                status = provider.FormData["status"],
                date_added = DateTime.Now,
                seller = int.Parse(id)
            };
            foreach (var file in provider.FileData)
            {
                var originalFileName = file.Headers.ContentDisposition.FileName.Trim('"');
                var uniqueFileName = Path.GetRandomFileName();
                uniqueFileName = uniqueFileName.Replace(".", "");
                productDto.image = uniqueFileName;
                uniqueFileName += Path.GetExtension(originalFileName);
                var sourceFileName = file.LocalFileName;
                var destFileName = Path.Combine(root, "products", uniqueFileName);
                File.Move(sourceFileName, destFileName);
            }
            var mapperConfiguration =
                new MapperConfiguration(configure => { configure.CreateMap<ProductDto, product>(); });
            var mapper = new Mapper(mapperConfiguration);
            var product = mapper.Map<product>(productDto);
            return DataAccessFactory.ProductDataAccess().Add(product);
        }

        public static List<ProductDto> Shop()
        {
            var products = DataAccessFactory.ProductDataAccess().Get();
            var productDtos = new List<ProductDto>();
            foreach (var product in products)
            {
                var mapperConfiguration =
                    new MapperConfiguration(configure => { configure.CreateMap<product, ProductDto>(); });
                var mapper = new Mapper(mapperConfiguration);
                productDtos.Add(mapper.Map<ProductDto>(product));
            }

            return productDtos;
        }
    }
}