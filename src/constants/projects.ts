import furnitureImage from '../components/assets/images/furniture.jpeg';
import fileTypeImage from '../components/assets/images/project2.png';
import answerSheet from '../components/assets/images/writingImg.jpeg';
import fedLearning from '../components/assets/images/fedLearning.png';
import flightTicket from '../components/assets/images/flightTicket.avif';
import voteSocket from '../components/assets/images/socketImg.avif';
import creditManagement from '../components/assets/images/creditManagement.jpeg';
import cloudComputing from '../components/assets/images/cloudComputing.jpeg';

export interface ProjectType {
    title: string;
    description: string;
    tech: string;
    image: any;
    link: string
}

export const projects : Array<ProjectType> = [
    {
        "title": "Online Furniture Shopping App",
        "description": "Online ecommerce store with product addition, buy-sell and record maintenance. Jwt authentication with admin and user access. Api request handling and processing using postgresql query",
        "tech": "NodeJs, ReactJs, PostgreSql, Typescript",
        "image": furnitureImage,
        "link": "https://github.com/phet2309/Furniture-Shopping-App"
    },
    {
        "title": "Image Classification and Text Detection on AWS",
        "description": "AWS CLI configuration, IAM policy check, AWS EC2 instance setup with SSH access, AWS SQS configuration, deploying Java image recognition and text detection applications on EC2 instances.",
        "tech": "AWS, Java, S3, EC2, SQS, Rekognition",
        "image": cloudComputing,
        "link": "https://github.com/phet2309/ProgrammingAssignment1"
    },
    {
        "title": "File Type Identification - Java Multithreading",
        "description": "This project scans large chunks of files and classifies them into groups, solely based on extension and name, with the help of Java threadpool. JSON file preparation from various websites through web-scraping, and utilizing these JSONs for classification.",
        "tech": "Java, Multithreading, Web-Scraping",
        "image": fileTypeImage,
        "link": "https://github.com/phet2309/Filetype-Identification"
    },
    {
        "title": "Handwritten answersheet detection and evaluation",
        "description": "Detecting answer sheets of students with camera calibration and using trained tesseract-ocr models to recognize handwritten characters. Automatic evaluation and automatic marks update of students.",
        "tech": " python, Image processing, openCV, tesseract-OCR, JtessBoxEditor",
        "image": answerSheet,
        "link": "https://github.com/phet2309/Handwritten-answersheet-detection-and-evaluation"
    },
    {
        "title": "Federated Learning and Split Learning",
        "description": "Implementation of privacy preserving Federated Learning and Split Learning, and their result comparison. Data Engineering, SMOTE application, used for credit card fraud detection",
        "tech": " PyTorch, ML, python, numpy, scikit, pandas",
        "image": fedLearning,
        "link": "https://github.com/phet2309/Federated_Learning-and-Split-Learning"
    },
    {
        "title": "Credit Card Management System",
        "description": "User Login, User Dashboard, Admin page utilities and transaction management database application with user interface",
        "tech": "PHP, SQL, HTML, CSS",
        "image": creditManagement,
        "link": "https://github.com/phet2309/Credit-Card-Management-System"
    },
    {
        "title": "Online Voting System Socket Programming",
        "description": "Online voter registration, voting portal and database management using pandas. Voter registration, Candidate registration",
        "tech": "Python, socket programming, multi-threading, pandas",
        "image": voteSocket,
        "link": "https://github.com/phet2309/Online-Voting-System-Socket-Programming"
    },
    {
        "title": "Flight Ticket Price Prediction",
        "description": "Data Engineering, Various models like Ridge, Lasso, Random Forest Regressor etc.",
        "tech": " ML, python, numpy, Flask, scikit, pandas, HTML, Heroku",
        "image": flightTicket,
        "link": "https://airfare-prediction-ml.herokuapp.com/"
    }
    
];
