# Gitlab Migrator

If upgrading from a gitlab bot before it got converted to a maubot plugin, this script is for you. It's published as a docker container for ease of deployment in t2bot.io's environment (in order to keep relevant files securely on the encryption-handling machines).

First, initialize the gitlab bot's database using maubot.

```bash
docker build -t gitlab-migrator -f migrator/Dockerfile migrator
docker run --rm -v /path/to/config.json:/app/config.json -v /path/to/tokens.json:/app/tokens.json -v /path/to/new/gitlab.db:/app/gitlab.db gitlab-migrator
```

Alternatively, install nodejs and make your way to `./migrator`. Run `node index.js` with the files mentioned above in the directory.
