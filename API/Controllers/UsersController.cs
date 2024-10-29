using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Controllers;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Contollers
{
    public class UsersController:BaseApiController
    {
        private readonly DataContext _context;
        public UsersController(DataContext context){
            _context=context;
        }

        [HttpGet("users")]
        [Authorize]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers(){
                return await _context.Users.ToListAsync();
                
        }

         [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUsers(int id){
                return  await _context.Users.FindAsync(id);
                
        }
    }
}