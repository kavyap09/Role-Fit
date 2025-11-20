const roadmaps={
    /* ===========================
      FRONTEND DEVELOPMENT
=========================== */

html: {
  title: "HTML Roadmap",
  steps: [
    "Learn basic tags, structure, attributes",
    "Understand semantic HTML and accessibility",
    "Learn forms, tables, multimedia elements",
    "Practice SEO-friendly markup",
    "Build 3–4 static pages"
  ],
  youtube: "https://www.youtube.com/watch?v=916GWv2Qs08",
  website: "https://developer.mozilla.org/en-US/docs/Web/HTML"
},

css: {
  title: "CSS Roadmap",
  steps: [
    "Learn CSS selectors, margin, padding, borders",
    "Master Flexbox and CSS Grid",
    "Learn transitions, animations, transforms",
    "Understand responsive design with media queries",
    "Clone 2–3 modern landing pages"
  ],
  youtube: "https://www.youtube.com/watch?v=OXGznpKZ_sA",
  website: "https://developer.mozilla.org/en-US/docs/Web/CSS"
},

javascript: {
  title: "JavaScript Roadmap",
  steps: [
    "Learn variables, data types, loops, functions",
    "Understand DOM manipulation & events",
    "Learn ES6+ features (let/const, promises, arrow functions)",
    "Study async/await & APIs",
    "Build 4–5 JavaScript projects"
  ],
  youtube: "https://www.youtube.com/watch?v=SBmSRK3feww",
  website: "https://javascript.info/"
},

typescript: {
  title: "TypeScript Roadmap",
  steps: [
    "Learn basics: types, interfaces, functions",
    "Understand generics & enums",
    "Learn type narrowing & utility types",
    "Integrate TypeScript into React/Node projects",
    "Build at least 2 TS-based apps"
  ],
  youtube: "https://www.youtube.com/watch?v=gieEQFIfgYc",
  website: "https://www.typescriptlang.org/docs/"
},

react: {
  title: "React Roadmap",
  steps: [
    "Learn components, props, state",
    "Master hooks: useState, useEffect",
    "Learn routing using React Router",
    "Practice API calls with fetch/axios",
    "Build 2–3 React projects"
  ],
  youtube: "https://www.youtube.com/watch?v=bMknfKXIFA8",
  website: "https://react.dev/learn"
},

"next.js": {
  title: "Next.js Roadmap",
  steps: [
    "Understand pages, routing & components",
    "Learn server-side rendering (SSR)",
    "Understand API routes & middleware",
    "Learn data fetching (getServerSideProps)",
    "Build a full-stack Next.js app"
  ],
  youtube: "https://www.youtube.com/watch?v=I7CfaDYzTVM",
  website: "https://nextjs.org/docs"
},

redux: {
  title: "Redux Roadmap",
  steps: [
    "Learn store, actions, reducers",
    "Understand Redux Toolkit",
    "Learn async Redux using Thunk",
    "Integrate Redux with React",
    "Build a real-world state-managed project"
  ],
  youtube: "https://www.youtube.com/watch?v=poQXNp9ItL4",
  website: "https://redux.js.org/tutorials/essentials/part-1-overview-concepts"
},

tailwind: {
  title: "Tailwind CSS Roadmap",
  steps: [
    "Learn utility-first styling",
    "Understand layout using Flex and Grid",
    "Learn responsive breakpoints",
    "Practice building UI components",
    "Recreate modern landing pages"
  ],
  youtube: "https://www.youtube.com/watch?v=lCxcTsOHrjo",
  website: "https://tailwindcss.com/docs"
},

bootstrap: {
  title: "Bootstrap Roadmap",
  steps: [
    "Learn grid system & layout",
    "Use pre-built components",
    "Customize themes",
    "Build responsive pages quickly",
    "Clone a Bootstrap template"
  ],
  youtube: "https://www.youtube.com/watch?v=-qfEOE4vtxE",
  website: "https://getbootstrap.com/docs/"
},

sass: {
  title: "SASS Roadmap",
  steps: [
    "Learn variables, nesting, mixins",
    "Understand partials & modules",
    "Learn SASS functions",
    "Use SASS with React/Vite",
    "Build component-level SASS architecture"
  ],
  youtube: "https://www.youtube.com/watch?v=Zz6eOVaaelI",
  website: "https://sass-lang.com/guide/"
},

jquery: {
  title: "jQuery Roadmap",
  steps: [
    "Learn basic selectors",
    "Work with DOM methods",
    "Learn event handling",
    "Do simple animations",
    "Build small UI widgets"
  ],
  youtube: "https://www.youtube.com/watch?v=hMxGhHNOkCU",
  website: "https://learn.jquery.com/"
},

vite: {
  title: "Vite Roadmap",
  steps: [
    "Learn Vite project setup",
    "Understand hot module replacement",
    "Configure plugins",
    "Set up React/TS with Vite",
    "Deploy Vite apps"
  ],
  youtube: "https://www.youtube.com/watch?v=2ETzYC_kAyw",
  website: "https://vitejs.dev/guide/"
},

webpack: {
  title: "Webpack Roadmap",
  steps: [
    "Learn entry, output, loaders",
    "Understand bundling & dev server",
    "Use plugins for optimization",
    "Practice code splitting",
    "Configure React with Webpack manually"
  ],
  youtube: "https://www.youtube.com/watch?v=IZGNcSuwBZs",
  website: "https://webpack.js.org/concepts/"
},

"responsive design": {
  title: "Responsive Design Roadmap",
  steps: [
    "Learn breakpoints & media queries",
    "Master flexbox & grid adaptation",
    "Understand mobile-first design",
    "Test layouts on multiple screens",
    "Build 3 responsive pages"
  ],
  youtube: "https://www.youtube.com/watch?v=srvUrASNj0s",
  website: "https://www.freecodecamp.org/news/responsive-web-design/"
},

"ui development": {
  title: "UI Development Roadmap",
  steps: [
    "Learn layout & color theory",
    "Understand spacing & typography",
    "Build reusable components",
    "Study interaction patterns",
    "Clone modern websites"
  ],
  youtube: "https://www.youtube.com/watch?v=JtYF-efdmPQ",
  website: "https://www.interaction-design.org/literature/topics/ui-design"
},
/* ===========================
      BACKEND DEVELOPMENT
=========================== */

node: {
  title: "Node.js Roadmap",
  steps: [
    "Learn JavaScript fundamentals for backend",
    "Understand Node modules, events, async programming",
    "Learn how to build simple servers",
    "Work with file system, streams & buffers",
    "Build small backend apps"
  ],
  youtube: "https://www.youtube.com/watch?v=Oe421EPjeBE",
  website: "https://nodejs.dev/en/learn/"
},

"node.js": {
  title: "Node.js Roadmap",
  steps: [
    "Learn Node basics: modules, NPM, event loop",
    "Understand Express framework",
    "Build REST APIs",
    "Connect to MongoDB/MySQL",
    "Add authentication & middleware"
  ],
  youtube: "https://www.youtube.com/watch?v=Oe421EPjeBE",
  website: "https://nodejs.org/en/docs"
},

express: {
  title: "Express.js Roadmap",
  steps: [
    "Learn routing & middleware",
    "Understand request/response cycle",
    "Build CRUD APIs",
    "Error handling & validation",
    "Integrate authentication (JWT)"
  ],
  youtube: "https://www.youtube.com/watch?v=G8uL0lFFoN0",
  website: "https://expressjs.com/"
},

"rest api": {
  title: "REST API Roadmap",
  steps: [
    "Learn HTTP methods (GET, POST, PUT, DELETE)",
    "Understand status codes & headers",
    "Build CRUD APIs",
    "Use Postman for API testing",
    "Secure APIs with JWT & validation"
  ],
  youtube: "https://www.youtube.com/watch?v=Q-BpqyOT3a8",
  website: "https://restfulapi.net/"
},

graphql: {
  title: "GraphQL Roadmap",
  steps: [
    "Learn queries, mutations & resolvers",
    "Understand schema design",
    "Connect GraphQL with Node.js",
    "Use Apollo Server",
    "Build simple GraphQL backend"
  ],
  youtube: "https://www.youtube.com/watch?v=ed8SzALpx1Q",
  website: "https://graphql.org/learn/"
},

mongodb: {
  title: "MongoDB Roadmap",
  steps: [
    "Learn basic CRUD operations",
    "Understand BSON & schema design",
    "Use Mongoose for modeling",
    "Practice aggregation pipelines",
    "Integrate MongoDB with Node.js"
  ],
  youtube: "https://www.youtube.com/watch?v=4n6KPm_0xY0",
  website: "https://www.mongodb.com/docs/"
},

mongoose: {
  title: "Mongoose Roadmap",
  steps: [
    "Learn schema definitions",
    "Understand models & documents",
    "Use validation & middleware",
    "Practice population & queries",
    "Integrate with Express APIs"
  ],
  youtube: "https://www.youtube.com/watch?v=7Nf0g_Rv0sw",
  website: "https://mongoosejs.com/docs/"
},

mysql: {
  title: "MySQL Roadmap",
  steps: [
    "Learn CRUD queries",
    "Study JOINS & relationships",
    "Understand indexing & constraints",
    "Learn stored procedures",
    "Connect Node.js with MySQL"
  ],
  youtube: "https://www.youtube.com/watch?v=7S_tz1z_5bA",
  website: "https://dev.mysql.com/doc/"
},

postgresql: {
  title: "PostgreSQL Roadmap",
  steps: [
    "Learn SQL basics",
    "Understand indexes & constraints",
    "Study ACID properties",
    "Learn JSON & advanced querying",
    "Connect to backend applications"
  ],
  youtube: "https://www.youtube.com/watch?v=qw--VYLpxG4",
  website: "https://www.postgresql.org/docs/"
},

sql: {
  title: "SQL Roadmap",
  steps: [
    "Learn SELECT, INSERT, UPDATE, DELETE",
    "Understand JOINS & GROUP BY",
    "Learn subqueries",
    "Use aggregate functions",
    "Work on real datasets"
  ],
  youtube: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
  website: "https://www.w3schools.com/sql/"
},

nosql: {
  title: "NoSQL Roadmap",
  steps: [
    "Understand document-based databases",
    "Learn schema design",
    "Perform CRUD operations",
    "Study indexing & performance",
    "Build NoSQL-based APIs"
  ],
  youtube: "https://www.youtube.com/watch?v=0buKQHokLK8",
  website: "https://www.mongodb.com/nosql-explained"
},

redis: {
  title: "Redis Roadmap",
  steps: [
    "Learn caching fundamentals",
    "Use key-value storage",
    "Understand TTL & pub/sub",
    "Integrate Redis with Node.js",
    "Implement caching in APIs"
  ],
  youtube: "https://www.youtube.com/watch?v=Hbt56gFj998",
  website: "https://redis.io/docs/"
},

jwt: {
  title: "JWT Authentication Roadmap",
  steps: [
    "Learn authentication basics",
    "Understand JWT structure",
    "Generate tokens in backend",
    "Protect routes with middleware",
    "Refresh tokens & expiry handling"
  ],
  youtube: "https://www.youtube.com/watch?v=7Q17ubqLfaM",
  website: "https://jwt.io/introduction"
},

"session management": {
  title: "Session Management Roadmap",
  steps: [
    "Learn cookies & sessions",
    "Understand server-side storage",
    "Implement login sessions",
    "Use secure cookies",
    "Build session-based auth"
  ],
  youtube: "https://www.youtube.com/watch?v=2jqok-WgelI",
  website: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"
},

"api security": {
  title: "API Security Roadmap",
  steps: [
    "Learn encryption & hashing",
    "Validate & sanitize data",
    "Use JWT & OAuth",
    "Rate limiting & API keys",
    "Apply OWASP best practices"
  ],
  youtube: "https://www.youtube.com/watch?v=7_S1G5H3s7A",
  website: "https://owasp.org/www-project-api-security/"
},

serverless: {
  title: "Serverless Roadmap",
  steps: [
    "Learn cloud functions",
    "Understand triggers & events",
    "Deploy simple serverless functions",
    "Use AWS Lambda or Firebase",
    "Build serverless APIs"
  ],
  youtube: "https://www.youtube.com/watch?v=Node8Jp2lXI",
  website: "https://aws.amazon.com/lambda/"
},

microservices: {
  title: "Microservices Roadmap",
  steps: [
    "Learn service decomposition",
    "Use independent services & databases",
    "Implement communication (REST/Queue)",
    "Add load balancing & monitoring",
    "Deploy services separately"
  ],
  youtube: "https://www.youtube.com/watch?v=j1gU2oGFayY",
  website: "https://microservices.io/"
},
/* ===========================
     FULL STACK DEVELOPMENT
=========================== */

MERN: {
  title: "MERN Full Stack Roadmap",
  steps: [
    "Learn React fundamentals (components, hooks, routing)",
    "Build REST APIs with Node.js & Express",
    "Use MongoDB with Mongoose for data modeling",
    "Learn JWT authentication & protected routes",
    "Build and deploy a full MERN project"
  ],
  youtube: "https://www.youtube.com/watch?v=7CqJlxBYj-M",
  website: "https://roadmap.sh/full-stack"
},

MEAN: {
  title: "MEAN Stack Roadmap",
  steps: [
    "Learn Angular basics (components, routing, forms)",
    "Build Node.js + Express backend APIs",
    "Use MongoDB for CRUD operations",
    "Integrate frontend with backend via services",
    "Deploy MEAN applications"
  ],
  youtube: "https://www.youtube.com/watch?v=2OHbjep_WjQ",
  website: "https://angular.io/guide/what-is-angular"
},

"api integration": {
  title: "API Integration Roadmap",
  steps: [
    "Learn fetch/axios for API calls",
    "Understand GET, POST, PUT, DELETE methods",
    "Handle errors, loading states, async logic",
    "Integrate APIs into React/Frontend",
    "Secure API keys & implement authentication"
  ],
  youtube: "https://www.youtube.com/watch?v=0sSYmRImgRY",
  website: "https://www.freecodecamp.org/news/how-to-use-apis-in-javascript/"
},

authentication: {
  title: "Authentication Roadmap",
  steps: [
    "Learn login & signup flows",
    "Understand password hashing (bcrypt)",
    "Implement JWT token generation",
    "Store tokens securely (HTTP-only cookies)",
    "Protect backend API routes"
  ],
  youtube: "https://www.youtube.com/watch?v=7Q17ubqLfaM",
  website: "https://www.geeksforgeeks.org/authentication-types-in-web-application/"
},

authorization: {
  title: "Authorization Roadmap",
  steps: [
    "Learn roles & permissions",
    "Implement role-based authorization in backend",
    "Protect admin-only APIs",
    "Restrict UI features based on roles",
    "Use middleware for route guarding"
  ],
  youtube: "https://www.youtube.com/watch?v=K0v_6HjK_Vo",
  website: "https://www.okta.com/identity-101/authorization/"
},
/* ===========================
      MOBILE DEVELOPMENT
=========================== */

flutter: {
  title: "Flutter Roadmap",
  steps: [
    "Learn Dart fundamentals (variables, OOP, async)",
    "Understand Flutter widgets & UI tree",
    "Build basic screens and navigation",
    "Learn state management (Provider / Bloc)",
    "Build and deploy a complete mobile app"
  ],
  youtube: "https://www.youtube.com/watch?v=VPvVD8t02U8",
  website: "https://docs.flutter.dev/"
},

"react native": {
  title: "React Native Roadmap",
  steps: [
    "Understand React components & hooks",
    "Learn React Native UI components",
    "Work with navigation & screens",
    "Use APIs and async storage",
    "Build and publish a mobile application"
  ],
  youtube: "https://www.youtube.com/watch?v=0-S5a0eXPoc",
  website: "https://reactnative.dev/docs/getting-started"
},

android: {
  title: "Android Development Roadmap",
  steps: [
    "Learn Java/Kotlin basics",
    "Understand Android Studio & project structure",
    "Build UI layouts using XML",
    "Learn activities, fragments & navigation",
    "Build a complete Android app"
  ],
  youtube: "https://www.youtube.com/watch?v=Ud5xKCYQTjM",
  website: "https://developer.android.com/guide"
},

kotlin: {
  title: "Kotlin for Android Roadmap",
  steps: [
    "Learn Kotlin syntax & OOP concepts",
    "Understand coroutines & async programming",
    "Work with Android Studio using Kotlin",
    "Build Kotlin-based Android apps",
    "Integrate APIs & local storage"
  ],
  youtube: "https://www.youtube.com/watch?v=F9UC9DY-vIU",
  website: "https://kotlinlang.org/docs/home.html"
},

swift: {
  title: "Swift & iOS Development Roadmap",
  steps: [
    "Learn Swift basics (variables, OOP, structs)",
    "Understand Xcode & iOS project structure",
    "Build UI using SwiftUI",
    "Integrate APIs & handle navigation",
    "Build and publish an iOS app"
  ],
  youtube: "https://www.youtube.com/watch?v=Ulp1Kimblg0",
  website: "https://developer.apple.com/swift/"
},
/* ===========================
        DATA ANALYST
=========================== */

excel: {
  title: "Excel Roadmap",
  steps: [
    "Learn basic formulas and functions",
    "Understand tables, formatting and charts",
    "Use conditional formatting and filters",
    "Learn data cleaning techniques",
    "Create dashboards and reports"
  ],
  youtube: "https://www.youtube.com/watch?v=Vl0H-qTclOg",
  website: "https://exceljet.net/"
},

"advanced excel": {
  title: "Advanced Excel Roadmap",
  steps: [
    "Master VLOOKUP, INDEX, MATCH",
    "Work with Pivot Tables",
    "Learn data validation & advanced formatting",
    "Use Power Query for data cleaning",
    "Automate tasks with macros"
  ],
  youtube: "https://www.youtube.com/watch?v=9WUo5ZudYW8",
  website: "https://support.microsoft.com/en-us/excel"
},

"pivot table": {
  title: "Pivot Table Roadmap",
  steps: [
    "Learn how to create pivot tables",
    "Summarize large datasets",
    "Use filters and slicers",
    "Create pivot charts",
    "Build interactive dashboards"
  ],
  youtube: "https://www.youtube.com/watch?v=VKWUYk6C1Rw",
  website: "https://exceljet.net/pivot-tables"
},

vlookup: {
  title: "VLOOKUP Roadmap",
  steps: [
    "Understand table structure",
    "Learn VLOOKUP syntax",
    "Use approximate vs exact match",
    "Handle errors & nested lookups",
    "Practice real-world examples"
  ],
  youtube: "https://www.youtube.com/watch?v=2Jt4cOPvYpQ",
  website: "https://www.wallstreetmojo.com/vlookup/"
},

"power bi": {
  title: "Power BI Roadmap",
  steps: [
    "Learn Power Query for data cleaning",
    "Create visualizations and dashboards",
    "Understand DAX formulas",
    "Build relationships & data models",
    "Publish reports to Power BI Service"
  ],
  youtube: "https://www.youtube.com/watch?v=g17b6xD1kDg",
  website: "https://learn.microsoft.com/en-us/power-bi/"
},

tableau: {
  title: "Tableau Roadmap",
  steps: [
    "Learn data connections and sources",
    "Understand Tableau worksheets",
    "Build visualizations",
    "Create dashboards & stories",
    "Publish and share reports"
  ],
  youtube: "https://www.youtube.com/watch?v=TPMlZxRRaBQ",
  website: "https://www.tableau.com/learn/training"
},

sql: {
  title: "SQL Roadmap for Data Analysts",
  steps: [
    "Learn SELECT queries",
    "Use JOINS and filtering",
    "Understand GROUP BY and HAVING",
    "Write subqueries",
    "Practice on real datasets"
  ],
  youtube: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
  website: "https://www.w3schools.com/sql/"
},

statistics: {
  title: "Statistics Roadmap",
  steps: [
    "Learn mean, median, mode, standard deviation",
    "Understand probability basics",
    "Study distributions & sampling",
    "Learn hypothesis testing",
    "Use statistics in data-driven decisions"
  ],
  youtube: "https://www.youtube.com/watch?v=xxpc-HPKN28",
  website: "https://www.statisticshowto.com/"
},

"data visualization": {
  title: "Data Visualization Roadmap",
  steps: [
    "Learn charts: bar, line, scatter, heatmaps",
    "Understand design principles",
    "Use visualization tools (Power BI/Tableau)",
    "Tell stories with data",
    "Build dashboards"
  ],
  youtube: "https://www.youtube.com/watch?v=3Xx1-DhC1Zk",
  website: "https://www.datavizproject.com/"
},

"data cleaning": {
  title: "Data Cleaning Roadmap",
  steps: [
    "Learn handling missing values",
    "Detect and remove duplicates",
    "Fix inconsistent formatting",
    "Normalize and transform data",
    "Use Power Query or Python for automation"
  ],
  youtube: "https://www.youtube.com/watch?v=N6PZAcJdtAQ",
  website: "https://www.dataquest.io/blog/data-cleaning/"
},

"data wrangling": {
  title: "Data Wrangling Roadmap",
  steps: [
    "Collect and structure raw data",
    "Use python/pandas or Power Query",
    "Format and transform datasets",
    "Merge and join multiple data sources",
    "Prepare datasets for analysis"
  ],
  youtube: "https://www.youtube.com/watch?v=OTW5lH3aZyE",
  website: "https://www.analyticsvidhya.com/blog/data-wrangling/"
},

reporting: {
  title: "Reporting & Dashboard Roadmap",
  steps: [
    "Learn KPI definitions",
    "Build automated reports",
    "Use Power BI/Tableau dashboards",
    "Understand storytelling techniques",
    "Share and publish reports effectively"
  ],
  youtube: "https://www.youtube.com/watch?v=3RPmdAh0mYU",
  website: "https://www.microsoft.com/en-us/power-platform"
},

"business intelligence": {
  title: "Business Intelligence Roadmap",
  steps: [
    "Learn basics of BI and ETL",
    "Understand data modeling",
    "Build dashboards in Power BI/Tableau",
    "Create DAX / SQL transformations",
    "Deploy BI solutions to users"
  ],
  youtube: "https://www.youtube.com/watch?v=QRYB9KpLaJ0",
  website: "https://www.tableau.com/learn/articles/business-intelligence"
},
/* ===========================
     DATA SCIENCE / ML / AI
=========================== */

python: {
  title: "Python Roadmap",
  steps: [
    "Learn Python basics (variables, loops, functions)",
    "Understand data types, lists, tuples, sets, dictionaries",
    "Learn OOP and modules",
    "Work with libraries (NumPy, Pandas)",
    "Build small data analysis projects"
  ],
  youtube: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
  website: "https://www.w3schools.com/python/"
},

numpy: {
  title: "NumPy Roadmap",
  steps: [
    "Learn arrays and vector operations",
    "Understand indexing & slicing",
    "Learn broadcasting rules",
    "Work with mathematical operations",
    "Use NumPy for data preprocessing"
  ],
  youtube: "https://www.youtube.com/watch?v=QUT1VHiLmmI",
  website: "https://numpy.org/doc/"
},

pandas: {
  title: "Pandas Roadmap",
  steps: [
    "Learn DataFrames & Series",
    "Perform filtering, grouping & merging",
    "Handle missing data",
    "Work with dates and time-series",
    "Build real datasets cleaning scripts"
  ],
  youtube: "https://www.youtube.com/watch?v=vmEHCJofslg",
  website: "https://pandas.pydata.org/docs/"
},

matplotlib: {
  title: "Matplotlib Roadmap",
  steps: [
    "Learn basic plots (line, bar, scatter)",
    "Customize graphs & styles",
    "Plot multiple datasets",
    "Work with subplots",
    "Visualize trends from datasets"
  ],
  youtube: "https://www.youtube.com/watch?v=3Xc3CA655Y4",
  website: "https://matplotlib.org/stable/"
},

seaborn: {
  title: "Seaborn Roadmap",
  steps: [
    "Learn statistical visualizations",
    "Use heatmaps, boxplots & pairplots",
    "Customize color palettes",
    "Work with grouped visualizations",
    "Create insights-rich dashboards"
  ],
  youtube: "https://www.youtube.com/watch?v=6GUZXDef2U0",
  website: "https://seaborn.pydata.org/"
},

"scikit-learn": {
  title: "Scikit-Learn Roadmap",
  steps: [
    "Learn preprocessing & train-test split",
    "Build ML models (Regression, Classification)",
    "Evaluate models with metrics",
    "Tune hyperparameters",
    "Deploy small ML workflows"
  ],
  youtube: "https://www.youtube.com/watch?v=0Lt9w-BxKFQ",
  website: "https://scikit-learn.org/stable/"
},

"machine learning": {
  title: "Machine Learning Roadmap",
  steps: [
    "Understand supervised vs unsupervised learning",
    "Learn regression & classification algorithms",
    "Master clustering & dimensionality reduction",
    "Train, test & validate models",
    "Deploy ML models in apps"
  ],
  youtube: "https://www.youtube.com/watch?v=Gv9_4yMHFhI",
  website: "https://www.geeksforgeeks.org/machine-learning/"
},

"deep learning": {
  title: "Deep Learning Roadmap",
  steps: [
    "Learn basics of neural networks",
    "Understand activation functions & backpropagation",
    "Work with TensorFlow/PyTorch",
    "Build CNN, RNN simple models",
    "Train models on image/text datasets"
  ],
  youtube: "https://www.youtube.com/watch?v=aircAruvnKk",
  website: "https://www.tensorflow.org/learn"
},

nlp: {
  title: "NLP Roadmap",
  steps: [
    "Study text preprocessing",
    "Learn tokenization & embeddings",
    "Use NLP libraries (NLTK, SpaCy)",
    "Build sentiment analysis models",
    "Work with transformers"
  ],
  youtube: "https://www.youtube.com/watch?v=8u9iNmbKpG8",
  website: "https://www.nltk.org/"
},

"data preprocessing": {
  title: "Data Preprocessing Roadmap",
  steps: [
    "Handle missing values",
    "Scale and normalize features",
    "Encode categorical variables",
    "Remove outliers",
    "Prepare clean datasets for ML models"
  ],
  youtube: "https://www.youtube.com/watch?v=xi0vhXFPegw",
  website: "https://www.geeksforgeeks.org/data-preprocessing/"
},

"model deployment": {
  title: "ML Model Deployment Roadmap",
  steps: [
    "Learn saving/loading models",
    "Use Flask/FastAPI for deployment",
    "Create model API endpoints",
    "Test deployed ML service",
    "Deploy to cloud (Render/Heroku/AWS)"
  ],
  youtube: "https://www.youtube.com/watch?v=UbCWoMf80PY",
  website: "https://fastapi.tiangolo.com/"
},

jupyter: {
  title: "Jupyter Notebook Roadmap",
  steps: [
    "Learn notebook cells & markdown",
    "Import datasets & visualize",
    "Run ML experiments",
    "Document insights",
    "Build data science workflows"
  ],
  youtube: "https://www.youtube.com/watch?v=HW29067qVWk",
  website: "https://jupyter.org/"
},

tensorflow: {
  title: "TensorFlow Roadmap",
  steps: [
    "Learn tensors operations",
    "Build basic neural networks",
    "Train models on datasets",
    "Use Keras layers & optimizers",
    "Build & deploy deep learning models"
  ],
  youtube: "https://www.youtube.com/watch?v=tPYj3fFJGjk",
  website: "https://www.tensorflow.org/tutorials"
},

pytorch: {
  title: "PyTorch Roadmap",
  steps: [
    "Understand tensors and autograd",
    "Build neural networks",
    "Train deep learning models",
    "Use torchvision for image tasks",
    "Deploy PyTorch models"
  ],
  youtube: "https://www.youtube.com/watch?v=V_xro1bcAuA",
  website: "https://pytorch.org/tutorials/"
},
/* ===========================
         TESTING / QA
=========================== */

"manual testing": {
  title: "Manual Testing Roadmap",
  steps: [
    "Learn software development lifecycle (SDLC & STLC)",
    "Understand test case writing & bug reporting",
    "Practice functional, usability & regression testing",
    "Work with test scenarios and test plans",
    "Use tools like JIRA or Bugzilla"
  ],
  youtube: "https://www.youtube.com/watch?v=1VNrQF7Pq9U",
  website: "https://www.guru99.com/manual-testing.html"
},

"automation testing": {
  title: "Automation Testing Roadmap",
  steps: [
    "Learn any programming language (Java/Python/JS)",
    "Understand automation frameworks",
    "Learn Selenium or Cypress",
    "Write automated test cases",
    "Integrate automation with CI/CD"
  ],
  youtube: "https://www.youtube.com/watch?v=FRn5J31eAMw",
  website: "https://www.selenium.dev/documentation/"
},

selenium: {
  title: "Selenium Roadmap",
  steps: [
    "Learn Selenium WebDriver basics",
    "Work with locators & elements",
    "Write automation scripts in Java/Python",
    "Use TestNG/JUnit frameworks",
    "Execute and report test automation"
  ],
  youtube: "https://www.youtube.com/watch?v=VdNWHAiYjC0",
  website: "https://www.selenium.dev/"
},

postman: {
  title: "Postman API Testing Roadmap",
  steps: [
    "Learn REST API basics",
    "Send GET/POST/PUT/DELETE requests",
    "Use parameters & authorization",
    "Write automated tests in Postman",
    "Create collections and run test suites"
  ],
  youtube: "https://www.youtube.com/watch?v=VywxIQ2ZXw4",
  website: "https://learning.postman.com/"
},

cypress: {
  title: "Cypress Roadmap",
  steps: [
    "Install Cypress and explore test runner",
    "Learn DOM testing & selectors",
    "Write end-to-end UI tests",
    "Stub network requests",
    "Create reusable test automation suites"
  ],
  youtube: "https://www.youtube.com/watch?v=7N63cMKosIE",
  website: "https://docs.cypress.io/guides/overview/why-cypress"
},

junit: {
  title: "JUnit Testing Roadmap",
  steps: [
    "Learn unit testing basics",
    "Write test cases using JUnit",
    "Use assertions & annotations",
    "Mock external dependencies",
    "Integrate tests with CI/CD"
  ],
  youtube: "https://www.youtube.com/watch?v=vZm0lHciFsQ",
  website: "https://junit.org/junit5/docs/current/user-guide/"
},

"test cases": {
  title: "Test Case Writing Roadmap",
  steps: [
    "Understand test case structure",
    "Write positive & negative test cases",
    "Learn boundary value analysis",
    "Perform equivalence partitioning",
    "Prepare test reports"
  ],
  youtube: "https://www.youtube.com/watch?v=7rJjvux3F68",
  website: "https://www.guru99.com/test-case.html"
},

"bug reporting": {
  title: "Bug Reporting Roadmap",
  steps: [
    "Learn how to identify bugs",
    "Document reproducible steps",
    "Capture logs, screenshots & environment details",
    "Use JIRA/Bugzilla for reporting",
    "Communicate bugs clearly in test cycles"
  ],
  youtube: "https://www.youtube.com/watch?v=8rCw5q1K8Eg",
  website: "https://www.atlassian.com/software/jira"
},

"quality assurance": {
  title: "Quality Assurance Roadmap",
  steps: [
    "Understand QA processes and documentation",
    "Learn verification vs validation",
    "Perform quality checks throughout SDLC",
    "Learn QA metrics",
    "Work with test strategy and QA planning"
  ],
  youtube: "https://www.youtube.com/watch?v=Hw-oDNQj2C4",
  website: "https://www.guru99.com/quality-assurance.html"
},

"api testing": {
  title: "API Testing Roadmap",
  steps: [
    "Understand APIs & endpoints",
    "Test APIs with Postman",
    "Validate parameters and headers",
    "Write automated API tests",
    "Use Newman / CI tools for API test automation"
  ],
  youtube: "https://www.youtube.com/watch?v=Czmiwn8glxQ",
  website: "https://learning.postman.com/docs/"
},

"performance testing": {
  title: "Performance Testing Roadmap",
  steps: [
    "Learn load vs stress testing",
    "Use JMeter or Locust",
    "Create performance test scripts",
    "Analyze performance metrics",
    "Optimize application performance"
  ],
  youtube: "https://www.youtube.com/watch?v=1g_RF3lN5G0",
  website: "https://jmeter.apache.org/usermanual/"
},
/* ===========================
             DEVOPS
=========================== */

git: {
  title: "Git Roadmap",
  steps: [
    "Learn basic commands (init, add, commit, push)",
    "Understand branches & merging",
    "Resolve merge conflicts",
    "Work with pull requests",
    "Collaborate using Git workflows"
  ],
  youtube: "https://www.youtube.com/watch?v=2ReR1YJrNOM",
  website: "https://git-scm.com/doc"
},

github: {
  title: "GitHub Roadmap",
  steps: [
    "Learn repositories & branches",
    "Work with PRs and issues",
    "Understand GitHub Actions basics",
    "Collaborate using forks",
    "Automate workflows"
  ],
  youtube: "https://www.youtube.com/watch?v=RGOj5yH7evk",
  website: "https://docs.github.com/en"
},

gitlab: {
  title: "GitLab Roadmap",
  steps: [
    "Learn GitLab repositories & pipelines",
    "Understand GitLab CI/CD",
    "Create automated deployment pipelines",
    "Use GitLab runner & jobs",
    "Manage project permissions"
  ],
  youtube: "https://www.youtube.com/watch?v=EW_t8GOq_fc",
  website: "https://docs.gitlab.com/ee/"
},

bitbucket: {
  title: "Bitbucket Roadmap",
  steps: [
    "Learn repository management",
    "Work with pipelines",
    "Integrate with Jira",
    "Configure deployments",
    "Use Bitbucket CI/CD"
  ],
  youtube: "https://www.youtube.com/watch?v=O3b6a1J7W5c",
  website: "https://support.atlassian.com/bitbucket-cloud/"
},

docker: {
  title: "Docker Roadmap",
  steps: [
    "Learn containers & images",
    "Build Dockerfiles",
    "Use Docker Compose",
    "Manage containers & volumes",
    "Containerize apps"
  ],
  youtube: "https://www.youtube.com/watch?v=Gjnup-PuquQ",
  website: "https://docs.docker.com/get-started/"
},

kubernetes: {
  title: "Kubernetes Roadmap",
  steps: [
    "Learn pods, deployments & services",
    "Use kubectl for cluster commands",
    "Work with YAML configs",
    "Deploy applications to clusters",
    "Learn autoscaling & load balancing"
  ],
  youtube: "https://www.youtube.com/watch?v=X48VuDVv0do",
  website: "https://kubernetes.io/docs/home/"
},

jenkins: {
  title: "Jenkins Roadmap",
  steps: [
    "Install and set up Jenkins",
    "Build pipelines using Freestyle jobs",
    "Use Jenkinsfile for automation",
    "Integrate Git & deployments",
    "Run CI/CD pipelines"
  ],
  youtube: "https://www.youtube.com/watch?v=6YZvp2GwT0A",
  website: "https://www.jenkins.io/doc/"
},

"ci/cd": {
  title: "CI/CD Roadmap",
  steps: [
    "Understand continuous integration",
    "Learn continuous delivery pipelines",
    "Automate builds & tests",
    "Deploy apps automatically",
    "Monitor and optimize pipelines"
  ],
  youtube: "https://www.youtube.com/watch?v=scEDHsr3APg",
  website: "https://www.atlassian.com/continuous-delivery"
},

terraform: {
  title: "Terraform Roadmap",
  steps: [
    "Learn IaC concepts",
    "Write basic Terraform configs",
    "Deploy cloud resources",
    "Manage variables & state",
    "Automate infrastructure"
  ],
  youtube: "https://www.youtube.com/watch?v=V4waklkBC38",
  website: "https://developer.hashicorp.com/terraform/docs"
},

ansible: {
  title: "Ansible Roadmap",
  steps: [
    "Learn configuration management basics",
    "Understand inventory & playbooks",
    "Write YAML automation tasks",
    "Use roles for automation",
    "Automate server provisioning"
  ],
  youtube: "https://www.youtube.com/watch?v=wgQ3rHFTM4E",
  website: "https://docs.ansible.com/"
},

monitoring: {
  title: "Monitoring Roadmap",
  steps: [
    "Learn metrics, logs & alerts",
    "Use Prometheus for monitoring",
    "Use Grafana dashboards",
    "Monitor server health",
    "Set up alerting systems"
  ],
  youtube: "https://www.youtube.com/watch?v=Gka_z1XGIE8",
  website: "https://prometheus.io/docs/introduction/overview/"
},

linux: {
  title: "Linux Roadmap",
  steps: [
    "Learn basic commands & navigation",
    "Manage files and permissions",
    "Configure servers & processes",
    "Use shell scripting",
    "Deploy applications on Linux"
  ],
  youtube: "https://www.youtube.com/watch?v=gd7BXuUQ91w",
  website: "https://ubuntu.com/tutorials"
},

prometheus: {
  title: "Prometheus Roadmap",
  steps: [
    "Understand time-series metrics",
    "Install and run Prometheus server",
    "Write PromQL queries",
    "Create recording rules",
    "Integrate with Grafana"
  ],
  youtube: "https://www.youtube.com/watch?v=h4Sl21AKiDg",
  website: "https://prometheus.io/docs/introduction/overview/"
},

grafana: {
  title: "Grafana Roadmap",
  steps: [
    "Install & set up Grafana",
    "Connect data sources",
    "Build dashboards",
    "Use alerts",
    "Monitor apps visually"
  ],
  youtube: "https://www.youtube.com/watch?v=Q0nfplUE4q8",
  website: "https://grafana.com/docs/"
},
/* ===========================
       CLOUD ENGINEERING
=========================== */

aws: {
  title: "AWS Cloud Roadmap",
  steps: [
    "Learn basics of cloud computing (IaaS, PaaS, SaaS)",
    "Understand EC2, S3, IAM, VPC",
    "Deploy simple applications on AWS",
    "Use RDS, Lambda, CloudWatch",
    "Prepare for AWS certifications"
  ],
  youtube: "https://www.youtube.com/watch?v=ulprqHHWlng",
  website: "https://aws.amazon.com/getting-started/"
},

azure: {
  title: "Azure Cloud Roadmap",
  steps: [
    "Learn Azure portal & core services",
    "Understand Virtual Machines & Storage",
    "Deploy web apps using App Services",
    "Monitor resources using Azure Monitor",
    "Learn Azure identity & security"
  ],
  youtube: "https://www.youtube.com/watch?v=tQp6mH2ZzZs",
  website: "https://learn.microsoft.com/en-us/azure/"
},

gcp: {
  title: "Google Cloud Roadmap",
  steps: [
    "Learn cloud fundamentals",
    "Understand Compute Engine & Cloud Storage",
    "Deploy apps using App Engine",
    "Learn BigQuery & Cloud Functions",
    "Monitor and secure GCP workloads"
  ],
  youtube: "https://www.youtube.com/watch?v=UGRDM86MBIQ",
  website: "https://cloud.google.com/docs"
},

"cloud computing": {
  title: "Cloud Computing Roadmap",
  steps: [
    "Understand virtualization & cloud basics",
    "Learn different cloud service models",
    "Study compute, networking & storage",
    "Explore AWS / Azure / GCP",
    "Deploy a sample cloud project"
  ],
  youtube: "https://www.youtube.com/watch?v=2LaAJq1lB1Q",
  website: "https://www.ibm.com/topics/cloud-computing"
},

ec2: {
  title: "AWS EC2 Roadmap",
  steps: [
    "Learn EC2 instance types",
    "Understand SSH & security groups",
    "Deploy apps on EC2",
    "Work with load balancers",
    "Monitor EC2 instances"
  ],
  youtube: "https://www.youtube.com/watch?v=lZMkgOMYYIg",
  website: "https://docs.aws.amazon.com/ec2/"
},

lambda: {
  title: "AWS Lambda Serverless Roadmap",
  steps: [
    "Learn serverless fundamentals",
    "Create Lambda functions",
    "Trigger Lambda using API Gateway",
    "Integrate Lambda with DynamoDB",
    "Deploy serverless applications"
  ],
  youtube: "https://www.youtube.com/watch?v=eOBq__h4OJ4",
  website: "https://docs.aws.amazon.com/lambda/"
},

s3: {
  title: "AWS S3 Roadmap",
  steps: [
    "Learn bucket creation & permissions",
    "Understand versioning & lifecycle policies",
    "Upload & manage files",
    "Enable static website hosting",
    "Secure S3 using IAM roles"
  ],
  youtube: "https://www.youtube.com/watch?v=77iYwzV6k3A",
  website: "https://docs.aws.amazon.com/s3/"
},

cloudwatch: {
  title: "AWS CloudWatch Roadmap",
  steps: [
    "Learn CloudWatch metrics",
    "Create log groups & alarms",
    "Monitor AWS services",
    "Use dashboards for insights",
    "Automate alerts using SNS"
  ],
  youtube: "https://www.youtube.com/watch?v=KuNeqHhT5_U",
  website: "https://docs.aws.amazon.com/cloudwatch/"
},

iam: {
  title: "AWS IAM Roadmap",
  steps: [
    "Learn user, groups & roles",
    "Understand IAM policies",
    "Use MFA & security best practices",
    "Protect AWS services with IAM roles",
    "Manage identity & access securely"
  ],
  youtube: "https://www.youtube.com/watch?v=n3fISER9LwE",
  website: "https://docs.aws.amazon.com/IAM/"
},

"cloud architecture": {
  title: "Cloud Architecture Roadmap",
  steps: [
    "Learn designing scalable architectures",
    "Understand load balancing & autoscaling",
    "Build high-availability systems",
    "Learn cloud networking & VPC",
    "Design end-to-end cloud projects"
  ],
  youtube: "https://www.youtube.com/watch?v=tan259Sap5A",
  website: "https://aws.amazon.com/architecture/"
},
/* ===========================
         CYBERSECURITY
=========================== */

cybersecurity: {
  title: "Cybersecurity Roadmap",
  steps: [
    "Learn basics of networks, operating systems & security concepts",
    "Understand threats, vulnerabilities & attacks",
    "Learn encryption, hashing & authentication",
    "Understand firewalls, IDS/IPS, VPNs",
    "Practice labs on real-world attacks & defenses"
  ],
  youtube: "https://www.youtube.com/watch?v=U_P23SqJaDc",
  website: "https://www.coursera.org/browse/information-technology/cybersecurity"
},

"network security": {
  title: "Network Security Roadmap",
  steps: [
    "Learn TCP/IP, routing & switching",
    "Understand firewalls & network policies",
    "Learn Wireshark & packet analysis",
    "Configure secure protocols & VPNs",
    "Monitor and secure network traffic"
  ],
  youtube: "https://www.youtube.com/watch?v=iC8L6F9sYp8",
  website: "https://www.geeksforgeeks.org/network-security/"
},

"penetration testing": {
  title: "Penetration Testing Roadmap",
  steps: [
    "Learn Kali Linux tools",
    "Perform reconnaissance & scanning",
    "Practice exploiting vulnerabilities",
    "Learn Metasploit & Burp Suite basics",
    "Generate penetration testing reports"
  ],
  youtube: "https://www.youtube.com/watch?v=3Kq1MIfTWCE",
  website: "https://www.kali.org/docs/"
},

firewalls: {
  title: "Firewalls Roadmap",
  steps: [
    "Understand firewall types & architecture",
    "Configure firewall rules & policies",
    "Block/allow traffic using protocols",
    "Monitor logs for anomalies",
    "Secure enterprise networks with firewalls"
  ],
  youtube: "https://www.youtube.com/watch?v=JoBwzIG5k2Q",
  website: "https://www.fortinet.com/resources/cyberglossary/firewall"
},

"ethical hacking": {
  title: "Ethical Hacking Roadmap",
  steps: [
    "Learn hacking fundamentals responsibly",
    "Study reconnaissance, scanning & exploitation",
    "Understand MITRE ATT&CK framework",
    "Use tools like Nmap, Burp Suite, Metasploit",
    "Practice on legal platforms like HackTheBox"
  ],
  youtube: "https://www.youtube.com/watch?v=fNzpcB7ODxQ",
  website: "https://www.hackthebox.com/"
},

"kali linux": {
  title: "Kali Linux Roadmap",
  steps: [
    "Install and explore Kali tools",
    "Learn terminal commands & file structure",
    "Use Nmap, Aircrack-ng, Hydra",
    "Perform penetration testing tasks",
    "Run ethical hacking labs"
  ],
  youtube: "https://www.youtube.com/watch?v=Ds_LhZQiUGI",
  website: "https://www.kali.org/docs/introduction/"
},

"burp suite": {
  title: "Burp Suite Roadmap",
  steps: [
    "Learn Burp Suite interface",
    "Use proxy & intercept requests",
    "Perform vulnerability scanning",
    "Exploit common web app weaknesses",
    "Generate security testing reports"
  ],
  youtube: "https://www.youtube.com/watch?v=G3hpYgyteyo",
  website: "https://portswigger.net/burp"
},

"vulnerability assessment": {
  title: "Vulnerability Assessment Roadmap",
  steps: [
    "Learn vulnerability scanning basics",
    "Use tools like Nessus & OpenVAS",
    "Analyze CVEs and CVSS scoring",
    "Report vulnerabilities with mitigation",
    "Perform regular security audits"
  ],
  youtube: "https://www.youtube.com/watch?v=qVtJ_nqHyAc",
  website: "https://www.tenable.com/products/nessus"
},
/* ===========================
        BUSINESS ANALYST
=========================== */

"business requirements": {
  title: "Business Requirements Roadmap",
  steps: [
    "Understand business needs and problem statements",
    "Learn requirement gathering techniques",
    "Create BRD and requirement documents",
    "Collaborate with stakeholders",
    "Validate and refine requirements"
  ],
  youtube: "https://www.youtube.com/watch?v=6B3Z5tZqmto",
  website: "https://www.visual-paradigm.com/guide/requirements/what-are-business-requirements/"
},

"business analysis": {
  title: "Business Analysis Roadmap",
  steps: [
    "Learn BA fundamentals and SDLC",
    "Practice requirement elicitation",
    "Understand workflows & process mapping",
    "Perform gap analysis & solution design",
    "Document requirements and evaluate outcomes"
  ],
  youtube: "https://www.youtube.com/watch?v=LZzhgQ7o0qs",
  website: "https://www.iiba.org/business-analysis/"
},

wireframing: {
  title: "Wireframing Roadmap",
  steps: [
    "Learn basic UI/UX layout principles",
    "Use tools like Figma/Balsamiq",
    "Create low-fidelity mockups",
    "Map user flows and interactions",
    "Iterate wireframes based on feedback"
  ],
  youtube: "https://www.youtube.com/watch?v=Ec3jI5jvsZk",
  website: "https://www.figma.com/resources/learn-design/"
},

documentation: {
  title: "Documentation Roadmap",
  steps: [
    "Learn BRD, FRD & SRS documentation formats",
    "Document use cases and workflows",
    "Write clear acceptance criteria",
    "Maintain version control of documents",
    "Collaborate and update project artifacts"
  ],
  youtube: "https://www.youtube.com/watch?v=xyMUHhr8a_A",
  website: "https://www.javatpoint.com/software-requirements-specification-srs"
},

elicitation: {
  title: "Requirement Elicitation Roadmap",
  steps: [
    "Learn interview and workshop techniques",
    "Conduct stakeholder analysis",
    "Use brainstorming, surveys & observations",
    "Define clear business objectives",
    "Validate elicited requirements"
  ],
  youtube: "https://www.youtube.com/watch?v=8u0m9aGdnvE",
  website: "https://www.bmc.com/blogs/requirement-elicitation/"
},

"user stories": {
  title: "User Stories Roadmap",
  steps: [
    "Learn user story format & INVEST criteria",
    "Write epics and story mapping",
    "Define acceptance criteria",
    "Collaborate with dev & QA teams",
    "Prioritize user stories using backlog tools"
  ],
  youtube: "https://www.youtube.com/watch?v=apOvF9NVguA",
  website: "https://www.mountaingoatsoftware.com/agile/user-stories"
},

"stakeholder management": {
  title: "Stakeholder Management Roadmap",
  steps: [
    "Identify key stakeholders",
    "Analyze their expectations and influence",
    "Plan effective communication strategies",
    "Manage conflicts and interests",
    "Ensure stakeholder alignment throughout project"
  ],
  youtube: "https://www.youtube.com/watch?v=t_CP0F3B-ZI",
  website: "https://www.pmi.org/learning/library/stakeholder-management-best-practices-6269"
},
/* ===========================
        PRODUCT MANAGER
=========================== */

"product design": {
  title: "Product Design Roadmap",
  steps: [
    "Learn basics of UX/UI principles",
    "Understand user personas & journeys",
    "Analyze product problems and needs",
    "Collaborate with designers on wireframes",
    "Iterate design solutions based on feedback"
  ],
  youtube: "https://www.youtube.com/watch?v=jVIKoFzP7uk",
  website: "https://www.interaction-design.org/literature/topics/product-design"
},

"product roadmap": {
  title: "Product Roadmap Planning",
  steps: [
    "Learn how to define product vision & goals",
    "Prioritize features using frameworks",
    "Break goals into milestones",
    "Create a visual roadmap",
    "Review & update roadmap regularly"
  ],
  youtube: "https://www.youtube.com/watch?v=Lqh5QjywYl8",
  website: "https://www.productplan.com/learn/what-is-a-product-roadmap/"
},

"market research": {
  title: "Market Research Roadmap",
  steps: [
    "Analyze competitors and industry trends",
    "Conduct user interviews & surveys",
    "Identify user pain points",
    "Interpret market data & insights",
    "Align findings with product strategy"
  ],
  youtube: "https://www.youtube.com/watch?v=ZdZmF4R6G3g",
  website: "https://www.typeform.com/market-research/"
},

agile: {
  title: "Agile Methodology Roadmap",
  steps: [
    "Learn Agile principles & ceremonies",
    "Understand sprint planning & refinement",
    "Work closely with engineers & designers",
    "Track sprint progress with standups",
    "Improve workflows with retrospectives"
  ],
  youtube: "https://www.youtube.com/watch?v=Z9QbYZh1YXY",
  website: "https://www.atlassian.com/agile"
},

scrum: {
  title: "Scrum Roadmap",
  steps: [
    "Learn Scrum roles & responsibilities",
    "Understand sprint cycles",
    "Work with product backlogs & stories",
    "Conduct sprint reviews & demos",
    "Optimize delivery using Scrum principles"
  ],
  youtube: "https://www.youtube.com/watch?v=9TycLR0TqFA",
  website: "https://scrumguides.org/"
},

kanban: {
  title: "Kanban Roadmap",
  steps: [
    "Learn Kanban boards & workflows",
    "Visualize tasks & optimize flow",
    "Limit work-in-progress",
    "Measure cycle time & throughput",
    "Improve team efficiency"
  ],
  youtube: "https://www.youtube.com/watch?v=iVaFVa7HYj4",
  website: "https://www.atlassian.com/agile/kanban"
},

jira: {
  title: "JIRA Roadmap",
  steps: [
    "Learn JIRA boards & issue types",
    "Create epics, stories & tasks",
    "Manage sprints & releases",
    "Track progress using dashboards",
    "Collaborate with teams through workflows"
  ],
  youtube: "https://www.youtube.com/watch?v=o2hZosM9Wb4",
  website: "https://support.atlassian.com/jira-software/"
},

confluence: {
  title: "Confluence Roadmap",
  steps: [
    "Learn documentation best practices",
    "Create structured product pages",
    "Use templates for specs & plans",
    "Document product decisions",
    "Collaborate with teams through shared spaces"
  ],
  youtube: "https://www.youtube.com/watch?v=frx0S3yN3rM",
  website: "https://www.atlassian.com/software/confluence/guides"
},
/* ===========================
          UI / UX DESIGN
=========================== */

"ui design": {
  title: "UI Design Roadmap",
  steps: [
    "Learn color theory, typography, spacing & layout",
    "Understand visual hierarchy & consistency",
    "Create simple UI screens in Figma",
    "Use design systems & component libraries",
    "Build complete UI mockups & prototypes"
  ],
  youtube: "https://www.youtube.com/watch?v=3Xx6Z2tq9xE",
  website: "https://www.interaction-design.org/literature/topics/ui-design"
},

"ux design": {
  title: "UX Design Roadmap",
  steps: [
    "Learn user-centered design principles",
    "Create user personas & journey maps",
    "Conduct user research & interviews",
    "Design user flows and wireframes",
    "Test prototypes and refine UX"
  ],
  youtube: "https://www.youtube.com/watch?v=_lyzy7TMd1I",
  website: "https://www.nngroup.com/articles/ux-basics/"
},

figma: {
  title: "Figma Roadmap",
  steps: [
    "Learn Figma tools, frames & layers",
    "Design responsive layouts",
    "Use components, variants & auto-layout",
    "Create interactive prototypes",
    "Collaborate using Figma files"
  ],
  youtube: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
  website: "https://help.figma.com/hc/en-us"
},

"adobe xd": {
  title: "Adobe XD Roadmap",
  steps: [
    "Learn artboards & design tools",
    "Create reusable components",
    "Design UI screens",
    "Build interactive prototypes",
    "Share and test XD designs"
  ],
  youtube: "https://www.youtube.com/watch?v=_Hp_dI0DzY4",
  website: "https://helpx.adobe.com/xd/tutorials.html"
},

prototyping: {
  title: "Prototyping Roadmap",
  steps: [
    "Understand low-fi vs high-fi prototypes",
    "Use Figma/Adobe XD interactions",
    "Build clickable prototypes",
    "Test with users for usability",
    "Iterate based on feedback"
  ],
  youtube: "https://www.youtube.com/watch?v=wB1ZFtTqXAU",
  website: "https://www.interaction-design.org/literature/topics/prototyping"
},

"user research": {
  title: "User Research Roadmap",
  steps: [
    "Learn qualitative and quantitative research",
    "Conduct interviews & surveys",
    "Map user behavior & pain points",
    "Analyze findings to create personas",
    "Improve design through insights"
  ],
  youtube: "https://www.youtube.com/watch?v=q9VvYoMFvus",
  website: "https://www.nngroup.com/articles/what-is-user-research/"
},

wireframes: {
  title: "Wireframing Roadmap",
  steps: [
    "Understand structure & layout",
    "Draw low-fidelity wireframes",
    "Use Figma or Balsamiq for digital wireframes",
    "Define user flows",
    "Convert wireframes into full UI design"
  ],
  youtube: "https://www.youtube.com/watch?v=1z1nQJxjEJ0",
  website: "https://www.mockplus.com/learn/wireframe"
},

"visual design": {
  title: "Visual Design Roadmap",
  steps: [
    "Learn color, typography, spacing & grids",
    "Apply contrast & alignment principles",
    "Create visually appealing components",
    "Study design patterns & styles",
    "Build complete UI visual systems"
  ],
  youtube: "https://www.youtube.com/watch?v=_x4p-0GoooI",
  website: "https://material.io/design"
},
/* ===========================
     PROGRAMMING LANGUAGES
=========================== */

java: {
  title: "Java Roadmap",
  steps: [
    "Understand basic syntax, variables, data types",
    "Learn loops, conditionals, functions",
    "Master OOP concepts (Class, Objects, Inheritance, Polymorphism)",
    "Work with Collections, Generics & Exceptions",
    "Practice JDBC, multithreading & file handling",
    "Build small Java projects"
  ],
  youtube: "https://www.youtube.com/watch?v=eIrMbAQSU34",
  website: "https://www.javatpoint.com/java-tutorial"
},

python: {
  title: "Python Roadmap",
  steps: [
    "Learn Python basics: syntax, variables, data types",
    "Master lists, dictionaries, loops & functions",
    "Understand OOP in Python",
    "Learn modules, file handling & error handling",
    "Practice libraries like NumPy, Pandas, Matplotlib",
    "Build beginner-level projects"
  ],
  youtube: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
  website: "https://www.w3schools.com/python/"
},

c: {
  title: "C Programming Roadmap",
  steps: [
    "Learn syntax, variables, and operators",
    "Understand loops, arrays, functions",
    "Study pointers, memory allocation & strings",
    "Learn file handling",
    "Practice data structures in C",
    "Build mini C applications"
  ],
  youtube: "https://www.youtube.com/watch?v=KJgsSFOSQv0",
  website: "https://www.programiz.com/c-programming"
},

"c++": {
  title: "C++ Roadmap",
  steps: [
    "Learn C++ basics & data types",
    "Master OOP: inheritance, polymorphism, abstraction",
    "Understand STL (vectors, maps, sets)",
    "Learn pointers, memory & references",
    "Practice problem solving using C++",
    "Build console-based projects"
  ],
  youtube: "https://www.youtube.com/watch?v=vLnPwxZdW4Y",
  website: "https://www.geeksforgeeks.org/c-plus-plus/"
},

"c#": {
  title: "C# Roadmap",
  steps: [
    "Learn C# syntax, variables & data types",
    "Master OOP with C#",
    "Learn LINQ, async/await & exception handling",
    "Understand .NET Framework basics",
    "Build simple Windows or Unity apps",
    "Practice C# projects"
  ],
  youtube: "https://www.youtube.com/watch?v=GhQdlIFylQ8",
  website: "https://learn.microsoft.com/en-us/dotnet/csharp/"
},

php: {
  title: "PHP Roadmap",
  steps: [
    "Understand PHP syntax & variables",
    "Learn forms, sessions & cookies",
    "Work with MySQL using PHP",
    "Understand MVC concepts",
    "Work with frameworks like Laravel",
    "Build basic dynamic websites"
  ],
  youtube: "https://www.youtube.com/watch?v=OK_JCtrrv-c",
  website: "https://www.php.net/manual/en/tutorial.php"
},

ruby: {
  title: "Ruby Roadmap",
  steps: [
    "Learn Ruby syntax, variables & collections",
    "Understand OOP in Ruby",
    "Learn RubyGems & Bundler",
    "Build mini apps using Ruby",
    "Study Ruby on Rails basics",
    "Build simple full-stack applications"
  ],
  youtube: "https://www.youtube.com/watch?v=t_ispmWmdjY",
  website: "https://www.ruby-lang.org/en/documentation/quickstart/"
},

swift: {
  title: "Swift Roadmap",
  steps: [
    "Learn Swift syntax & variables",
    "Understand optionals, enums & structs",
    "Learn OOP in Swift",
    "Work with Xcode & SwiftUI basics",
    "Build simple iOS apps",
    "Publish prototypes on TestFlight"
  ],
  youtube: "https://www.youtube.com/watch?v=Ulp1Kimblg0",
  website: "https://developer.apple.com/swift/"
},

kotlin: {
  title: "Kotlin Roadmap",
  steps: [
    "Learn Kotlin basics & data types",
    "Understand functions and OOP concepts",
    "Learn Kotlin Android fundamentals",
    "Master RecyclerView, Fragments & Navigation",
    "Consume APIs with Retrofit",
    "Build small Android apps"
  ],
  youtube: "https://www.youtube.com/watch?v=F9UC9DY-vIU",
  website: "https://kotlinlang.org/docs/home.html"
},
/* ===========================
          SOFT SKILLS
=========================== */

communication: {
  title: "Communication Skills Roadmap",
  steps: [
    "Learn verbal & non-verbal communication basics",
    "Enhance clarity, tone and professionalism",
    "Practice active listening techniques",
    "Improve writing skills for email & reports",
    "Engage in public speaking or group discussions"
  ],
  youtube: "https://www.youtube.com/watch?v=HAnw168huqA",
  website: "https://www.mindtools.com/communication-skills"
},

teamwork: {
  title: "Teamwork Skills Roadmap",
  steps: [
    "Learn roles and responsibilities within teams",
    "Improve collaboration and task-sharing",
    "Practice effective communication among teammates",
    "Resolve conflicts respectfully",
    "Participate in team-based projects"
  ],
  youtube: "https://www.youtube.com/watch?v=pFXYs5k9jJ8",
  website: "https://www.skillsyouneed.com/ips/team-working.html"
},

leadership: {
  title: "Leadership Skills Roadmap",
  steps: [
    "Understand leadership styles & qualities",
    "Learn decision-making & responsibility",
    "Develop confidence and accountability",
    "Motivate and guide team members",
    "Lead small projects to gain experience"
  ],
  youtube: "https://www.youtube.com/watch?v=I7pZVF6VGK0",
  website: "https://www.mindtools.com/leadership-skills"
},

"problem solving": {
  title: "Problem-Solving Roadmap",
  steps: [
    "Understand problem identification & breakdown",
    "Use root-cause analysis frameworks",
    "Brainstorm multiple solutions",
    "Evaluate risks & benefits",
    "Implement and review results"
  ],
  youtube: "https://www.youtube.com/watch?v=6P66uCevO0o",
  website: "https://www.skillsyouneed.com/ips/problem-solving.html"
},

"time management": {
  title: "Time Management Roadmap",
  steps: [
    "Learn prioritization frameworks (Eisenhower Matrix)",
    "Plan tasks with calendars and todo apps",
    "Break work into manageable chunks",
    "Reduce distractions & improve focus",
    "Review productivity and adjust habits"
  ],
  youtube: "https://www.youtube.com/watch?v=iDbdXTMnOmE",
  website: "https://todoist.com/productivity-methods"
},

"critical thinking": {
  title: "Critical Thinking Roadmap",
  steps: [
    "Learn how to analyze and question assumptions",
    "Break problems logically",
    "Evaluate data before concluding",
    "Distinguish fact vs opinion",
    "Practice reasoning with real scenarios"
  ],
  youtube: "https://www.youtube.com/watch?v=6OLPL5p0fMg",
  website: "https://www.edx.org/learn/critical-thinking"
},

creativity: {
  title: "Creativity Roadmap",
  steps: [
    "Practice brainstorming and idea generation",
    "Study design thinking fundamentals",
    "Observe patterns & think outside the box",
    "Experiment with new approaches",
    "Build creative mini-projects"
  ],
  youtube: "https://www.youtube.com/watch?v=tbZpvs6Y5EU",
  website: "https://www.interaction-design.org/literature/topics/creativity"
},

};

export default roadmaps;
