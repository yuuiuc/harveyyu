// Centralized content for Harvey Yu's portfolio.
// Edit this file to update the site content.

export const profile = {
    name: 'Hang (Harvey) Yu',
    title: 'Physicist + Machine Learning Engineer + Tech Enthusiast',
    summary:
        'Senior Data Scientist at Apple · PhD Computational Biophysics · 6+ Years in AI/ML',
    location: 'Singapore',
    links: {
        linkedin: 'https://www.linkedin.com/in/hangyu1/',
        // Resume PDF lives at `public/resume.pdf`. BASE_URL prefixes the
        // Vite `base` path (e.g. `/portfolio/`) so the link works on GitHub Pages.
        resume: `${import.meta.env.BASE_URL}resume.pdf`,
        // Optional: add a GitHub profile URL if available.
        github: '',
    },
}

export const about =
    'Innovative Senior Machine Learning Engineer and Data Scientist with a deep passion for data science and AI. Bringing proven expertise in predictive modeling, Generative AI, machine learning, and production-grade software engineering across technology, investment finance, and the oil & gas industry.'

export const experience = [
    {
        company: 'Apple',
        role: 'Senior Machine Learning Engineer / Data Scientist',
        location: 'Singapore',
        dates: 'Mar. 2020 - Present',
        icon: 'apple', // FontAwesome brand icon
        color: '#555555',
        points: [
            {
                title: 'AI & Machine Learning Innovation',
                text: "Developed and implemented cutting-edge machine learning solutions for Apple's ecosystem, focusing on predictive modeling and Generative AI applications.",
            },
            {
                title: 'Production-Grade ML Systems',
                text: 'Architected and deployed scalable machine learning pipelines serving millions of users across Apple platforms.',
            },
            {
                title: 'Cross-Functional Leadership',
                text: 'Collaborated with product teams to integrate advanced AI capabilities into consumer-facing applications.',
            },
        ],
    },
    {
        company: 'GIC',
        role: 'Senior Research Strategist / Data Scientist',
        location: 'Singapore',
        dates: 'Mar. 2017 - Mar. 2020',
        icon: 'building-columns',
        color: '#0a66c2',
        points: [
            {
                title: 'Alternative Data Analysis',
                text: 'Identified investment opportunities from alternative datasets using advanced data science models.',
            },
            {
                title: 'Financial Modeling',
                text: 'Developed sophisticated predictive models for investment strategy optimization and risk assessment.',
            },
        ],
    },
    {
        company: 'WalmartLabs',
        role: 'Senior Software Engineer / Data Scientist',
        location: 'Remote',
        dates: 'Jun. 2015 - Feb. 2017',
        icon: 'cart-shopping',
        color: '#ffc220',
        points: [
            {
                title: 'Search Engine Optimization',
                text: 'Improved search engine performance using machine learning algorithms and natural language processing.',
            },
            {
                title: 'Large-Scale Data Processing',
                text: 'Implemented efficient data processing pipelines for analyzing customer behavior and search patterns.',
            },
        ],
    },
    {
        company: 'ExxonMobil',
        role: 'Computational Scientist Intern',
        location: 'Greater Houston',
        dates: 'May 2014 - Aug. 2014',
        icon: 'gas-pump',
        color: '#e01e2b',
        points: [
            {
                title: 'Geological Data Modeling',
                text: 'Performed computational modeling with large datasets of geological data for oil location prediction.',
            },
            {
                title: 'Machine Learning Implementation',
                text: 'Implemented and optimized machine learning algorithms on large datasets for underground oil location prediction.',
            },
        ],
    },
    {
        company: 'Theoretical & Computational Biophysics Group',
        role: 'Research Assistant',
        location: 'University of Illinois',
        dates: 'Jan. 2009 - Jun. 2015',
        icon: 'graduation-cap',
        color: '#13294b',
        points: [
            {
                title: 'Biophysical Data Analysis',
                text: 'Extracted thousands of time series trajectories from TB-size datasets and developed scripts for visualization and graph dynamics.',
            },
            {
                title: 'Statistical Methods',
                text: 'Implemented clustering and PCA analysis for complex protein dynamics and molecular simulation data.',
            },
        ],
    },
]

export const education = [
    {
        school: 'University of Illinois Urbana-Champaign',
        degree: 'PhD, Computational Biophysics',
        dates: '2009 - 2015',
        detail: 'Molecular Simulation and Data Analysis with High-Performance Computers.',
    },
    {
        school: 'University of Illinois Urbana-Champaign',
        degree: 'M.Sc., Statistics',
        dates: '2012 - 2014',
        detail: 'Analysis of Stochastic Processes and Data Mining.',
    },
    {
        school: 'Nanyang Technological University',
        degree: 'B.Sc., First-class Honours',
        dates: '2003 - 2007',
        detail: 'Computational Modeling. Deanlist 2005-2007, full scholarship.',
    },
]

export const projects = [
    {
        title: 'Mobile Device User Recognition',
        category: 'Machine Learning Analysis',
        icon: 'mobile-screen-button',
        description:
            'Recognized users from large accelerometer datasets. Processed 2GB training data with 30M+ observations, achieving 77.6% classification accuracy.',
        highlights: [
            'Applied Adaboost, SVM, decision tree, random forest, kNN',
            'Reduced computation time by 40% via statistical optimization',
        ],
        tags: ['R', 'Machine Learning', 'Statistics', 'Big Data'],
    },
    {
        title: 'Protein Analysis Platform',
        category: 'Computational Biophysics',
        icon: 'dna',
        description:
            'Statistical analysis platform for clustering and kinetic study of unstructured proteins using C and Python.',
        highlights: [
            'Implemented clustering algorithms for protein structure analysis',
            'Created visualization tools for molecular simulation data',
        ],
        tags: ['C++', 'Python', 'Biophysics', 'Visualization'],
    },
    {
        title: 'CEO Performance Analytics',
        category: 'Financial Data Science',
        icon: 'chart-line',
        description:
            'Analysis of CEO performance and background across U.S. industries using SAS, building predictive models for executive outcomes.',
        highlights: [
            'Analyzed executive performance patterns across industries',
            'Built predictive models for company performance',
        ],
        tags: ['SAS', 'Financial Modeling', 'Predictive Modeling'],
    },
    {
        title: 'Membrane Protein Dynamics',
        category: 'PhD Research Project',
        icon: 'microscope',
        description:
            'Computational study of membrane sculpting by F-BAR proteins using molecular dynamics simulations, published in computational biophysics.',
        highlights: [
            'Developed novel simulation protocols for membrane proteins',
            'Published peer-reviewed research; presented internationally',
        ],
        tags: ['Molecular Dynamics', 'HPC', 'Scientific Computing'],
    },
]
