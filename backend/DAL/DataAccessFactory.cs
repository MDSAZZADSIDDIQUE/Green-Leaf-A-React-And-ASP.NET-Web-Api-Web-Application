using DAL.Entity_Framework;
using DAL.Interfaces;
using DAL.Repos;

namespace DAL
{
    public class DataAccessFactory
    {
        public static IRepo<product> ProductDataAccess()
        {
            return new ProductRepo();
        }

        public static IRepo<blog> BlogDataAccess()
        {
            return new BlogRepo();
        }

        public static IRepo<post> PostDataAccess()
        {
            return new PostRepo();
        }

        public static IRepo<cart> CartDataAccess()
        {
            return new CartRepo();
        }

        public static IAddRepo<cart, int> AddToCartDataAccess()
        {
            return new CartRepo();
        }

        public static IAddRepo<order, int> AddOrderDataAccess()
        {
            return new OrderRepo();
        }

        public static IRepo<cart_items> CartItemsDataAccess()
        {
            return new CartItemRepo();
        }

        public static IRepo<order> OrderDataAccess()
        {
            return new OrderRepo();
        }

        public static IRepo<order_items> OrderItemsDataAccess()
        {
            return new OrderItemRepo();
        }
    }
}