﻿using AutoMapper;
using BLL.DTOs;
using DAL.Entity_Framework;
using DAL.Repos;
using System;
using System.IO;
using System.Net.Http;

namespace BLL.Services
{
    public class UserService
    {
        public static void RegisterUser(string root, MultipartFormDataStreamProvider provider)
        {
            var userDto = new UserDto
            {
                first_name = provider.FormData["firstName"],
                last_name = provider.FormData["lastName"],
                date_of_birth = DateTime.Parse(provider.FormData["dateOfBirth"]),
                email_address = provider.FormData["emailAddress"],
                password = provider.FormData["password"]
            };
            foreach (var file in provider.FileData)
            {
                var originalFileName = file.Headers.ContentDisposition.FileName.Trim('"');
                var uniqueFileName = Path.GetRandomFileName();
                uniqueFileName += Path.GetExtension(originalFileName);
                userDto.picture = uniqueFileName;
                var sourceFileName = file.LocalFileName;
                var destFileName = Path.Combine(root, "users", uniqueFileName);
                File.Move(sourceFileName, destFileName);
            }
            var mapperConfiguration =
                new MapperConfiguration(configure => { configure.CreateMap<UserDto, user>(); });
            var mapper = new Mapper(mapperConfiguration);
            var user = mapper.Map<user>(userDto);
            UserRepo.RegisterUser(user);
        }

        public static UserDto LoginUser(string root, MultipartFormDataStreamProvider provider)
        {
            var emailAddress = provider.FormData["emailAddress"];
            var password = provider.FormData["password"];
            var userData = UserRepo.LoginUser(emailAddress, password);
            if (userData != null)
            {
                var mapperConfiguration =
                    new MapperConfiguration(configure => { configure.CreateMap<user, UserDto>(); });
                var mapper = new Mapper(mapperConfiguration);
                var user = mapper.Map<UserDto>(userData);
                return user;
            }
            return null;
        }

        public static UserDto GetUserProfile(string id)
        {
            var userData = UserRepo.GetUserProfile(id);
            if (userData != null)
            {
                var mapperConfiguration =
                    new MapperConfiguration(configure => { configure.CreateMap<user, UserDto>(); });
                var mapper = new Mapper(mapperConfiguration);
                var user = mapper.Map<UserDto>(userData);
                return user;
            }
            return null;
        }
    }
}