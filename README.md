## Setup dev environment

### Running locally
1. Check this repo out.
2. `cp .env.example .env.development` and fill in the required environment variables
3. `yarn install`
4. `yarn dev`

### Committing code
1. Create feature branch from `main` branch:

    ```
    git checkout main
    git fetch origin
    git pull --rebase
    git checkout -b [feature-branch]
    ```

2. Develop, stage, and commit your changes:

    ```
    git add .
    git commit -am [message] or yarn commit
    ```

3. Push your changes to Github:

    ```
    git push origin [feature-branch]
    ```

4. Open a pull request and request reviews :)
