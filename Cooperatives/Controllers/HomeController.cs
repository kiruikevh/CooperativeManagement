using Cooperatives.Models;
using System.Linq;
using System.Web.Mvc;

namespace Cooperatives.Controllers
{
    public class HomeController : Controller
    {
        private AppDbContext db = new AppDbContext();

        private bool IsAuthenticated()
        {
            return Session["UserId"] != null;
        }

        private bool IsAdmin()
        {
            return Session["Role"] != null && Session["Role"].ToString() == "Admin";
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

        private ActionResult AuthorizeAdmin()
        {
            if (!IsAuthenticated() || !IsAdmin())
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
                registerModel.Role = "User"; // Ensure new users get the "User" role by default
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

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(LoginModel model)
        {
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
                    Session["Role"] = user.Role;

                    // Redirect based on role
                    if (user.Role == "Admin")
                    {
                        return RedirectToAction("AdminDashboard");
                    }
                    else
                    {
                        return RedirectToAction("Dashboard");
                    }
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
            var result = Authorize();
            if (result != null)
            {
                return result;
            }
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Contribution(ContributionModel contributionModel)
        {
            var result = Authorize();
            if (result != null)
            {
                return result;
            }

            if (ModelState.IsValid)
            {
                db.Contributions.Add(contributionModel);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(contributionModel);
        }

        // Example of an admin-only action
        public ActionResult AdminDashboard()
        {
            var result = AuthorizeAdmin();
            if (result != null)
            {
                return result;
            }
            // Admin action logic here
            return View();
        }
        public ActionResult AllEvents()
        {
            var result = AuthorizeAdmin();
            if (result != null)
            {
                return result;
            }

            // Retrieve all events from the database
            var events = db.Events.ToList();

            // Pass the list of events to the view
            return View(events);
        }
        public ActionResult AllContributions()
        {
            var result = AuthorizeAdmin();
            if (result != null)
            {
                return result;
            }

            // Retrieve all events from the database
            var contributions = db.Contributions.ToList();

            // Pass the list of events to the view
            return View(contributions);
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult NewEvent(EventModel eventModel)
        {
            var result = AuthorizeAdmin();
            if (result != null)
            {
                return result;
            }

            if (ModelState.IsValid)
            {
                // Add the event to the database
                db.Events.Add(eventModel);
                db.SaveChanges();

                // Redirect to a confirmation page or other appropriate action
                TempData["Message"] = "Event saved successfully";
                return RedirectToAction("AdminDashboard");
            }

            // If ModelState is not valid, return the view with errors
            return View(eventModel);
        }

    }
}
