// Environment Variables
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const FACEBOOK_CLIENT_ID = process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID;
export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
export const NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV;
export const NEXT_API_URL = process.env.NEXT_PUBLIC_DOMAIN_URL;

// Access and Refresh Token Keys
export const ACCESS_TOKEN = "access_token";
export const REFRESH_TOKEN = "refresh_token";

// Backend urls
export const APPLICATION_URL = `${API_URL}/application/apply/`;
export const CATEGORIES_URL = `${API_URL}/categories/`;
export const CATEGORIES_DETAIL_URL = (slug) => `${API_URL}/categories/${slug}/`;
export const CHECKOUT_URL = `${API_URL}/checkout/`;
export const COURSES_URL = `${API_URL}/courses/`;
export const COURSES_DETAIL_URL = (slug) => `${API_URL}/courses/${slug}/`;
export const DELETE_ACCOUNT_URL = `${API_URL}/auth/account/delete/`;
export const EMAIL_CONFIRMATION_URL = (key) =>
	`${API_URL}/auth/account-confirm-email/${key}/`;
export const EMAIL_RECONFIRMATION_URL = `${API_URL}/auth/account-re-confirm-email/`;
export const LESSON_URL = (course_slug, slug) =>`${API_URL}/courses/${course_slug}/lesson/${slug}/`;
export const LOGIN_URL = `${API_URL}/auth/login/`;
export const LOGOUT_URL = `${API_URL}/auth/logout/`;
export const MY_COURSES_URL = `${API_URL}/mycourses/`;
export const MY_COURSES_DETAIL_URL = (slug) => `${API_URL}/mycourses/${slug}/`;
export const NEWSLETTER_SUBSCRIPTION_URL = `${API_URL}/newsletter/subscribe/`;
export const PASSWORD_RESET_URL = `${API_URL}/auth/password/reset/`;
export const PASSWORD_RESET_CONFIRM_URL = (uid, token) =>
	`${API_URL}/auth/password/reset/confirm/${uid}/${token}/`;
export const PASSWORD_RESET_CONFIRM_UID_TOKEN_URL = (uid, token) =>
	`${API_URL}/auth/password_reset_confirm/${uid}/${token}/`;
export const REGISTER_URL = `${API_URL}/auth/registration/`;
export const REVIEW_COURSES_URL = (slug) =>
	`${API_URL}/reviews/courses/${slug}/`;
export const REVIEW_COURSES_DETAIL_URL = (id) =>
	`${API_URL}/review/course/${id}/`;
export const SOCIAL_GOOGLE_LOGIN_URL = `${API_URL}/auth/social/google/login/`;
export const USER_DATA_URL = `${API_URL}/auth/user/`;
export const VERIFY_TOKEN_URL = `${API_URL}/api/token/verify/`;

export const DASHBOARD_COURSES_API_URL = `${API_URL}/dashboard/courses/`;

// NextJs Server urls
export const NEXT_COURSES_URL = `${NEXT_API_URL}/api/courses`;
export const NEXT_COURSES_DETAIL_URL = `${NEXT_API_URL}/api/courses/detail`;
export const NEXT_DELETE_ACCOUNT_URL = "/api/account/delete";
export const NEXT_EMAIL_CONFIRMATION_URL = `${NEXT_API_URL}/api/account/confirm/`;
export const NEXT_EMAIL_RECONFIRMATION_URL = "/api/account/confirm/email";
export const NEXT_LOGIN_URL = "/api/account/login";
export const NEXT_LOGOUT_URL = "/api/account/logout";
export const NEXT_MY_COURSES_URL = "/api/courses/mycourses/";
export const NEXT_NEWSLETTER_SUBSCRIPTION_URL = "/api/newsletter/";
export const NEXT_PASSWORD_RESET_URL = "/api/account/password/reset";
export const NEXT_PASSWORD_RESET_CONFIRM_URL =
	"/api/account/password/reset/confirm";
export const NEXT_PASSWORD_RESET_CONFIRM_UID_TOKEN_URL = `${NEXT_API_URL}/api/account/password/reset/confirm_uid_token/`;
export const NEXT_REGISTER_URL = "/api/account/register";
export const NEXT_REVIEW_COURSES_URL = "/api/reviews/courses";
export const NEXT_SOCIAL_GOOGLE_LOGIN_URL = "/api/account/social/google";
export const NEXT_USER_DATA_URL = "/api/account/user";
export const NEXT_VERIFY_TOKEN_URL = "/api/account/verify";

// Pages urls Start
export const CHECKOUT_PAGE_URL = "#/checkout";
export const CONTACT_PAGE_URL = "#/contact";
export const FAQ_PAGE_URL = "#/faqs";
export const HOME_PAGE_URL = "/";

// About 
export const ABOUT_PAGE_URL = "#/about";
export const ABOUT_LEARNIT_COURSES_PAGE_URL = "#/about/about-learnhit-courses";
export const GO_PREMIUM_PAGE_URL = "#/about/gopremium";
export const HOW_IT_WORKS_PAGE_URL = "#/about/how-it-works";
export const PRICING_PAGE_URL = "#/about/pricing";

// Authentication and Authorization
export const EMAIL_CONFIRMATION_PAGE_URL = "#/account/confirm/email";
export const LOGIN_PAGE_URL = "#/account/login";
export const PASSWORD_RESET_PAGE_URL = "#/account/password/reset";
export const SIGNUP_PAGE_URL = "#/account/signup";

// Blog
export const BLOG_PAGE_URL = "#/blog";
export const BLOG_DETAIL_PAGE_URL = (slug) => `#${BLOG_PAGE_URL}/${slug}`;

// Categories
export const CATEGORIES_PAGE_URL = "#/categories";
export const CATEGORIES_DETAIL_PAGE_URL = (slug) =>
	`#${CATEGORIES_PAGE_URL}/${slug}`;

// Courses
export const COURSE_CREATOR_PAGE_URL = "#/courses/course-creator";
export const COURSE_CREATOR_FORM_PAGE_URL = "#/courses/course-creator/apply";
export const COURSES_PAGE_URL = "#/courses";
export const COURSES_DETAIL_PAGE_URL = (slug) => `#/courses/${slug}`;
export const LESSON_PAGE_URL = (course_slug, slug) => `#/courses/${course_slug}/lesson/${slug}`;

// Dashboard
export const DASHBOARD_URL = "#/dashboard";
export const DASHBOARD_BLOGS_URL = "#/dashboard/blogs";
export const DASHBOARD_CREATE_BLOG_URL = "#/dashboard/blogs/create";
export const DASHBOARD_CREATE_COURSE_URL = "#/dashboard/courses/create";
export const DASHBOARD_COURSES_URL = "#/dashboard/courses";
export const DASHBOARD_NOTIFICATIONS_URL = "#/dashboard/notifications";
export const DASHBOARD_PROFILE_URL = `#${DASHBOARD_URL}/profile`;

// Publishers
export const PUBLISHER_PAGE_URL = "#/publishers";
export const PUBLISHER_FORM_PAGE_URL = "#/publishers/apply";

// Webinars
export const WEBINARS_PAGE_URL = "#/webinars";

// Pages urls Stop

// Social Links
export const LEARNHIT_SOCIAL_FACEBOOK = "https://m.facebook.com/learnhit/";
export const LEARNHIT_SOCIAL_INSTAGRAM = "https://www.instagram.com/learnhit/";
export const LEARNHIT_SOCIAL_LINKEDIN = "https://www.linkedin.com/company/76214002/";
export const LEARNHIT_SOCIAL_TIKTOK = "https://vm.tiktok.com/ZM89KJV29/";
export const LEARNHIT_SOCIAL_YOUTUBE = "https://m.youtube.com/channel/UCs-pONJqHRnNJGM6XJ1EpNA";