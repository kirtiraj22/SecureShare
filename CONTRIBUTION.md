# Contribution Guidelines

To start contributing, follow the guidelines given below:

**1.** Fork [this](https://github.com/zkBOYss/SecureShare.git) repository.

**2.** Clone your forked copy of the project.

```
git clone https://github.com/<your_user_name>/SecureShare.git
```

**3.** Navigate to the project directory in your local system.

```
cd SecureShare
```

**4.1** Add a reference (remote) to the original repository.

```
git remote add upstream
https://github.com/zkBOYss/SecureShare.git

```

**4.2** Add a reference (remote) to your forked repository

```
git remote add origin
https://github.com/<your_user_name>/SecureShare.git
```

**5.** Check the remotes for this repository.

```
git remote -v
```

**6.** Always take a pull from the upstream repository to your main branch to keep it updated with the original repository.

```
git pull upstream main
```

**7.** Always create a new branch.

```
git checkout -b <your_branch_name>
```

**8.** Perfom your desired changes to the code base.

**9.** Track your changes.

```
git add .
```

**10.** Commit your changes.

```
git commit -m "commit message"
```

**11.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**12.** To create a pull request, click on `Compare And Pull Requests`.

**13.** Add appropriate title and description to your pull request explaining what your changes do (with suitable explanation and screenshots).

**14.** Click on `Create Pull Request`.
