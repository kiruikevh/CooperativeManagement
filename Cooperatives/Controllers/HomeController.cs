using Cooperatives.Models;
using Microsoft.Owin.Security;
using PayPal.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Security.Claims;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace Cooperatives.Controllers
{
    public class HomeController : Controller
    {
        private AppDbContext db = new AppDbContext();

        private void SendEmail(string toEmail, string subject, string body)
        {
            try
            {
                MailMessage message = new MailMessage();
                SmtpClient smtp = new SmtpClient();

                message.From = new MailAddress(ConfigurationManager.AppSettings["FromEmail"]); 
                message.To.Add(new MailAddress(toEmail));
                message.Subject = subject;
                message.Body = body;
                message.IsBodyHtml = false;

                smtp.Host = ConfigurationManager.AppSettings["SMTPHost"]; 
                smtp.Port = int.Parse(ConfigurationManager.AppSettings["SMTPPort"]);
                smtp.EnableSsl = bool.Parse(ConfigurationManager.AppSettings["EnableSSL"]); 
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = new NetworkCredential(ConfigurationManager.AppSettings["SMTPUsername"], ConfigurationManager.AppSettings["SMTPPassword"]); // Ensure these match your credentials in web.config

                smtp.Send(message);
            }
            catch (Exception ex)
            {              
                Console.WriteLine($"Failed to send email: {ex.Message}");
            }
        }


        private bool IsAuthenticated()
        {
            return User.Identity.IsAuthenticated;
        }

        private bool IsAdmin()
        {
            return IsAuthenticated() && User.IsInRole("Admin");
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
            if (!IsAdmin())
            {
                return RedirectToLogin();
            }
            return null;
        }

        //private bool IsAuthenticated()
        //{
        //    return Session["UserId"] != null;
        //}

        //private bool IsAdmin()
        //{
        //    return Session["Role"] != null && Session["Role"].ToString() == "Admin" && IsAuthenticated();
        //}

        //private ActionResult RedirectToLogin()
        //{
        //    return RedirectToAction("Login");
        //}

        //// Authorization check for protected actions
        //private ActionResult Authorize()
        //{
        //    if (!IsAuthenticated())
        //    {
        //        return RedirectToLogin();
        //    }
        //    return null;
        //}

        //private ActionResult AuthorizeAdmin()
        //{
        //    if (!IsAdmin() && !IsAuthenticated())
        //    {
        //        return RedirectToLogin();
        //    }
        //    return null;
        //}

        //public ActionResult Index()
        //{
        //    var result = Authorize();
        //    if (result != null)
        //    {
        //        return result;
        //    }
        //    return View();
        //}

        //public ActionResult About()
        //{
        //    var result = Authorize();
        //    if (result != null)
        //    {
        //        return result;
        //    }
        //    return View();
        //}

        //public ActionResult Contact()
        //{
        //    var result = Authorize();
        //    if (result != null)
        //    {
        //        return result;
        //    }
        //    return View();
        //}


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
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Login(LoginModel model)
        {
            if (ModelState.IsValid)
            {
                var user = db.Users.FirstOrDefault(u => u.Email == model.Email && u.Password == model.Password);
                if (user != null)
                {
                    var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Email),
                new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString()),
                new Claim(ClaimTypes.Role, user.Role)
            };

                    var identity = new ClaimsIdentity(claims, "ApplicationCookie");

                    HttpContext.GetOwinContext().Authentication.SignIn(new AuthenticationProperties
                    {
                        IsPersistent = false
                    }, identity);

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

        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Login(LoginModel model)
        //{          
        //    if (ModelState.IsValid)
        //    {
        //        var user = db.Users.FirstOrDefault(u => u.Email == model.Email && u.Password == model.Password);
        //        if (user != null)
        //        {
        //            Session["UserId"] = user.UserId;
        //            Session["FirstName"] = user.FirstName;
        //            Session["Email"] = user.Email;
        //            Session["Role"] = user.Role;

        //            // Redirect based on role
        //            if (user.Role == "Admin")
        //            {
        //                return RedirectToAction("AdminDashboard");
        //            }
        //            else
        //            {
        //                return RedirectToAction("Dashboard");
        //            }
        //        }
        //        ModelState.AddModelError("", "Invalid login attempt.");
        //    }
        //    return View(model);
        //}
        //public ActionResult Logout()
        //{
        //    Session.Abandon();
        //    FormsAuthentication.SignOut();
        //    return RedirectToAction("Login", "Home");
        //}
        
        public ActionResult Logout()
        {
            HttpContext.GetOwinContext().Authentication.SignOut("ApplicationCookie");
            return RedirectToAction("Login", "Home");
        }

        [HttpGet]
        [Authorize]
        public ActionResult Dashboard()
        {
            var result = Authorize();
            if (result != null)
            {
                return result;
            }
            return View();
        }

        [HttpGet]
        [Authorize]
        public JsonResult GetProfileData()
        {
            var userId = User.Identity.Name;
            var data = db.Profiles.Where(u => u.UserId == userId).ToList();
            return Json(data, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        [Authorize]
        public JsonResult Evens()
        {
            var even = db.Events.Count();
            var data = db.Events.ToList();
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        [Authorize]
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
        [Authorize]
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
        [Authorize(Roles = "Admin")]
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
        [HttpGet]
        [Authorize(Roles="Admin")]
        public JsonResult GetProfiles()
        {         
            var profilesCount = db.Profiles.Count();
            var data = db.Profiles.ToList();
            return Json(data,  JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        [Authorize(Roles = "Admin")]
        public JsonResult GetUsers()
        {
            var userCount = db.Users.Count();
            var data = db.Users.Select(u => new
            {
              Email =  u.Email,
                Id = u.UserId,
               Fname=  u.FirstName,
                OName = u.OtherName
            }
            ).ToList();
            return Json(data, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        [Authorize(Roles = "Admin")]
        public JsonResult GetEvents()
        {
            var eventCount = db.Events.Count();
            var data = db.Events.Select(u => new
            {
               Name = u.EventName,
                Id = u.EventId,
                EDate = u.EventDate,
             
            }
            ).ToList();
            return Json(data, JsonRequestBehavior.AllowGet);
        }
        [Authorize(Roles = "Admin")]
        public ActionResult AllEvents()
        {
            var result = AuthorizeAdmin();
            if (result != null)
            {
                return result;
            }
            // Retrieve all events from the database
            var events = db.Events.Include(e => e.Status).ToList();

            // Pass the list of events to the view
            return View(events);
        }
        [Authorize]
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
        [Authorize (Roles="Admin")]
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
        [Authorize(Roles = "Admin")]
        public ActionResult NewEvent()
        {
            var result = AuthorizeAdmin();
            if (result != null)
            {
                return result;
            }
            ViewBag.StatusList = new SelectList(db.Statuses.ToList(), "StatusId", "StatusName");

            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Admin")]
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
       
        [Authorize]
        public ActionResult NewProfile()
        {
            return View();
        }

        [Authorize]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult NewProfile(ProfileModel profile)
        {
            if (ModelState.IsValid)
            {
                var userID = User.Identity.Name;
                profile.UserId = userID;
                db.Profiles.Add(profile);
                db.SaveChanges();
                return Json(new { success = true, redirectUrl = Url.Action("Dashboard") });
            }

            // If model state is invalid, return the form with validation errors
            return Json(new { success = false, html = RenderRazorViewToString("NewProfile", profile) });
        }
        protected string RenderRazorViewToString(string viewName, object model)
        {
            ViewData.Model = model;
            using (var sw = new StringWriter())
            {
                var viewResult = ViewEngines.Engines.FindPartialView(ControllerContext, viewName);
                var viewContext = new ViewContext(ControllerContext, viewResult.View, ViewData, TempData, sw);
                viewResult.View.Render(viewContext, sw);
                return sw.GetStringBuilder().ToString();
            }
        }


        // GET: Profile/EditProfile
        [Authorize]
        public ActionResult EditProfile(int? id)
        {
            var user = User.Identity.Name;
            var profile = db.Profiles.FirstOrDefault(p => p.UserId == user && p.ID == id);
            if (profile == null)
            {
                return HttpNotFound();
            }
            return View(profile);
        }

        // POST: Profile/EditProfile/5  
        [HttpPost]
        [Authorize]
        [ValidateAntiForgeryToken]
        public ActionResult EditProfile(ProfileModel profile)
        {
            if (ModelState.IsValid)
            {
                var userId = User.Identity.Name;
                profile.UserId = userId;
                db.Entry(profile).State = EntityState.Modified;
                db.SaveChanges();
                return Json(new { success = true });
            }

            // If model state is not valid, return a JSON result with error information
            var errors = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage);
            return Json(new { success = false, errors = errors });
        }


        // GET: Profile/DeleteProfile/5
        [Authorize]
        public ActionResult DeleteProfile(int? id)
        {
            var user = User.Identity.Name;
            var profile = db.Profiles.FirstOrDefault(p=>p.UserId ==user && p.ID ==id);
            if (profile == null)
            {
                return HttpNotFound();
            }
            return View(profile);
        }

        // POST: Profile/DeleteProfile/5
        [HttpPost, ActionName("DeleteProfile")]
        [ValidateAntiForgeryToken]
        [Authorize]
        public ActionResult DeleteProfileConfirmed(int? id)
        {          
            var profile = db.Profiles.Find(id);
            db.Profiles.Remove(profile);
            db.SaveChanges();
            return RedirectToAction("Dashboard");
        }
        
        // GET: Profile/DeleteProfile/5
        [Authorize(Roles="Admin")]
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
        [Authorize(Roles = "Admin")]
        [HttpPost, ActionName("DeleteEvent")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteEventConfirmed(int? id)
        {
            var ev = db.Events.Find(id);
            db.Events.Remove(ev);
            db.SaveChanges();
            return RedirectToAction("AllEvents");
        }
        [Authorize(Roles = "Admin")]
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
        [Authorize(Roles = "Admin")]
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
        [Authorize(Roles = "Admin")]
        public ActionResult Status()
        {

            var result = AuthorizeAdmin();
            return View();
        }
        [HttpPost]
        [Authorize(Roles = "Admin")]
        [ValidateAntiForgeryToken]
        public ActionResult Status(StatusModel status)
        {         
            
                if (ModelState.IsValid)
                {               
                    db.Statuses.Add(status);
                    db.SaveChanges();
                    Response.Redirect("Statuses");
                }

            else
            {
                // Handle the case where UserId is null (e.g., user not logged in)
                ModelState.AddModelError("", "User is not logged in.");
            }
            return View(status);
        }
        [Authorize(Roles = "Admin")]
        public ActionResult Statuses()
        {
            var result = AuthorizeAdmin();
            if (result != null)
            {
                return result;
            }          
            var status = db.Statuses.ToList();       
            return View(status);
        }     
        public void SendEventReminders()
        {
         var events = db.Events.ToList();                 
            foreach (var ev in events)
            {
                // Calculate days difference between today and event date
                var daysUntilEvent = (ev.EventDate.Date - DateTime.Today).TotalDays;
                if (daysUntilEvent == 6 || daysUntilEvent == 6)
                {
                    string subject = $"Reminder: {ev.EventName} is in {daysUntilEvent} day{(daysUntilEvent == 1 ? "" : "s")}";
                    string body = $"Dear User,\n\nThis is a reminder that the event '{ev.EventName}' is scheduled on {ev.EventDate.ToShortDateString()}.\n\nRegards,\nYour Cooperative Team";

                    // Send email to event participants or administrators
                    SendEmail("kevinkirui003@gmail.com", subject, body); // Replace with actual recipient email
                }
            }
        }

    }
}
