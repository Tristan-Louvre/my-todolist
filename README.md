# Todo list exercise

### Install

- Install https://nodejs.org/en/
- Download archive from link provided
- Unzip file and cd into it
- run `npm install`

### Run
`node app.js`

Visit http://localhost:8080 in your browser

### High level application requirements
1. Multiple users should be able to view the shared public todo list
2. Should be able to add items
3. Should be able to delete items
4. Should be able to edit items (Missing feature)
5. Must be able to deploy in docker (Missing feature)

### Tasks
- [ ] Add missing requirement #4 to the application
- [ ] Add sufficient test coverage to the application and update readme on howto run the tests
- [x] Add missing requirement #5 to the application (Dockerfile and update readme with instructions)
- [ ] Optional extra requirement #6 - Add a Helm chart for the application that is deployable on minikube along with the required readme entry.

### Bonus
4. Display test coverage after tests are executed
5. Find and fix the XSS vulnerability in the application. Also make sure that it wont happen again by including a test.

> ### Notes
> - Update the code as needed and document what you have done in the readme below
> - Will be nice if you can git tag the tasks by number

### Solution
* Allowed for live reloading during development using the nodemon utility and updating the package.json file.
* Updated Express to a newer version that includes json and urlencoded to allow for ease of use, removed bodyParser.
* Added app.http file (Jetbrains only) to simplify api testing.
* Added external stylesheet and bootstrap.

* State management with multiple clients.
* Data persistence.
* Max field limitations.


### Local development
In order to run the application for local development type:

```npm run dev```

### Docker deployment
In order to deploy the application with Docker type:

```docker-compose up```
