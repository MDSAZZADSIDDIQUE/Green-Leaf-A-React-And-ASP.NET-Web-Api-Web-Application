using AutoMapper;
using DAL;
using DAL.Entity_Framework;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Net.Http;
using BLL.DTOs;

namespace BLL.Services
{
    public class ProductService
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

        public static bool AddToCart(string productId)
        {
            var userCart = DataAccessFactory.AddToCartDataAccess().GetTheClass(5);
            cart cart = null;
            if (userCart == null)
            {
                var cartDto = new CartDto()
                {
                    user_id = 5,
                    created_at = DateTime.Now
                };
                Trace.WriteLine(cartDto);
                var mapperConfiguration =
                    new MapperConfiguration(configure => { configure.CreateMap<CartDto, cart>(); });
                var mapper = new Mapper(mapperConfiguration);
                cart = mapper.Map<cart>(cartDto);
                cart = DataAccessFactory.AddToCartDataAccess().AddToClass(cart);
            }
            else
            {
                cart = userCart;
            }

            var product = DataAccessFactory.ProductDataAccess().Get(int.Parse(productId));
            var cartItemDto = new CartItemDto()
            {
                cart_id = cart.id,
                product_id = int.Parse(productId),
                quantity = 1,
                price = product.price,
                product_name = product.name,
                image = product.image
            };
            var cartItemMapperConfiguration =
                new MapperConfiguration(configure => { configure.CreateMap<CartItemDto, cart_items>(); });
            var cartItemMapper = new Mapper(cartItemMapperConfiguration);
            var cartItems = cartItemMapper.Map<cart_items>(cartItemDto);
            return DataAccessFactory.CartItemsDataAccess().Add(cartItems);
        }

        public static List<CartItemDto> Cart()
        {
            var cartItems = DataAccessFactory.CartItemsDataAccess().Get();
            var cartItemDtos = new List<CartItemDto>();
            foreach (var cartItem in cartItems)
            {
                var mapperConfiguration =
                    new MapperConfiguration(configure => { configure.CreateMap<cart_items, CartItemDto>(); });
                var mapper = new Mapper(mapperConfiguration);
                cartItemDtos.Add(mapper.Map<CartItemDto>(cartItem));
            }

            return cartItemDtos;
        }

        public static List<OrderDto> GetOrders()
        {
            var orders = DataAccessFactory.OrderDataAccess().Get();
            var orderDtos = new List<OrderDto>();
            foreach (var order in orders)
            {
                var mapperConfiguration =
                    new MapperConfiguration(configure => { configure.CreateMap<order, OrderDto>(); });
                var mapper = new Mapper(mapperConfiguration);
                orderDtos.Add(mapper.Map<OrderDto>(order));
            }

            return orderDtos;
        }

        public static OrderDto GetUserOrders()
        {
            var order = DataAccessFactory.AddOrderDataAccess().GetTheClass(5);
            var mapperConfiguration =
                new MapperConfiguration(configure => { configure.CreateMap<order, OrderDto>(); });
            var mapper = new Mapper(mapperConfiguration);
            var orderDto = mapper.Map<OrderDto>(order);

            return orderDto;
        }
    }
}