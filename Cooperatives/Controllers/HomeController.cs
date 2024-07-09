using Cooperatives.Models;
using PayPal.Models;
using System;
using System.Data.Entity;
using System.Linq;
using System.Web.Mvc;
using System.Web.Security;

namespace Cooperatives.Controllers
{
    public class HomeController : Controller
    {
        private AppDbContext db = new AppDbContext();
        private readonly string _clientId;
        private readonly string _clientSecret;
        private bool IsAuthenticated()
        {
            return Session["UserId"] != null;
        }

        private bool IsAdmin()
        {
            return Session["Role"] != null && Session["Role"].ToString() == "Admin" && IsAuthenticated();
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
            if (!IsAdmin() && !IsAuthenticated())
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
          
          
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(LoginModel model)
        {          
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
            Session.Abandon();
            FormsAuthentication.SignOut();
            return RedirectToAction("Login", "Home");
        }

       [HttpGet]
        public ActionResult Dashboard()
        {
            var result = Authorize();
            if (result != null)
            {
                return result;
            }
            var data = db.Profiles.ToList();
            return View(data);
        }

        public ActionResult MyContributions()
        {
            var result = Authorize();
            if (result != null)
            {
                return result;
            }
            // Retrieve all events from the database
            var contributions = db.Contributions.ToList();

            // Pass the list of events to the view
            return View(contributions);
          
        }

        public ActionResult Contribution()
        {
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
                var userId = Convert.ToString(Session["UserId"]);
                if (userId != null)
                {
                    contributionModel.UserId = userId;
                    db.Contributions.Add(contributionModel);
                    db.SaveChanges();
                }

                return RedirectToAction("Dashboard");
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
        public ActionResult Events()
        {
            var result = Authorize();
            if (result != null)
            {
                return result;
            }
            var events = db.Events.ToList();
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
        public ActionResult NewEvent()
        {
            var result = AuthorizeAdmin();
            if (result != null)
            {
                return result;
            }
            return View();
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
                return RedirectToAction("AllEvents");
            }

            // If ModelState is not valid, return the view with errors
            return View(eventModel);
        }
        //public ActionResult Statuses()
        //{
        //    var result = AuthorizeAdmin();
        //    if (result != null)
        //    {
        //        return result;
        //    }
        //    // Retrieve all events from the database
        //    var data = db.Statuses.ToList();

        //    // Pass the list of events to the view
        //    return View(data);
        //}
        //public ActionResult Status()
        //{
        //    var result = AuthorizeAdmin();
        //    if (result != null)
        //    {
        //        return result;
        //    }
        //    return View();
        //}
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Status(StatusModel statusModel)
        //{
        //    var result = AuthorizeAdmin();
        //    if (result != null)
        //    {
        //        return result;
        //    }

        //    if (ModelState.IsValid)
        //    {
        //        // Add the event to the database
        //        db.Statuses.Add(statusModel);
        //        db.SaveChanges();
        //        // Redirect to a confirmation page or other appropriate action
        //        TempData["Message"] = "Status saved successfully";
        //        return RedirectToAction("Statuses");
        //    }

        //    // If ModelState is not valid, return the view with errors
        //    return View(statusModel);
        //}
        public ActionResult NewProfile()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult NewProfile(ProfileModel profile)
        {
            var result = Authorize();
            var userId = Convert.ToString(Session["UserId"]);
            if (userId != null)
            {
                if (ModelState.IsValid)
                {
                    profile.UserId = userId;
                    db.Profiles.Add(profile);
                    db.SaveChanges();
                    Response.Redirect("Dashboard");
                }
            }
            else
            {
                // Handle the case where UserId is null (e.g., user not logged in)
                ModelState.AddModelError("", "User is not logged in.");
            }
            return View (profile);
        }
        // GET: Profile/EditProfile
        public ActionResult EditProfile(int? id)
        {
            var profile = db.Profiles.Find(id);
            if (profile == null)
            {
                return HttpNotFound();
            }
            return View(profile);
        }

        // POST: Profile/EditProfile/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult EditProfile(ProfileModel profile)
        {
            if (ModelState.IsValid)
            {
                db.Entry(profile).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Dashboard");
            }
            return View(profile);
        }
        // GET: Profile/DeleteProfile/5
        public ActionResult DeleteProfile(int? id)
        {
            var profile = db.Profiles.Find(id);
            if (profile == null)
            {
                return HttpNotFound();
            }
            return View(profile);
        }

        // POST: Profile/DeleteProfile/5
        [HttpPost, ActionName("DeleteProfile")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteProfileConfirmed(int? id)
        {
            var profile = db.Profiles.Find(id);
            db.Profiles.Remove(profile);
            db.SaveChanges();
            return RedirectToAction("Dashboard");
        }
        
        // GET: Profile/DeleteProfile/5
        public ActionResult DeleteEvent(int? id)
        {
            var ev = db.Events.Find(id);
            if (ev == null)
            {
                return HttpNotFound();
            }
            return View(ev);
        }

        // POST: Profile/DeleteProfile/5
        [HttpPost, ActionName("DeleteEvent")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteEventConfirmed(int? id)
        {
            var ev = db.Events.Find(id);
            db.Events.Remove(ev);
            db.SaveChanges();
            return RedirectToAction("AllEvents");
        }
        public ActionResult EditEvent(int? id)
        {
            var ev = db.Events.Find(id);
            if (ev == null)
            {
                return HttpNotFound();
            }
            return View(ev);
        }

        // POST: Profile/EditProfile/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult EditEvent(EventModel ev)
        {
            if (ModelState.IsValid)
            {
                db.Entry(ev).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("AllEvents");
            }
            return View(ev);
        }
        public ActionResult Status()
        {

            var result = AuthorizeAdmin();
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Status(StatusModel status)
        {
            var result = AuthorizeAdmin();
           // var userId = Convert.ToString(Session["UserId"]);
         
            
                if (ModelState.IsValid)
                {
                    //status.UserId = userId;
                    db.Statuses.Add(status);
                    db.SaveChanges();
                    Response.Redirect("AdminDashboard");
                }

            else
            {
                // Handle the case where UserId is null (e.g., user not logged in)
                ModelState.AddModelError("", "User is not logged in.");
            }
            return View(status);
        }
        public ActionResult Statuses()
        {
            var result = AuthorizeAdmin();
            if (result != null)
            {
                return result;
            }
            // Retrieve all events from the database
            var status = db.Statuses.ToList();

            // Pass the list of events to the view
            return View(status);
        }

    }
}
