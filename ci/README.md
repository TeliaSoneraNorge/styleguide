# Concourse

Login to the team:

```bash
fly -t channel-api login -n channel-api -c https://concourse.common-services.telia.io
```

Instructions to update styleguide pipeline.

```bash
fly -t channel-api set-pipeline -p styleguide -c pipeline.yml
fly -t channel-api unpause-pipeline -p styleguide
fly -t channel-api expose-pipeline --pipeline styleguide
# Undo expose with
fly -t channel-api hide-pipeline --pipeline styleguide
# Destroy pipeline
fly -t channel-api destroy-pipeline -p styleguide
# Hijack a resource
fly -t channel-api hijack -c pipelines/styleguide/{resource-name}
```

Development:

```bash
fly validate-pipeline -c pipeline.yml
```