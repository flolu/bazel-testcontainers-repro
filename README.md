# Setup

```
yarn install
```

# Problem

Works fine

```
yarn test:jasmine
```

But running tests with Bazel throws error

```
yarn test
```

Error log

```
exec ${PAGER:-/usr/bin/less} "$0" || exit 1
Executing tests from //gateway:test
-----------------------------------------------------------------------------
Randomized with seed 30739
Started
[31mF[0m

Failures:
1) integration test starts gateway
  Message:
[31m    Error: connect ECONNREFUSED 127.0.0.1:3000[0m
  Stack:
    error properties: Object({ errno: 'ECONNREFUSED', code: 'ECONNREFUSED', syscall: 'connect', address: '127.0.0.1', port: 3000, config: Object({ url: 'http://localhost:3000', method: 'get', headers: Object({ Accept: 'application/json, text/plain, */*', User-Agent: 'axios/0.20.0' }), transformRequest: [ Function ], transformResponse: [ Function ], timeout: 0, adapter: Function, xsrfCookieName: 'XSRF-TOKEN', xsrfHeaderName: 'X-XSRF-TOKEN', maxContentLength: -1, maxBodyLength: -1, validateStatus: Function, data: undefined }), request: Writable({ _writableState: WritableState({ objectMode: false, highWaterMark: 16384, finalCalled: false, needDrain: false, ending: false, ended: false, finished: false, destroyed: false, decodeStrings: true, defaultEncoding: 'utf8', length: 0, writing: false, corked: 0, sync: true, bufferProcessing: false, onwrite: Function, writecb: null, writelen: 0, bufferedRequest: null, lastBufferedRequest: null, pendingcb: 0, prefinished: false, errorEmitted: false, emitClose: true, au ...
    Error: connect ECONNREFUSED 127.0.0.1:3000
        at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1128:14)

1 spec, 1 failure
Finished in 3.592 seconds
Randomized with seed 30739 (jasmine --random=true --seed=30739)

```
