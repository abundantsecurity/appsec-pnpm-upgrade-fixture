# appsec-pnpm-upgrade-fixture

A small token service in a pnpm workspace, kept as a test fixture for Abundant Security's
dependency upgrade checks. Not for production use.

```sh
pnpm install
pnpm start
curl 'http://localhost:8080/token?size=21'
```
