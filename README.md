# Task-Portal
Shopping Task Portal built using Node.js and Express

## API Endpoints

### Create a Task
- URL: `{baseURL}/api/tasks`
- Method: `POST`
- Request Body:
  {
    "title": "Task title",
    "description": "Task description",
    "status": "pending"
  }

### Get All Tasks
  URL: `{baseURL}/api/tasks`
  Method: GET


### Get Single Task
  URL: `{baseURL}/api/tasks/:taskId`
  Method: GET
 Parameters:
  id (required, string): ID of the task.
  
### Update Task
 URL: `{baseURL}/api/tasks/:taskId`
 Method: Patch
  Parameters:
  id (required, string): ID of the task.
- Request Body:
{
  "title": "Updated task title",
  "description": "Updated task description",
  "status": "Update status"
}

### Delete Task
  URL: `{baseURL}/api/tasks/:taskId`
  Method: Delete
   Parameters:
  id (required, string): ID of the task.
  
### Delete All Task
  URL: `{baseURL}/api/tasks`
  Method: Delete
