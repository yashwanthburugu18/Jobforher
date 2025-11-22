const jobs = [
  {
  "title": "Maths Teacher / Tutor (Work From Home, 4 AM – 8 AM)",
  "company": "PlanetSpark",
  "location": "Bengaluru (Remote)",
  "description": "Teach mathematics to students during early morning hours (4 AM – 8 AM). Prepare and deliver engaging lessons, assess student performance, and provide constructive feedback to enhance learning outcomes.",
  "salary": "₹15,000 – ₹25,000 / month",
  "link": "https://www.naukri.com/job-listings-maths-teacher-tutor-work-from-home-4am-8am-planetspark-bengaluru-1-to-6-years-080425019244"
},
{
  "title": "English Teacher (Online Tuition Classes)",
  "company": "Mentora",
  "location": "Bengaluru (Remote)",
  "description": "Teach English to students through online tuition classes. Prepare and deliver engaging lessons, assess student performance, and provide constructive feedback to enhance learning outcomes.",
  "salary": "₹20,000 – ₹35,000 / month",
  "link": "https://www.naukri.com/job-listings-english-teacher-mentora-online-tuition-classes-bengaluru-1-to-6-years-310825000108"
},
{
    title: "Business Development / Women /HR Tech Sales / Work From Home",
    company: "jobs territory",
    location: "banglore",
    description: "Drive new client acquisition for RAAS solutions..",
    salary: "₹8-12 LPA",
    link: "https://www.naukri.com/job-listings-social-media-executive-women-returnees-work-from-home-jobs-territory-bengaluru-2-to-7-years-100925044300?src=jobsearchDesk&sid=17585614048328944&xp=1&px=1"
  },
  {
  "title": "IT Recruiter (Contract-to-Hire, Work From Home, Females Only)",
  "company": "Orcapod Consulting Services",
  "location": "Hyderabad (Remote)",
  "description": "Manage end-to-end recruitment processes for IT roles, including sourcing, screening, and shortlisting candidates. Coordinate interviews and facilitate the hiring process. Ensure a positive candidate experience and maintain recruitment metrics.",
  "salary": "Competitive salary based on experience",
  "link": "https://www.naukri.com/job-listings-hiring-for-it-recruiter-contract-to-hire-work-from-home-females-only-orcapod-consulting-services-hyderabad-4-to-5-years-060724007133"
},
{
  "title": "English Teacher / English Tutor (Work From Home)",
  "company": "PlanetSpark",
  "location": "Hyderabad, Jaipur, Bengaluru (Remote)",
  "description": "Teach English to students through interactive online sessions. Develop personalized lesson plans, assess student progress, and provide constructive feedback. Engage students in a fun and effective learning environment.",
  "salary": "₹15,000 – ₹25,000 / month",
  "link": "https://www.naukri.com/job-listings-english-teacher-english-tutor-work-from-home-planetspark-hyderabad-jaipur-bengaluru-0-to-5-years-090125010675"
},
  {
    title: "HR Diversity Specialist",
    company: "Women First Jobs",
    location: "Remote",
    description: "Promote diversity and inclusion in hiring practices across organizations.",
    salary: "₹5-8 LPA",
    link: "https://in.linkedin.com/company/women-first-jobs"
  },
  {
    title: "Women Empowerment Coordinator",
    company: "Empower India",
    location: "Greater Delhi Area",
    description: "Coordinate programs and initiatives focused on women's professional development.",
    salary: "₹4-7 LPA",
    link: "https://in.linkedin.com/jobs/women-empowerment-jobs-greater-delhi-area"
  },
  {
    title: "Product Designer",
    company: "Design Studio",
    location: "Delhi",
    description: "Create user-centered designs for products targeting female users.",
    salary: "₹7-11 LPA",
    link: "https://in.linkedin.com/jobs/delhi-female-jobs"
  },
 {
  "title": "Part-Time Retail – Store Support Team",
  "company": "2COMS",
  "location": "Hyderabad",
  "description": "Assist in daily store operations, manage inventory, and provide customer support. Ensure the store environment is clean and organized.",
  "salary": "₹10,000 – ₹15,000 / month",
  "link": "https://www.naukri.com/job-listings-part-time-retail-join-store-support-team-in-hyderabad-2coms-hyderabad-0-to-5-years-200925011328"
},
{
  "title": "Specialist – Client Solutions",
  "company": "FactSet Systems India Pvt Ltd",
  "location": "Hyderabad",
  "description": "Provide technical support and solutions to clients, ensuring optimal use of FactSet's financial data and analytics platforms. Collaborate with internal teams to address client queries and issues.",
  "salary": "Competitive salary based on experience",
  "link": "https://www.naukri.com/job-listings-specialist-client-solutions-factset-systems-india-pvt-ltd-hyderabad-0-to-1-years-190925501249"
},
{
  "title": "Accounts Payable Associate (Work From Home)",
  "company": "Foundever",
  "location": "Hyderabad (Remote)",
  "description": "Manage and process accounts payable transactions, ensuring timely and accurate payments. Reconcile vendor statements and resolve discrepancies. Collaborate with internal teams to ensure smooth financial operations.",
  "salary": "₹25,000 – ₹35,000 / month",
  "link": "https://www.naukri.com/job-listings-accounts-payable-associate-work-from-home-foundever-hyderabad-1-to-2-years-200925010537"
},
{
  "title": "International BPO Customer Support Executive (CSE/CCE)",
  "company": "Fortuco Resource Solutions",
  "location": "Kolkata, Hyderabad, Bengaluru (Work From Home / Work From Office)",
  "description": "Handle inbound and outbound customer calls, provide information about products and services, resolve customer issues, and ensure customer satisfaction. Work in a dynamic environment with opportunities for growth.",
  "salary": "₹18,000 – ₹30,000 / month",
  "link": "https://www.naukri.com/job-listings-mnc-work-from-home-work-from-office-international-bpo-cse-cce-fortuco-resource-solutions-kolkata-hyderabad-bengaluru-0-to-5-years-130125001158"
}


];

// Render jobs
const jobList = document.getElementById("job-list");

jobs.forEach(job => {
  const jobCard = document.createElement("div");
  jobCard.classList.add("job-card");

  jobCard.innerHTML = `
    <h2 class="job-title">${job.title}</h2>
    <p class="job-company">${job.company}</p>
    <p class="job-location">📍 ${job.location}</p>
    <p class="job-desc">${job.description}</p>
    <p class="salary">💰 ${job.salary}</p>
    <a href="${job.link}" target="_blank" class="apply-btn">Apply Now</a>
  `;

  jobList.appendChild(jobCard);
});
