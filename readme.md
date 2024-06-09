# Task Management Application

This is a simple task management application built using React and Material-UI.

## Features

- Add, edit, and delete tasks
- View task details
- Responsive design for mobile and desktop

## Installation

1. Clone the repository:
   git clone https://github.com/ArunKumar-2004/Task-Management-App.git

2. Navigate to the project directory:
   cd task-management-app

3. Install dependencies:
   npm install

4. Start the development server:
   npm start

5. Open your browser and visit `http://localhost:3000` to view the application.

## Project Structure
   task-management-app
    -client
        -node_modules
        -public
        -src
            -api
                -taskApi.js
            -Components
                -TaskList.js
                -TaskForm.js
                -TaskEdit.js
            index.js
            App.js
            App.css
            index.css
        .env
        .gitignore
        package-lock.json
        package.json
    -server
        -config
            -db.js
        -controllers
            -Controller.js
        -models
            -Task.js
        -node_modules
        -routes
            -taskRoutes.js
        server.js
        .env
        .gitignore
        package-lock.json
        package.json
    -readme.md

## Dependencies

- React
- React Router DOM
- Material-UI

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

