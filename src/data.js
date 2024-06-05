

const courseData = [
  {
    "id": 1,
    "fileName": "https://img.freepik.com/free-vector/design-tools-concept-illustration_114360-1227.jpg?t=st=1716371235~exp=1716374835~hmac=8f5a19d99fbb8253ed3f88ea88b18ff1c2263d586e68c1ff0ee1a4df3e8acb97&w=740",
    "courseName": "Graphic Designing",
    "courseReview": "******",
    "introVideo": "(link unavailable)",
    "Overview": {
      "coursePrice": 200,
      "courseDescription": "Learn the fundamentals of graphic design",
      "CourseDetails": {
        "totalLectures": "22+ Lectures",
        "certificate": "certificate",
        "totalDuration": "10 hours",
        "courseDiscount": 10
      }
    },
    "Skills": [
      "Adobe",
      "Adobe Photoshop",
      "Logo Design",
      "Designing",
      "Poster Design",
      "Figma"
    ]
  },
  {
    "id": 2,
    "fileName": "https://img.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_1284-68939.jpg?t=st=1716371187~exp=1716374787~hmac=0a0804891435be2f64bcb7af2a786d09bf5bf7d94b62f710b42a60bc94231d2d&w=740",
    "courseName": "Web Development",
    "courseReview": "*****",
    "introVideo": "(link unavailable)",
    "Overview": {
      "coursePrice": 300,
      "courseDescription": "Learn how to build a website from scratch.",
      "CourseDetails": {
        "totalLectures": "33+ Lectures",
        "certificate": "certificate",
        "totalDuration": "15 hours",
        "courseDiscount": 20
      }
    },
    "Skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB"
    ]
  },
  {
    "id": 3,
    "fileName": "https://img.freepik.com/free-vector/digital-marketing-landing-page_33099-1726.jpg?t=st=1716371289~exp=1716374889~hmac=575a65e01111221451811dbe9cdd3ab00e0a01357fc989195b4272ef5e6594ab&w=740",
    "courseName": "Digital Marketing",
    "courseReview": "****",
    "introVideo": "(link unavailable)",
    "Overview": {
      "coursePrice": 250,
      "courseDescription": "Learn how to market your product online",
      "CourseDetails": {
        "totalLectures": "25+ Lectures",
        "certificate": "certificate",
        "totalDuration": "12 hours",
        "courseDiscount": 15
      }
    },
    "Skills": [
      "Facebook Marketing",
      "Instagram Marketing",
      "Twitter Marketing",
      "SEO",
      "Google Analytics"
    ]
  },
  {
    "id": 4,
    "fileName": "https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18140.jpg?t=st=1716371341~exp=1716374941~hmac=7ca02588dfeb27aec6d17b6dad8a01a1c16fb1be0726abcf6c3f109e66b1c1e1&w=740",
    "courseName": "Data Science",
    "courseReview": "*****",
    "introVideo": "(link unavailable)",
    "Overview": {
      "coursePrice": 350,
      "courseDescription": "Learn how to analyze and interpret data",
      "CourseDetails": {
        "totalLectures": "35+ Lectures",
        "certificate": "certificate",
        "totalDuration": "18 hours",
        "courseDiscount": 25
      }
    },
    "Skills": [
      "Python",
      "R",
      "Machine Learning",
      "Data Visualization",
      "Statistics"
    ]
  },
  {
    "id": 5,
    "fileName": "https://img.freepik.com/free-vector/sphere-grid-wave-with-binary-code-ai-artificial-intelligence-logo-hand-machine-learning-concept_127544-855.jpg?t=st=1716371413~exp=1716375013~hmac=fb8a08e6e3e590590277ee8b3a7d7681cdf47a3f444becc434832a8158636aa0&w=740",
    "courseName": "Artificial Intelligence",
    "courseReview": "******",
    "introVideo": "(link unavailable)",
    "Overview": {
      "coursePrice": 400,
      "courseDescription": "Learn how to build intelligent machines",
      "CourseDetails": {
        "totalLectures": "40+ Lectures",
        "certificate": "certificate",
        "totalDuration": "20 hours",
        "courseDiscount": 30
      }
    },
    "Skills": [
      "Python",
      "TensorFlow",
      "Keras",
      "Deep Learning",
      "Natural Language Processing"
    ]
  },
  {
    "id": 6,
    "fileName": "https://img.freepik.com/free-photo/html-css-collage-concept-with-hacker_23-2150061984.jpg?t=st=1716368952~exp=1716372552~hmac=8762ba52b7e07eb901b1574898fc2373c0cff4fe2aad1b12a326be5d9cf98118&w=740",
    "courseName": "Cyber Security",
    "courseReview": "*****",
    "introVideo": "(link unavailable)",
    "Overview": {
      "coursePrice": 300,
      "courseDescription": "Learn how to protect your online presence",
      "CourseDetails": {
        "totalLectures": "30+ Lectures",
        "certificate": "certificate",
        "totalDuration": "15 hours",
        "courseDiscount": 20
      }
    },
    "Skills": [
      "Network Security",
      "Cryptography",
      "Penetration Testing",
      "Incident Response",
      "Security Auditing"
    ]
  },
  {
    "id": 7,
    "fileName": "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399281.jpg?t=st=1716371541~exp=1716375141~hmac=d9157b80627849b31b61e9cdb1b688a061b43f4c785036832e1ee4ba43e3f92f&w=740",
    "courseName": "Cloud Computing",
    "courseReview": "****",
    "introVideo": "(link unavailable)",
    "Overview": {
      "coursePrice": 250,
      "courseDescription": "Learn how to deploy and manage cloud infrastructure",
      "CourseDetails": {
        "totalLectures": "25+ Lectures",
        "certificate": "certificate",
        "totalDuration": "12 hours",
        "courseDiscount": 15
      }
    },
    "Skills": [
      "AWS",
      "Azure",
      "Google Cloud",
      "Cloud Security",
      "Cloud Architecture"
    ]
  },
  {
    "id": 8,
    "fileName": "https://img.freepik.com/premium-photo/blockchain-technology-concept-with-chain-encrypted-blocks-person-background-fintech-financial-cryptocurrency-such-as-bitcoin_1121250-36614.jpg?w=740",
    "courseName": "Blockchain Development",
    "courseReview": "******",
    "introVideo": "(link unavailable)",
    "Overview": {
      "coursePrice": 400,
      "courseDescription": "Learn how to build blockchain applications",
      "CourseDetails": {
        "totalLectures": "31+ Lectures",
        "certificate": "certificate",
        "totalDuration": "20 hours",
        "courseDiscount": 30
      }
    },
    "Skills": [
      "Solidity",
      "Smart Contracts",
      "Ethereum",
      "Blockchain Architecture",
      "Cryptocurrency"
    ]
  }
]

export default courseData