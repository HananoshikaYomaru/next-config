# Transition period config (Page + App Router) 🔥

This repos is the minimal example of how a next js config should be set up. The reason what this exist is because there is no documentation about how the project should set up when both page and app router exist.

## Get public config + server config, Goal:

1. achieve object base config
2. server client separation
3. build time validation
4. do this without `next/config`
5. able to get config in next config mjs

## i18n, Goal:

1. app router use the suggested, documented way to handle i18n
2. page router use `next-i18next`
