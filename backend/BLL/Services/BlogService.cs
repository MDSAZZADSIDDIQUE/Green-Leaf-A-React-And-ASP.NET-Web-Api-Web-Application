using AutoMapper;
using BLL.DTOs;
using DAL;
using DAL.Entity_Framework;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;

namespace BLL.Services
{
    public class BlogService
    {
        public static bool PublishBlog(string root, MultipartFormDataStreamProvider provider, string id)
        {
            var blogDto = new BlogDto()
            {
                title = provider.FormData["title"],
                author_id = int.Parse(id),
                sub_title = provider.FormData["subTitle"],
                content_body = provider.FormData["content"],
                published_at = DateTime.Now,
                views = 0
            };
            foreach (var file in provider.FileData)
            {
                var originalFileName = file.Headers.ContentDisposition.FileName.Trim('"');
                var uniqueFileName = Path.GetRandomFileName();
                uniqueFileName = uniqueFileName.Replace(".", "");
                blogDto.image = uniqueFileName;
                uniqueFileName += Path.GetExtension(originalFileName);
                var sourceFileName = file.LocalFileName;
                var destFileName = Path.Combine(root, "blogs", uniqueFileName);
                File.Move(sourceFileName, destFileName);
            }
            var mapperConfiguration =
                new MapperConfiguration(configure => { configure.CreateMap<BlogDto, blog>(); });
            var mapper = new Mapper(mapperConfiguration);
            var blog = mapper.Map<blog>(blogDto);
            return DataAccessFactory.BlogDataAccess().Add(blog);
        }

        public static List<BlogDto> GetBlogs()
        {
            var blogs = DataAccessFactory.BlogDataAccess().Get();
            var blogDtos = new List<BlogDto>();
            foreach (var blog in blogs)
            {
                var mapperConfiguration =
                    new MapperConfiguration(configure => { configure.CreateMap<blog, BlogDto>(); });
                var mapper = new Mapper(mapperConfiguration);
                blogDtos.Add(mapper.Map<BlogDto>(blog));
            }

            return blogDtos;
        }

        public static BlogDto GetBlog(string blogId)
        {
            var blog = DataAccessFactory.BlogDataAccess().Get(int.Parse(blogId));
            var mapperConfiguration =
                new MapperConfiguration(configure => { configure.CreateMap<blog, BlogDto>(); });
            var mapper = new Mapper(mapperConfiguration);
            var blogDto = mapper.Map<BlogDto>(blog);
            return blogDto;
        }
    }
}