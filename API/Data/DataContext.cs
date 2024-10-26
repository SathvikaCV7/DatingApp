using Microsoft.EntityFrameworkCore;
using API.Entities;
using API.Contollers;
namespace API.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions options):  base(options){

        }
        public DbSet<AppUser> Users{get;set;}
         protected override void OnModelCreating(ModelBuilder modelBuilder)
 {

     base.OnModelCreating(modelBuilder);
     modelBuilder.Entity<AppUser>().HasData(
        new AppUser{
            Id=1,
            UserName="Sathvika"
        },new AppUser{
            Id=2,
            UserName="Thrisha"
        },new AppUser{
            Id=3,
            UserName="Ashwith"
        },new AppUser{
            Id=4,
            UserName="Krishna"
        }
        );
     }
 
    }
}