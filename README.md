# Kangacook Coding Assessment

## Description
This project is a simple posts list website built with React(vite) on the frontend and Django on the backend. Users can create posts by submitting a form and vote for posts by clicking the "Post" button. The backend supports both GET and POST methods.

## Prerequisites
Before setting up the project, ensure you have the following installed on your system:
- Python 3.9 or higher
- Node.js and npm (for the frontend)
- Git

## Setup and Run Instructions

### 1. Clone the repository
First, clone the repository to your local machine and navigate into the project directory:
```bash
git clone https://github.com/HongzeXiao/kangacook_coding_accessment.git
cd kangacook_coding_accessment
```

### 2. Set Up and Run the Project (Backend and Frontend)
1. Create a virtual environment

2. Navigate to the backend folder and run ```pip install -r requirements.txt```
```python manage.py migrate```
And then run ```python manage.py runserver``` to start the backend. The backend will be hosted on "http://127.0.0.1:8000/".

3.. Navigate to the frontend folder and run ```npm install```. Then run ```npm run dev``` to start the frontend. The frontend will be hosted on "http://localhost:5173/".
