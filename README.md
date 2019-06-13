# Todo list exercise
### Install

- Install https://nodejs.org/en/
- Download archive from link provided
- Unzip file and cd into it
- run `npm install`

---

### Run
`npm start`

Visit http://localhost:8080 in your browser

---

### High level application requirements
1. Multiple users should be able to view the shared public todo list
2. Should be able to add items
3. Should be able to delete items
4. Should be able to edit items (Missing feature)
5. Must be able to deploy in docker (Missing feature)

---

### Tasks
- [x] Add missing requirement #4 to the application
- [ ] Add sufficient test coverage to the application and update readme on howto run the tests
- [x] Add missing requirement #5 to the application (Dockerfile and update readme with instructions)
- [ ] Optional extra requirement #6 - Add a Helm chart for the application that is deployable on minikube along with the required readme entry.

---

### Bonus
4. Display test coverage after tests are executed
5. Find and fix the XSS vulnerability in the application. Also make sure that it wont happen again by including a test.

---

> ### Notes
> - Update the code as needed and document what you have done in the readme below
> - Will be nice if you can git tag the tasks by number

---

### Solution
* Allowed for live reloading during development using the nodemon utility and updating the package.json file.
* Updated Express to a newer version that includes json and urlencoded to allow for ease of use, removed bodyParser.
* Added app.http file (Jetbrains only) to simplify manual api testing.
* Added external stylesheet and bootstrap.
* Added Edit page and fleshed out api's both in terms of path correctness and some simple validation.

#### Thoughts for the future
* Remove repeated HTML code by making use of HTML templating syntax.
* State management with multiple clients, using most likely Redux.
* Data persistence in a mongodb data store.
* Flesh out api validation.
* Flesh out the test cases more.

---

### Local development
In order to run the application for local development type:

```npm run dev```

In order to run the unit tests type:

```npm test```

Do note that the output of these tests is an HTML coverage report that can be found in 

`/coverage/index.html`

---

### Docker deployment
In order to deploy the application with Docker type:

```docker-compose up```

---

### Kubernetes and Minikube

This application assumes minikube has already been installed on the host machine. If this still needs to be done I strongly suggest following the guide here:
https://kubernetes.io/docs/tasks/tools/install-minikube/

I used chocolatey to install minikube and kubectl by typing:

`choco install minikube kubernetes-cli`

I did have an issue where there was a mismatch of the kubectl client version. In order to resolve this I downloaded the correct version and placed it in:

`c:\Program Files\Docker\Docker\resources\bin\`

To launch the minikube cluster type:

`minikube start`

Following this run the below commands to create a deployment and service with a load balancer associated with it.
```
kubectl create -f "./kubernetes/deployment.yml"
kubectl create -f "./kubernetes/service.yml"
```

Finally, to easily navigate to the load balanced service type:

`minikube service my-todolist-service`