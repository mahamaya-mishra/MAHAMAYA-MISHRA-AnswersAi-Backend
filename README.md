Steps to setup and test the project:

Environment Variables:
1. Create a .env file in the root of your project and add the following details:

PORT=3000
DATABASE_URL=mysql://xyz:abc@0171@localhost:3306/answerai
JWT_SECRET=MM161162
ANTHROPIC_API_KEY=ab-abc-api03-4OgPul4iME11FsD-WFeYdSthUQhsJ-wIEDJFiZX6AyQ1wLIdvtxCmzYL9Lhq6F7RPH57X0X6FDvUc1U5C1Q3ew-MV65YBBBBB

Replace the values with your actual configurations. Here are dummy values for demonstration.

2. Create MySQL Database:
Create a database in MySQL on your local machine with the name answerai.

3. Install Dependencies:
Run the following command to install the required libraries:

npm install

4. Run the Application:
Start the application by running:

npm start

5. API Usage
Find below the CURL commands for using the APIs. Replace http://localhost:3002 with your actual API URL if you are deploying elsewhere.

curl -X POST \
  http://localhost:3002/api/users \
  -d '{
    "password":"Mahamaya@123",
    "email":"mahamaya@gmail.com"
  }'

curl -X GET \
  http://localhost:3002/api/loginuser


curl -X POST \
  http://localhost:3002/api/questions \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRmMjg5MmFhLWI5ZDUtNDllMC1iMTg4LWJiNjg2Mjg2M2U4ZiIsImVtYWlsIjoibWFoYW1heWFAZ21haWwuY29tIiwiaWF0IjoxNzE3OTE5ODk1LCJleHAiOjE3MTc5MjM0OTV9.SprN-Brx_LmQISjZTHhKSLkxAfjFFiuL6KXQvi9bg9I' \
  -d '{
    "content": "Who is the prime minister of INDIA?"
  }'

curl -X GET \
  http://localhost:3002/api/users/4f2892aa-b9d5-49e0-b188-bb6862863e8f/questions \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRmMjg5MmFhLWI5ZDUtNDllMC1iMTg4LWJiNjg2Mjg2M2U4ZiIsImVtYWlsIjoibWFoYW1heWFAZ21haWwuY29tIiwiaWF0IjoxNzE4MTI4NTU2LCJleHAiOjE3MTgxMzIxNTZ9.YKMq23MUnzByx3xSXkKTqcV1IFpfxFKkVD5wCoKjLtE'


curl -X GET \
  http://localhost:3002/api/question


6. You can view the test results of all the apis in the uploaded result files.




