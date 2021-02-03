# Setup

```
yarn install
```

# Problem

Works fine

```
yarn test:jasmine
```

But running tests with Bazel throws error (only when trying to expose a port)

```
yarn test
```

```
Error: (HTTP code 409) unexpected - Container 7485eecc3ccb83e0ad8039d0f118eab14ee0f28092c76b182936767b9dfba1cb is not running
```
