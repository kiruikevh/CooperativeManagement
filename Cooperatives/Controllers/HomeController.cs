using System.Linq;
using System.Web.Mvc;
using Cooperatives.Models;

namespace Cooperatives.Controllers
{
    public class HomeController : Controller
    {
        private AppDbContext db = new AppDbContext();

        private bool IsAuthenticated()
        {
            return Session["UserId"] != null;
        }

        private ActionResult RedirectToLogin()
        {
            return RedirectToAction("Login");
        }

        // Authorization check for protected actions
        private ActionResult Authorize()
        {
            if (!IsAuthenticated())
            {
                return RedirectToLogin();
            }
            return null;
        }

        public ActionResult Index()
        {
            var result = Authorize();
            if (result != null)
            {
                return result;
            }
            return View();
        }

        public ActionResult About()
        {
            var result = Authorize();
            if (result != null)
            {
                return result;
            }
            return View();
        }

        public ActionResult Contact()
        {
            var result = Authorize();
            if (result != null)
            {
                return result;
            }
            return View();
        }

        // GET: Account/Register
        public ActionResult Register()
        {
            // Check if the user is already authenticated
            if (IsAuthenticated())
            {
                return RedirectToAction("Index");
            }
            return View();
        }

        // POST: Home/Register
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Register(RegisterModel registerModel)
        {
            // Check if the user is already authenticated
            if (IsAuthenticated())
            {
                return RedirectToAction("Index");
            }

            if (ModelState.IsValid)
            {
                db.Users.Add(registerModel);
                db.SaveChanges();
                return RedirectToAction("Login");
            }

            return View(registerModel);
        }

        // GET: Home/Login
        public ActionResult Login()
        {
            // Check if the user is already authenticated
            if (IsAuthenticated())
            {
                return RedirectToAction("Index");
            }
            return View();
        }

        // POST: Home/Login
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(LoginModel model)
        {
            // Check if the user is already authenticated
            if (IsAuthenticated())
            {
                return RedirectToAction("Index");
            }

            if (ModelState.IsValid)
            {
                var user = db.Users.FirstOrDefault(u => u.Email == model.Email && u.Password == model.Password);
                if (user != null)
                {
                    Session["UserId"] = user.UserId;
                    Session["FirstName"] = user.FirstName;
                    Session["Email"] = user.Email;
                    // Redirect to the original page or the Index page
                    return RedirectToAction("Index");
                }
                ModelState.AddModelError("", "Invalid login attempt.");
            }
            return View(model);
        }
        public ActionResult Logout()
        {
            // Clear session
            Session.Clear();
            return RedirectToAction("Login");
        }
        public ActionResult Dashboard()
        {
            if (IsAuthenticated())
            {
                return RedirectToAction("Index");
            }
            return RedirectToAction("Login");
        }
        public ActionResult Contribution()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Contribution(ContributionModel contributionModel)
        {
            return View();
        }

    }
}
