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
    public class PostService
    {
        public static bool CreatePost(string root, MultipartFormDataStreamProvider provider, string id)
        {
            var postDto = new PostDto()
            {
                caption = provider.FormData["caption"],
                created_at = DateTime.Now,
                user_id = 5
            };
            foreach (var file in provider.FileData)
            {
                var originalFileName = file.Headers.ContentDisposition.FileName.Trim('"');
                var uniqueFileName = Path.GetRandomFileName();
                uniqueFileName = uniqueFileName.Replace(".", "");
                postDto.image = uniqueFileName;
                uniqueFileName += Path.GetExtension(originalFileName);
                var sourceFileName = file.LocalFileName;
                var destFileName = Path.Combine(root, "posts", uniqueFileName);
                File.Move(sourceFileName, destFileName);
            }
            var mapperConfiguration =
                new MapperConfiguration(configure => { configure.CreateMap<PostDto, post>(); });
            var mapper = new Mapper(mapperConfiguration);
            var post = mapper.Map<post>(postDto);
            return DataAccessFactory.PostDataAccess().Add(post);
        }

        public static List<PostDto> GetPosts()
        {
            var posts = DataAccessFactory.PostDataAccess().Get();
            var postDtos = new List<PostDto>();
            foreach (var post in posts)
            {
                var mapperConfiguration =
                    new MapperConfiguration(configure => { configure.CreateMap<post, PostDto>(); });
                var mapper = new Mapper(mapperConfiguration);
                postDtos.Add(mapper.Map<PostDto>(post));
            }

            return postDtos;
        }
    }
}