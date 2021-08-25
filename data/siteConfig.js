module.exports = {
  siteTitle: 'Hi! I\'m Jaycee!',
  siteDescription: ``,
  keyWords: ['jayceebaste', 'jcbaste', 'jaycee'],
  authorName: 'Jaycee Baste',
  twitterUsername: 'jayceebaste',
  githubUsername: 'jacobcharlesbaste',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Developer, Father, Husband, Farmer. As a software developer I am most interested in learning new technologies particularly the blockchain and ecommerce. <br />
    Spent most of my career working on applications primarily developed in .NET Technologies in both C# and VB with Angular in the frontend.<br />
    I recently worked as Senior Systeam Analyst for a capital market corporation of the Singapore government, working on various applications mainly developed in <strong>.NET Core & Angular</strong>`,
  skills: [
    {
      name: '.NET',
      level: 80
    },
    {
      name: 'Angular',
      level: 70
    },
    {
      name: 'Javascript',
      level: 70
    },
    {
      name: 'C#',
      level: 80
    },
    {
      name: 'VB',
      level: 80
    },
    {
      name: 'Git',
      level: 60
    },
    {
      name: 'HTML',
      level: 80
    },
    {
      name: 'CSS',
      level: 60
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Apar Technologies Pte. Ltd. [Singapore]",
      begin: {
        month: 'Aug',
        year: '2018'
      },
      duration: '3 years',
      occupation: "Senior System Analyst",
      description: "As part of the Application Management Support team for a Singapore government corporation. Working on various applications for Financial and Investment Services developed in ASP.NET Core C# and Angular with MS SQL Server and Oracle as Database. Using Git for code version control, Jenkins and Electric Flow for CICD, Control-M and Hangfire for batch job management and automation."
  
    },  {
      company: "I-Access Solutions Pte. Ltd. [Singapore]",
      begin: {
        month: 'Dec',
        year: '2016'
      },
      duration: '2 years',
      occupation: "Software Engineer",
      description: "Part of the product development team working on enhancements and updates of eTeamsV5 System a training and financial management software as service developed in ASP.NET, AngularJS, DevExpress, MVC, MVP, WCF, Web API and  Entity Framework with SQL Server Database and SSRS for reports."
  
    }, {
      company: "Mpyre Software Inc. [Canada]",
      begin: {
        month: 'Nov',
        year: '2009'
      },
      duration: '7 years - Offshore Team Member[Philippines]',
      occupation: "Senior Programmer",
      description: "Worked on the updating and migration of one of the Top SEO automation software SENukeXCr, a desktop application developed in VB6 to VB.NET and C# with server communication scripts in PHP."
    }, {
      company: "Gulf Agency Company [Saudi Arabia]",
      begin: {
        month: 'Feb',
        year: '2007'
      },
      duration: '3 yrs - Offshore Team Member[Philippines]',
      occupation: "Senior .NET Developer",
      description: "Worked on the development and upgrading of enterprise logistics and accounting system project for shipping and marine services division of GAC Saudi Arabia using ASP.NET C# and MS SQL Server as Database."
  
    },{
      company: "University of Mindanao [Philippines]",
      begin: {
        month: 'July',
        year: '2002'
      },
      duration: '4 yrs 10 months',
      occupation: "College Instructor",
      description: "Teaching major Computer Science and Information Technology subjects like Compiler Design, Database Management Systems, Operating Systems, Programming Languages and others."
  
    },
  ],
  portifolio: [
    {
      image: "/images/gatsby-starter-cv.png",
      description: "Gatsby starter CV template",
      url: "https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/"
    },
    {
      image: "/images/awesome-grid.png",
      description: "Responsive grid for ReactJS",
      url: "https://github.com/santosfrancisco/react-awesome-styled-grid"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/jcbaste",
    linkedin: "https://www.linkedin.com/in/jayceebaste/",
    github: "https://github.com/jacobcharlesbaste",
    email: "jayceebaste@yahoo.com"
  },
  siteUrl: 'https://www.jbaste.com',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}