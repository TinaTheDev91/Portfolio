import React from 'react';

export default function Resume() {
  return (
    <div>
      <h1 className='text-2xl font-semibold'>Check out my resume!</h1>
      <p>
      Please see the details below or download the PDF by clicking <a className="text-primary font-bold" href="./assets/resume.pdf" download="Tina Croxton's Resume">here.</a>
      </p>
      <br></br>
      <h1 className='text-2xl font-semibold'>Skills</h1>
      <ul>
        <li>Understanding of database management systems and SQL.</li>
        <li>Proficiency in data analysis tools including Excel and SQL.</li>
        <li>Proficiency in programming languages such as front-end and back-end JavaScript and Node.js.</li>
        <li>Familiarity with back-end technologies such as express and npm.</li>
        <li>Familiarity with version control systems such as Git.</li>
        <li>Experience with software testing, debugging, and troubleshooting.</li>
        <li>Ability to write clean, efficient, and maintainable code.</li>
        <li>Strong problem-solving and analytical skills.</li>
        <li>Knowledge of statistical analysis and data visualization techniques.</li>
        <li>Experience with data modeling and database design.</li>
        <li>Ability to gather, clean, and transform data from various sources.</li>
      </ul>

      <br></br>
      <h1 className='text-2xl font-semibold'>Experience</h1>
      <h2 className='text-xl italic'>Paylocity, Remote — Data Conversion Specialist</h2>
      <h3>SEPTEMBER 2021 - PRESENT</h3>
      <ul>
        <li>Extract data from various sources, including spreadsheets, databases, and other software platforms.</li>    
        <li>Transform data to ensure it meets the required format and structure for importing into Paylocity's system.</li>
        <li>Map data fields from source systems to the appropriate fields in Paylocity's system.</li>
        <li>Import data by writing queries and scripting via Microsoft SQL.</li>
        <li>Test and validate data to ensure accuracy and completeness.</li>
        <li>Troubleshoot data issues and work with internal teams to resolve them.</li>
      </ul>

      <br></br>
      <h2 className='text-xl italic'>Georgia Multiple Listing Service, Tucker, GA — Data Administrator</h2>
      <h3>NOVEMBER 2018 - SEPTEMBER 2021</h3>
      <ul>
        <li>Write queries using Microsoft SQL to create statistical reports.</li>    
        <li>Maintain data accuracy across real estate listings in Georgia (25,000+ active listings as of 6/12/2021).</li>
        <li>Maintain 3rd party vendor accounts and troubleshoot data retrieval issues via the API and/or RETS feed.</li>
        <li>Teach 3rd party vendors how to navigate our syndication tools, as well as provide tech support.</li>
      </ul>

      <br></br>
      <h2 className='text-xl italic'>AICA Orthopedics, Marietta, GA — Data Analyst/Accounting Assistant</h2>
      <h3>JUNE 2013 - NOVEMBER 2018</h3>
      <ul>
        <li>Calculate patient compliance across 15 separate medical clinics.</li>    
        <li>Track daily, monthly and yearly trends to forecast the number of new patients and procedures.</li>
        <li>Reconcile bills and invoices with multiple companies and distribute payments.</li>
        <li>Calculate and distribute the necessary petty cash for 15 medical locations.</li>
        <li>Manage checks for payments, refunds and all interoffice corrections.</li>
      </ul>

      <br></br>
      <h1 className='text-2xl font-semibold'>Education</h1>
      <h2 className='text-xl italic'>Georgia Tech, Atlanta, GA — FullStack Web Development Certificate</h2>
      <h3>JANUARY 2023 - JULY 2023 (IN PROGRESS)</h3>

      <br></br>
      <h2 className='text-xl italic'>Rutgers University, Camden, NJ — Bachelor of Arts in Mathematics</h2>
      <h3>SEPTEMBER 2010 - MAY 2016</h3>
      
    </div>
  );
}
